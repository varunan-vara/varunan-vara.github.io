// macOS-dock-style hover magnification for the floating bottom nav,
// approximating magicui's Dock/DockIcon (normally framer-motion springs)
// with a plain pointermove handler. Progressive enhancement only — the
// dock is a fully functional set of links without this script.
(function () {
  'use strict';

  var dock = document.querySelector('[data-dock]');
  if (!dock) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var items = dock.querySelectorAll('.dock-item');
  if (!items.length) return;

  var MAX_SCALE = 1.35;
  var INFLUENCE = 70; // px

  dock.addEventListener('pointermove', function (evt) {
    if (evt.pointerType === 'touch') return;
    items.forEach(function (item) {
      var rect = item.getBoundingClientRect();
      var center = rect.left + rect.width / 2;
      var distance = Math.abs(evt.clientX - center);
      var scale = 1 + (MAX_SCALE - 1) * Math.max(0, 1 - distance / INFLUENCE);
      item.style.transform = 'scale(' + scale.toFixed(3) + ')';
    });
  });

  dock.addEventListener('pointerleave', function () {
    items.forEach(function (item) {
      item.style.transform = '';
    });
  });
})();
