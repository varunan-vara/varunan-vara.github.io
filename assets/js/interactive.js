// Page-specific interactive widgets: tabs, accordions, and the project tag
// filter. Each widget no-ops if its markup isn't present on the page, so
// this single file is safe to include on every page.
(function () {
  'use strict';

  // ---- Tabs (case-study.html) ----
  document.querySelectorAll('[data-tabs]').forEach(function (tabGroup) {
    var triggers = tabGroup.querySelectorAll('.tab-trigger');
    var panels = tabGroup.querySelectorAll('.tab-panel');

    triggers.forEach(function (trigger) {
      trigger.addEventListener('click', function () {
        var targetId = trigger.getAttribute('data-tab-target');

        triggers.forEach(function (t) { t.setAttribute('aria-selected', 'false'); });
        trigger.setAttribute('aria-selected', 'true');

        panels.forEach(function (panel) {
          panel.hidden = panel.id !== targetId;
        });
      });
    });
  });

  // ---- Accordion (education.html leadership, etc.) ----
  document.querySelectorAll('.accordion-trigger').forEach(function (trigger) {
    var panel = document.getElementById(trigger.getAttribute('aria-controls'));
    if (!panel) return;

    trigger.addEventListener('click', function () {
      var isOpen = trigger.getAttribute('aria-expanded') === 'true';
      var next = !isOpen;

      trigger.setAttribute('aria-expanded', String(next));
      panel.dataset.open = String(next);

      if (next) {
        var inner = panel.querySelector('.accordion-panel-inner');
        panel.style.setProperty('--panel-height', (inner ? inner.scrollHeight : 800) + 'px');
      }
    });
  });

  // ---- Project tag filter (projects.html) ----
  var filterBar = document.querySelector('[data-filter-bar]');
  var projectCards = document.querySelectorAll('.project-card');

  if (filterBar && projectCards.length) {
    var filterButtons = filterBar.querySelectorAll('.filter-btn');

    filterButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var filter = btn.getAttribute('data-filter');

        filterButtons.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');

        projectCards.forEach(function (card) {
          var tags = (card.getAttribute('data-tags') || '').split(' ');
          var show = filter === 'all' || tags.indexOf(filter) !== -1;
          card.hidden = !show;
        });
      });
    });
  }
})();
