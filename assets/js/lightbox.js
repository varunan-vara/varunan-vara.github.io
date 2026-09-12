// Image lightbox: clicking a .card-thumbs link opens the linked image in a
// centered <dialog> instead of navigating. Progressive enhancement — if
// <dialog>/showModal() isn't supported, links fall back to normal navigation.
(function () {
  'use strict';

  var dialog = document.getElementById('lightbox');
  var image = document.getElementById('lightboxImage');
  if (!dialog || !image || typeof dialog.showModal !== 'function') return;

  var thumbLinks = document.querySelectorAll('.card-thumbs a');
  if (!thumbLinks.length) return;

  thumbLinks.forEach(function (link) {
    link.addEventListener('click', function (evt) {
      evt.preventDefault();
      var thumb = link.querySelector('img');
      image.src = link.getAttribute('href');
      image.alt = thumb ? thumb.alt : '';
      dialog.showModal();
    });
  });

  var closeBtn = document.getElementById('lightboxClose');
  if (closeBtn) {
    closeBtn.addEventListener('click', function () {
      dialog.close();
    });
  }

  // Click on the backdrop closes the dialog.
  dialog.addEventListener('click', function (evt) {
    if (evt.target === dialog) {
      dialog.close();
    }
  });

  dialog.addEventListener('close', function () {
    image.src = '';
  });
})();
