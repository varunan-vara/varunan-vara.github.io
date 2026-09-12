// Shared page enhancements: mobile nav toggle, active-link state,
// the nav "Contact" popup, and the scroll-triggered reveal animation.
// Progressive enhancement only — every page is fully readable without JS.
(function () {
  'use strict';

  // ---- Mobile nav toggle ----
  var toggle = document.getElementById('navToggle');
  var menu = document.getElementById('navMenu');
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var isOpen = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close the mobile menu after following a link.
    menu.addEventListener('click', function (evt) {
      if (evt.target.tagName === 'A') {
        menu.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // ---- Active-link state ----
  // Each nav link carries data-nav="home|experience|projects|skills|education".
  // <body data-page="..."> declares which page is currently loaded.
  var currentPage = document.body.getAttribute('data-page');
  if (currentPage && menu) {
    var links = menu.querySelectorAll('a[data-nav]');
    links.forEach(function (link) {
      if (link.getAttribute('data-nav') === currentPage) {
        link.setAttribute('aria-current', 'page');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  }

  // ---- Contact popup (nav "Contact" button opens a <dialog>) ----
  // Progressive enhancement: if <dialog> or showModal() isn't supported, the
  // link's normal href ("mailto:...") still works.
  var contactDialog = document.getElementById('contactDialog');
  var contactTrigger = document.querySelector('.nav-menu a.cta');
  if (contactDialog && contactTrigger && typeof contactDialog.showModal === 'function') {
    contactTrigger.addEventListener('click', function (evt) {
      evt.preventDefault();
      contactDialog.showModal();
    });

    var contactClose = document.getElementById('contactDialogClose');
    if (contactClose) {
      contactClose.addEventListener('click', function () {
        contactDialog.close();
      });
    }

    // Click on the backdrop closes the dialog.
    contactDialog.addEventListener('click', function (evt) {
      if (evt.target === contactDialog) {
        contactDialog.close();
      }
    });
  }

  // ---- Fly-in-from-bottom reveal on scroll ----
  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var revealEls = document.querySelectorAll('.reveal');

  if (revealEls.length) {
    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      revealEls.forEach(function (el) { el.classList.add('is-visible'); });
    } else {
      var revealObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

      revealEls.forEach(function (el) { revealObserver.observe(el); });
    }
  }
})();
