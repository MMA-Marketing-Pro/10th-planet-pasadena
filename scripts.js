/* =========================================================================
   10th Planet Pasadena — Shared scripts
   ========================================================================= */
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    initLucide();
    initNav();
    initScrollAnimations();
    initLeadModal();
    initVideoModal();
    initBookingPage();
    initMarqueeClone();
    initCopyYear();
    initStatCounters();
  });

  /* ---------- Lucide ---------- */
  function initLucide() {
    try {
      if (window.lucide && typeof window.lucide.createIcons === 'function') {
        window.lucide.createIcons();
      }
    } catch (e) { /* noop */ }
  }

  /* ---------- Nav scroll + mobile toggle ---------- */
  function initNav() {
    var nav = document.querySelector('.nav');
    if (!nav) return;

    var toggle = nav.querySelector('.nav-toggle');
    var handleScroll = function () {
      if (window.scrollY > 24) nav.classList.add('scrolled');
      else nav.classList.remove('scrolled');
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    if (toggle) {
      toggle.addEventListener('click', function () {
        nav.classList.toggle('open');
        var isOpen = nav.classList.contains('open');
        toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        document.body.style.overflow = isOpen ? 'hidden' : '';
        var icon = toggle.querySelector('i[data-lucide]');
        if (icon) {
          icon.setAttribute('data-lucide', isOpen ? 'x' : 'menu');
          initLucide();
        }
      });

      nav.querySelectorAll('.nav-mobile a').forEach(function (link) {
        link.addEventListener('click', function () {
          nav.classList.remove('open');
          toggle.setAttribute('aria-expanded', 'false');
          document.body.style.overflow = '';
          var icon = toggle.querySelector('i[data-lucide]');
          if (icon) {
            icon.setAttribute('data-lucide', 'menu');
            initLucide();
          }
        });
      });
    }
  }

  /* ---------- Scroll reveals via IntersectionObserver ---------- */
  function initScrollAnimations() {
    document.documentElement.classList.add('js-ready');
    var els = document.querySelectorAll('.reveal, [data-reveal]');
    if (!els.length) return;

    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            io.unobserve(entry.target);
          }
        });
      }, { rootMargin: '0px 0px -8% 0px' });
      els.forEach(function (el) { io.observe(el); });
    } else {
      els.forEach(function (el) { el.classList.add('in'); });
    }

    // Safety: reveal everything still hidden after 3s (if user lingers offscreen)
    setTimeout(function () {
      els.forEach(function (el) { el.classList.add('in'); });
    }, 3000);
  }

  /* ---------- Stat counters ---------- */
  function initStatCounters() {
    var counters = document.querySelectorAll('[data-count-to]');
    if (!counters.length) return;
    if (!('IntersectionObserver' in window)) {
      counters.forEach(function (el) {
        el.textContent = el.getAttribute('data-count-to');
      });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        var target = parseFloat(el.getAttribute('data-count-to')) || 0;
        var suffix = el.getAttribute('data-suffix') || '';
        var prefix = el.getAttribute('data-prefix') || '';
        var duration = 1200;
        var start = performance.now();
        function tick(now) {
          var t = Math.min(1, (now - start) / duration);
          var eased = 1 - Math.pow(1 - t, 3);
          var current = Math.round(target * eased);
          el.textContent = prefix + current.toLocaleString() + suffix;
          if (t < 1) requestAnimationFrame(tick);
          else el.textContent = prefix + target.toLocaleString() + suffix;
        }
        requestAnimationFrame(tick);
        io.unobserve(el);
      });
    }, { threshold: 0.4 });
    counters.forEach(function (el) { io.observe(el); });
  }

  /* ---------- Marquee — clone children for seamless loop (safe DOM clone) ---------- */
  function initMarqueeClone() {
    document.querySelectorAll('.marquee-track').forEach(function (track) {
      if (track.dataset.cloned === 'true') return;
      var frag = document.createDocumentFragment();
      Array.prototype.forEach.call(track.children, function (child) {
        frag.appendChild(child.cloneNode(true));
      });
      track.appendChild(frag);
      track.dataset.cloned = 'true';
    });
  }

  /* ---------- Dynamic copyright year ---------- */
  function initCopyYear() {
    var year = new Date().getFullYear();
    document.querySelectorAll('[data-year]').forEach(function (el) {
      el.textContent = year;
    });
  }

  /* ---------- Lead Capture Modal ---------- */
  function initLeadModal() {
    var modal = document.getElementById('leadModal');
    if (!modal) return;

    var openTriggers = document.querySelectorAll('[data-cta="lead-modal"]');
    var closeBtn = modal.querySelector('.lead-modal__close');
    var backdrop = modal.querySelector('.lead-modal__backdrop');
    var form = modal.querySelector('form');
    var programSelect = modal.querySelector('#leadProgram');

    function openModal(presetProgram) {
      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
      if (presetProgram && programSelect) {
        programSelect.value = presetProgram;
      }
      setTimeout(function () {
        var firstInput = modal.querySelector('input');
        if (firstInput) firstInput.focus();
      }, 200);
    }

    function closeModal() {
      modal.classList.remove('open');
      document.body.style.overflow = '';
    }

    openTriggers.forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        var preset = btn.getAttribute('data-program');
        openModal(preset);
      });
    });

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (backdrop) backdrop.addEventListener('click', closeModal);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
    });

    var phoneInput = modal.querySelector('#leadPhone');
    if (phoneInput) {
      phoneInput.addEventListener('input', function (e) {
        var digits = e.target.value.replace(/\D/g, '').slice(0, 10);
        var formatted = digits;
        if (digits.length > 6) {
          formatted = '(' + digits.slice(0, 3) + ') ' + digits.slice(3, 6) + '-' + digits.slice(6);
        } else if (digits.length > 3) {
          formatted = '(' + digits.slice(0, 3) + ') ' + digits.slice(3);
        } else if (digits.length > 0) {
          formatted = '(' + digits;
        }
        e.target.value = formatted;
      });
    }

    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var data = {
          firstName: form.querySelector('#leadFirstName').value.trim(),
          lastName: form.querySelector('#leadLastName').value.trim(),
          email: form.querySelector('#leadEmail').value.trim(),
          phone: form.querySelector('#leadPhone').value.trim(),
          program: form.querySelector('#leadProgram').value,
          submittedAt: new Date().toISOString()
        };
        try {
          sessionStorage.setItem('leadFormData', JSON.stringify(data));
        } catch (err) { /* storage might be disabled */ }
        // TODO: wire backend capture (GHL webhook / CRM) here if desired.
        window.location.href = 'booking.html?program=' + encodeURIComponent(data.program);
      });
    }
  }

  /* ---------- Video Modal (inline YouTube player) ---------- */
  function initVideoModal() {
    var modal = document.getElementById('videoModal');
    if (!modal) return;

    var triggers = document.querySelectorAll('[data-video-id]');
    if (!triggers.length) return;

    var frame = modal.querySelector('#videoModalFrame');
    var titleEl = modal.querySelector('#videoModalTitle');
    var closeEls = modal.querySelectorAll('[data-video-close]');
    var lastTrigger = null;

    function clearFrame() {
      while (frame.firstChild) frame.removeChild(frame.firstChild);
    }

    function appendLoader() {
      var loader = document.createElement('div');
      loader.className = 'video-modal__frame-loader';
      loader.textContent = 'Loading video…';
      frame.appendChild(loader);
    }

    function buildEmbed(id) {
      // Use youtube.com/embed (not nocookie) and omit autoplay — "Made for kids"
      // videos (required flag for kids-program content under COPPA) reject
      // autoplay=1 with error 153 "player configuration error." User clicks
      // play inside the iframe after the modal opens.
      var src = 'https://www.youtube.com/embed/' + encodeURIComponent(id) +
                '?rel=0&playsinline=1';
      var iframe = document.createElement('iframe');
      iframe.setAttribute('src', src);
      iframe.setAttribute('title', titleEl.textContent || 'Video player');
      iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
      iframe.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin');
      iframe.setAttribute('allowfullscreen', '');
      iframe.setAttribute('loading', 'lazy');
      return iframe;
    }

    function openModal(id, title, trigger) {
      if (!id) return;
      lastTrigger = trigger || null;
      titleEl.textContent = title || 'Now Watching';
      clearFrame();
      appendLoader();
      frame.appendChild(buildEmbed(id));
      modal.classList.add('open');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      // Move focus into the modal for keyboard users
      setTimeout(function () {
        var closeBtn = modal.querySelector('.video-modal__close');
        if (closeBtn) closeBtn.focus();
      }, 40);
    }

    function closeModal() {
      modal.classList.remove('open');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      // Wipe the iframe so playback (and audio) fully stops.
      clearFrame();
      if (lastTrigger && typeof lastTrigger.focus === 'function') {
        try { lastTrigger.focus(); } catch (e) { /* noop */ }
      }
    }

    triggers.forEach(function (el) {
      el.addEventListener('click', function (e) {
        var id = el.getAttribute('data-video-id');
        if (!id) return; // fall back to default link behavior
        e.preventDefault();
        openModal(id, el.getAttribute('data-video-title') || '', el);
      });
    });

    closeEls.forEach(function (el) {
      el.addEventListener('click', closeModal);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
    });
  }

  /* ---------- Booking page — show correct calendar ---------- */
  function initBookingPage() {
    if (!document.body.classList.contains('booking-page')) return;

    var params = new URLSearchParams(window.location.search);
    var program = params.get('program') || 'adult-fundamentals';

    var lead = null;
    try { lead = JSON.parse(sessionStorage.getItem('leadFormData') || 'null'); }
    catch (e) { /* ignore */ }

    if (lead && lead.firstName) {
      var greeting = document.querySelector('[data-greeting]');
      if (greeting) {
        greeting.textContent = lead.firstName + ", you're almost done.";
      }
    }

    function showCalendar(id) {
      document.querySelectorAll('.booking-calendar').forEach(function (c) {
        c.classList.remove('active');
      });
      var target = document.querySelector('.booking-calendar[data-program="' + id + '"]');
      if (target) target.classList.add('active');

      document.querySelectorAll('.program-chip').forEach(function (chip) {
        chip.classList.toggle('active', chip.getAttribute('data-program') === id);
      });
    }

    var initialExists = document.querySelector('.booking-calendar[data-program="' + program + '"]');
    if (initialExists) {
      showCalendar(program);
    } else {
      var first = document.querySelector('.booking-calendar');
      if (first) showCalendar(first.getAttribute('data-program'));
    }

    document.querySelectorAll('.program-chip').forEach(function (chip) {
      chip.addEventListener('click', function () {
        showCalendar(chip.getAttribute('data-program'));
      });
    });
  }
})();
