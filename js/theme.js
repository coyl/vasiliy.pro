// Night-mode switch. No stored choice = follow the system setting (CSS does that);
// clicking stores an explicit choice in localStorage.
(function () {
  var root = document.documentElement;
  var mq = window.matchMedia('(prefers-color-scheme: dark)');

  function effective() {
    return root.getAttribute('data-theme') || (mq.matches ? 'dark' : 'light');
  }

  function label() {
    var next = effective() === 'dark' ? 'light' : 'dark';
    [].forEach.call(document.querySelectorAll('.theme-toggle'), function (b) {
      b.setAttribute('aria-label', 'Switch to ' + next + ' mode');
      b.setAttribute('title', 'Switch to ' + next + ' mode');
    });
  }

  document.addEventListener('click', function (e) {
    var btn = e.target.closest ? e.target.closest('.theme-toggle') : null;
    if (!btn) return;
    var next = effective() === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (err) {}
    label();
  });

  // with no explicit choice the page keeps tracking the system setting
  if (mq.addEventListener) mq.addEventListener('change', label);
  label();
})();
