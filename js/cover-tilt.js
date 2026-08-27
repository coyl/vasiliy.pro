// Pointer-tracked tilt + zoom for cover images (home tiles and case covers).
// Delegated from document, so covers injected into the case overlay get it too.
(function () {
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var MAX_TILT = 4;   // degrees at the corners
  var ZOOM = 1.06;
  var SELECTOR = '.tile-art, .shade';

  var current = null;
  var rect = null;

  function reset() {
    if (!current) return;
    current.style.removeProperty('--rx');
    current.style.removeProperty('--ry');
    current.style.removeProperty('--z');
    current = null;
    rect = null;
  }

  document.addEventListener('pointermove', function (e) {
    if (e.pointerType && e.pointerType !== 'mouse') return;
    var el = e.target && e.target.closest ? e.target.closest(SELECTOR) : null;
    if (el !== current) {
      reset();
      current = el;
      if (!el) return;
      rect = el.getBoundingClientRect();
    }
    if (!el) return;
    if (!rect) rect = el.getBoundingClientRect();
    // -0.5 … 0.5 from the centre of the cover
    var px = (e.clientX - rect.left) / rect.width - 0.5;
    var py = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.setProperty('--ry', (px * MAX_TILT).toFixed(2) + 'deg');
    el.style.setProperty('--rx', (-py * MAX_TILT).toFixed(2) + 'deg');
    el.style.setProperty('--z', ZOOM);
  }, { passive: true });

  // the cached rect goes stale as soon as the page moves under the cursor
  ['scroll', 'resize'].forEach(function (ev) {
    window.addEventListener(ev, function () { rect = null; }, { passive: true });
  });
  document.addEventListener('pointerleave', reset, true);
  window.addEventListener('blur', reset);
})();
