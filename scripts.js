/* =========================================================
   10th Planet Pasadena — LAB-01 shared scripts
   ========================================================= */
(function(){
  'use strict';

  // Tag <html> so CSS can scope the reveal-fade behavior to JS-capable clients.
  document.documentElement.classList.add('js-reveal');

  document.addEventListener('DOMContentLoaded', function(){
    initNav();
    initMobileMenu();
    initReveal();
    initLeadModal();
    initInlineTrialForm();
    initBentoTilt();
    initBookingPage();
    initYearStamp();
    initBarsFill();
  });

  /* Lead → GHL webhooks. Each program fires its webhooks in parallel via
     navigator.sendBeacon, which is purpose-built for fire-and-forget POSTs
     during page navigation. Falls back to fetch + keepalive if sendBeacon
     is unavailable or refuses the request. */
  var LEAD_WEBHOOKS = {
    'no-gi-jiu-jitsu': [
      'https://services.leadconnectorhq.com/hooks/ToDnK8jOevlOIUZVkwm1/webhook-trigger/1305112a-b9a9-4b5e-9ad7-0a4100fbb9ef',
      'https://services.leadconnectorhq.com/hooks/ToDnK8jOevlOIUZVkwm1/webhook-trigger/fadbbbf8-d759-424d-942b-7c9347686c32'
    ],
    'nano-kids': [
      'https://services.leadconnectorhq.com/hooks/ToDnK8jOevlOIUZVkwm1/webhook-trigger/59691ffd-f837-4b90-a3fa-d33fc7d09185',
      'https://services.leadconnectorhq.com/hooks/ToDnK8jOevlOIUZVkwm1/webhook-trigger/14be997a-7ec3-41e2-96b0-c78bf2d892ef'
    ],
    'kids': [
      'https://services.leadconnectorhq.com/hooks/ToDnK8jOevlOIUZVkwm1/webhook-trigger/a300b1eb-370a-47e7-8ba8-500aa54770ad',
      'https://services.leadconnectorhq.com/hooks/ToDnK8jOevlOIUZVkwm1/webhook-trigger/cbd2a95d-1a50-4ca5-8787-6c235f9e5e6e'
    ]
  };

  function fireLeadWebhooks(program, payload){
    var urls = LEAD_WEBHOOKS[program] || [];
    console.log('[lead] fireLeadWebhooks called', { program: program, urlCount: urls.length, payload: payload });
    if (!urls.length){
      console.warn('[lead] No webhooks registered for program:', program);
      return;
    }
    var body = JSON.stringify(payload);
    urls.forEach(function(url, i){
      var label = '[lead] hook ' + (i + 1) + '/' + urls.length;
      var sent = false;
      try {
        if (navigator && typeof navigator.sendBeacon === 'function'){
          var blob = new Blob([body], { type: 'application/json' });
          sent = navigator.sendBeacon(url, blob);
          console.log(label, 'sendBeacon →', sent ? 'queued' : 'rejected', url);
        } else {
          console.log(label, 'sendBeacon unavailable, trying fetch', url);
        }
      } catch(err){
        console.warn(label, 'sendBeacon threw', err);
      }
      if (!sent && typeof fetch === 'function'){
        try {
          fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            keepalive: true,
            body: body
          }).then(function(r){
            console.log(label, 'fetch resolved', r.status, url);
          }).catch(function(err){
            console.warn(label, 'fetch rejected', err, url);
          });
        } catch(err){
          console.warn(label, 'fetch threw', err);
        }
      }
    });
  }

  function navigateAfterWebhooks(href){
    // Yield one tick so beacon/fetch are flushed by the browser before
    // the navigation kicks in. setTimeout(0) puts us at the back of the
    // task queue, which is enough for the network layer to dispatch.
    setTimeout(function(){ window.location.href = href; }, 0);
  }

  function buildLeadPayload(fd){
    return {
      first_name: fd.get('first') || '',
      last_name:  fd.get('last')  || '',
      full_name:  ((fd.get('first') || '') + ' ' + (fd.get('last') || '')).trim(),
      email:      fd.get('email') || '',
      phone:      fd.get('phone') || '',
      program:    fd.get('program') || '',
      source:     'website-lead-form',
      submitted_at: new Date().toISOString()
    };
  }

  function buildBookingQuery(fd){
    return 'program=' + encodeURIComponent(fd.get('program') || '') +
           '&first='  + encodeURIComponent(fd.get('first')   || '') +
           '&last='   + encodeURIComponent(fd.get('last')    || '') +
           '&email='  + encodeURIComponent(fd.get('email')   || '') +
           '&phone='  + encodeURIComponent(fd.get('phone')   || '');
  }

  /* Navigation: shadow + blur after scroll */
  function initNav(){
    var nav = document.querySelector('.nav');
    if (!nav) return;
    var onScroll = function(){
      if (window.scrollY > 12){ nav.classList.add('nav--scrolled'); }
      else { nav.classList.remove('nav--scrolled'); }
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive:true });
  }

  /* Mobile menu: open/close, lock body scroll, animated hamburger */
  function initMobileMenu(){
    var toggle = document.querySelector('.nav-toggle');
    var menu   = document.getElementById('mobile-menu');
    if (!toggle || !menu) return;

    var open = false;
    var setState = function(next){
      open = next;
      toggle.setAttribute('aria-expanded', String(open));
      menu.setAttribute('aria-hidden', String(!open));
      document.body.classList.toggle('no-scroll', open);
      var l1 = toggle.querySelector('[data-l1]');
      var l2 = toggle.querySelector('[data-l2]');
      if (l1 && l2){
        if (open){
          l1.setAttribute('transform', 'translate(0 0) rotate(45 12 12)');
          l2.setAttribute('transform', 'translate(0 0) rotate(-45 12 12)');
        } else {
          l1.removeAttribute('transform');
          l2.removeAttribute('transform');
        }
      }
    };
    toggle.addEventListener('click', function(){ setState(!open); });
    menu.querySelectorAll('a').forEach(function(a){
      a.addEventListener('click', function(){ setState(false); });
    });
    document.addEventListener('keydown', function(e){
      if (e.key === 'Escape' && open){ setState(false); }
    });
  }

  /* IntersectionObserver reveal on scroll */
  function initReveal(){
    var els = document.querySelectorAll('.reveal');
    if (!els.length) return;
    if (!('IntersectionObserver' in window)){
      els.forEach(function(el){ el.classList.add('is-in'); });
      return;
    }
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if (entry.isIntersecting){
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
    els.forEach(function(el){ io.observe(el); });
    // Immediately reveal anything already inside the viewport at first paint.
    var vh = window.innerHeight || document.documentElement.clientHeight;
    els.forEach(function(el){
      var r = el.getBoundingClientRect();
      if (r.top < vh && r.bottom > 0) el.classList.add('is-in');
    });
    // Final safety net: after 1.2s, reveal anything still hidden.
    setTimeout(function(){
      els.forEach(function(el){ el.classList.add('is-in'); });
    }, 1200);
  }

  /* Lead capture modal (shared) */
  function initLeadModal(){
    var modal = document.getElementById('lead-modal');
    if (!modal) return;

    var form = modal.querySelector('form');
    var selectEl = modal.querySelector('#lead-program');
    var closeBtn = modal.querySelector('[data-close]');
    var overlay  = modal.querySelector('.modal-overlay');

    var setState = function(next, preselect){
      modal.setAttribute('aria-hidden', String(!next));
      document.body.classList.toggle('no-scroll', next);
      if (next && preselect && selectEl){
        for (var i=0; i<selectEl.options.length; i++){
          if (selectEl.options[i].value === preselect){ selectEl.selectedIndex = i; break; }
        }
      }
      if (next){
        setTimeout(function(){
          var first = modal.querySelector('input,select,button');
          if (first) first.focus();
        }, 60);
      }
    };

    document.querySelectorAll('[data-open-lead]').forEach(function(trigger){
      trigger.addEventListener('click', function(e){
        e.preventDefault();
        var preselect = trigger.getAttribute('data-program') || '';
        setState(true, preselect);
      });
    });

    if (closeBtn) closeBtn.addEventListener('click', function(){ setState(false); });
    if (overlay)  overlay.addEventListener('click',  function(){ setState(false); });
    document.addEventListener('keydown', function(e){
      if (e.key === 'Escape' && modal.getAttribute('aria-hidden') === 'false'){ setState(false); }
    });

    if (form){
      var formReadyAt = Date.now();
      form.addEventListener('submit', function(e){
        e.preventDefault();
        console.log('[lead] modal submit fired');
        // Honeypot: bots fill the hidden "website" field; humans don't see it.
        // Time-trap: real users can't fill the form in under 1.5s.
        var hp = form.querySelector('input[name="website"]');
        var elapsed = Date.now() - formReadyAt;
        if ((hp && hp.value) || elapsed < 1500){
          console.warn('[lead] modal submit BLOCKED by anti-bot — honeypot:', !!(hp && hp.value), 'elapsed:', elapsed + 'ms');
          setState(false);
          return;
        }
        var fd = new FormData(form);
        fireLeadWebhooks(fd.get('program') || '', buildLeadPayload(fd));
        navigateAfterWebhooks('booking.html?' + buildBookingQuery(fd));
      });
    }
  }

  /* Inline trial form on free-trial.html — same funnel as the modal. */
  function initInlineTrialForm(){
    var ft = document.getElementById('main-trial-form');
    if (!ft) return;
    ft.addEventListener('submit', function(e){
      e.preventDefault();
      console.log('[lead] inline submit fired');
      var fd = new FormData(ft);
      fireLeadWebhooks(fd.get('program') || '', buildLeadPayload(fd));
      navigateAfterWebhooks('booking.html?' + buildBookingQuery(fd));
    });
  }

  /* Cursor-follow glow on bento tiles */
  function initBentoTilt(){
    var tiles = document.querySelectorAll('.bento .tile, .prog, .coach, .report');
    tiles.forEach(function(tile){
      tile.addEventListener('mousemove', function(e){
        var rect = tile.getBoundingClientRect();
        var x = ((e.clientX - rect.left) / rect.width) * 100;
        var y = ((e.clientY - rect.top)  / rect.height) * 100;
        tile.style.setProperty('--mx', x + '%');
        tile.style.setProperty('--my', y + '%');
      });
    });
  }

  /* Booking page: read program param, activate calendar + switcher */
  function initBookingPage(){
    var page = document.querySelector('[data-page="booking"]');
    if (!page) return;

    var params = new URLSearchParams(window.location.search);
    var initial = params.get('program') || 'no-gi-jiu-jitsu';

    var frames   = page.querySelectorAll('[data-program]');
    var switches = page.querySelectorAll('.program-switcher button');
    var label    = page.querySelector('[data-program-label]');

    var nameFor = function(slug){
      var map = {
        'no-gi-jiu-jitsu': 'Adults No-Gi Jiu-Jitsu',
        'nano-kids':       'Nano Kids (ages 4–6)',
        'kids':            'Kids (ages 6–12)'
      };
      return map[slug] || 'Your Class';
    };

    var activate = function(slug){
      frames.forEach(function(f){ f.classList.toggle('is-active', f.getAttribute('data-program') === slug); });
      switches.forEach(function(b){ b.classList.toggle('is-active', b.getAttribute('data-program') === slug); });
      if (label) label.textContent = nameFor(slug);
      try{
        var url = new URL(window.location.href);
        url.searchParams.set('program', slug);
        window.history.replaceState({}, '', url);
      }catch(_){}
    };

    switches.forEach(function(btn){
      btn.addEventListener('click', function(){ activate(btn.getAttribute('data-program')); });
    });

    activate(initial);

    var firstName = params.get('first');
    if (firstName){
      var greet = page.querySelector('[data-greet]');
      if (greet) greet.textContent = decodeURIComponent(firstName) + ',';
    }
  }

  /* Copyright year */
  function initYearStamp(){
    var year = new Date().getFullYear();
    document.querySelectorAll('[data-year]').forEach(function(el){
      el.textContent = String(year);
    });
  }

  /* Animate mini bar-chart on reveal */
  function initBarsFill(){
    var bars = document.querySelectorAll('.bars');
    if (!bars.length) return;
    if (!('IntersectionObserver' in window)){
      bars.forEach(run);
      return;
    }
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if (entry.isIntersecting){ run(entry.target); io.unobserve(entry.target); }
      });
    }, { threshold: 0.3 });
    bars.forEach(function(b){ io.observe(b); });

    function run(bar){
      var spans = bar.querySelectorAll('span');
      spans.forEach(function(s, i){
        setTimeout(function(){
          var h = s.getAttribute('data-h') || String(20 + (i * 11) % 75);
          s.style.height = h + '%';
        }, i * 90);
      });
    }
  }

})();
