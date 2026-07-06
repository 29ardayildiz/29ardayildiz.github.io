/* ============================================================
   ARDA YILDIZ — PORTFOLIO · app.js
   Vanilla JS only. No libraries.
   ============================================================ */

(function () {
  'use strict';

  /* ── Cached elements ────────────────────────────────────── */
  var nav       = document.getElementById('nav');
  var toggle    = document.getElementById('nav-toggle');
  var drawer    = document.getElementById('nav-drawer');
  var navLinks  = document.querySelectorAll('.nav__link, .drawer__link');
  var reveals   = document.querySelectorAll('.reveal');
  var revealGrp = document.querySelectorAll('.reveal-group');


  /* ── 1. Nav scroll state ────────────────────────────────── */
  function handleScroll() {
    if (window.scrollY > 24) {
      nav.classList.add('is-scrolled');
    } else {
      nav.classList.remove('is-scrolled');
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // run once on load


  /* ── 2. Mobile menu ─────────────────────────────────────── */
  function openMenu() {
    drawer.classList.add('is-open');
    toggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    drawer.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  toggle.addEventListener('click', function () {
    var isOpen = drawer.classList.contains('is-open');
    if (isOpen) { closeMenu(); } else { openMenu(); }
  });

  // Close on any nav link click
  navLinks.forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  // Close on Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { closeMenu(); }
  });


  /* ── 3. Smooth scroll ───────────────────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') { return; }
      var target = document.querySelector(targetId);
      if (!target) { return; }

      e.preventDefault();
      var offset = nav.offsetHeight;
      var top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: top, behavior: 'smooth' });
    });
  });


  /* ── 4. Scroll reveal (IntersectionObserver) ────────────── */
  if ('IntersectionObserver' in window) {

    // Single elements
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -48px 0px'
    });

    reveals.forEach(function (el) {
      revealObserver.observe(el);
    });

    // Stagger groups — observe parent, trigger children
    var groupObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.reveal').forEach(function (child) {
            child.classList.add('is-visible');
          });
          groupObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.08,
      rootMargin: '0px 0px -32px 0px'
    });

    revealGrp.forEach(function (group) {
      groupObserver.observe(group);
    });

  } else {
    // Fallback: show everything immediately
    reveals.forEach(function (el) { el.classList.add('is-visible'); });
  }


  /* ── 5. Typewriter effect ───────────────────────────────── */
  var typewriterEl = document.getElementById('hero-tagline');

  if (typewriterEl) {
    var fullText   = typewriterEl.getAttribute('data-typewriter') || '';
    var textSpan   = typewriterEl.querySelector('.typewriter-text');
    var cursorSpan = typewriterEl.querySelector('.typewriter-cursor');
    var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) {
      // Skip animation — show full text immediately
      if (textSpan) { textSpan.textContent = fullText; }
      if (cursorSpan) { cursorSpan.classList.add('is-done'); }
    } else {
      var charIndex = 0;
      var delay     = 300;   // ms before typing starts
      var speed     = 22;    // ms per character

      setTimeout(function startTyping() {
        if (!textSpan || !cursorSpan) { return; }

        function typeNext() {
          if (charIndex < fullText.length) {
            textSpan.textContent += fullText.charAt(charIndex);
            charIndex++;
            setTimeout(typeNext, speed);
          } else {
            cursorSpan.classList.add('is-done');
          }
        }

        typeNext();
      }, delay);
    }
  }

})();
