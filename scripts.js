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
            entry.target.classList.add('visible');
            io.unobserve(entry.target);
          }
        });
      }, { rootMargin: '0px 0px -8% 0px' });
      els.forEach(function (el) { io.observe(el); });
    } else {
      els.forEach(function (el) { el.classList.add('visible'); });
    }

    // Safety: reveal everything still hidden after 3s (if user lingers offscreen)
    setTimeout(function () {
      els.forEach(function (el) { el.classList.add('visible'); });
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
      modal.classList.add('active');
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
      modal.classList.remove('active');
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
      if (e.key === 'Escape' && modal.classList.contains('active')) closeModal();
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
