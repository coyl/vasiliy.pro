// Opens work/*.html case studies in an overlay over the home page,
// dominik.design-style. Links keep working as plain pages without JS.
(function () {
  var overlay = document.getElementById('case-overlay');
  var dialog = overlay.querySelector('.case-dialog');
  var content = overlay.querySelector('.case-content');
  var closeBtn = overlay.querySelector('.case-close');
  var homeUrl = location.href;

  function absolutize(root, caseUrl) {
    ['href', 'src'].forEach(function (attr) {
      root.querySelectorAll('[' + attr + ']').forEach(function (el) {
        var v = el.getAttribute(attr);
        if (!v || /^(https?:|mailto:|#|\/)/.test(v)) return;
        el.setAttribute(attr, new URL(v, caseUrl).href);
      });
    });
  }

  function open(url, push) {
    fetch(url)
      .then(function (r) { return r.ok ? r.text() : Promise.reject(r.status); })
      .then(function (html) {
        var doc = new DOMParser().parseFromString(html, 'text/html');
        var main = doc.querySelector('main.case');
        if (!main) { window.location.href = url; return; }
        absolutize(main, url);
        content.innerHTML = '';
        content.appendChild(main);
        overlay.classList.add('open');
        document.body.classList.add('overlay-open');
        overlay.scrollTop = 0;
        if (push) history.pushState({ caseUrl: url }, '', url);
      })
      .catch(function () { window.location.href = url; });
  }

  function close(push) {
    overlay.classList.remove('open');
    document.body.classList.remove('overlay-open');
    if (push) history.pushState({}, '', homeUrl);
  }

  document.addEventListener('click', function (e) {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button) return;
    var a = e.target.closest('a[href]');
    if (!a) return;
    var href = a.getAttribute('href') || '';
    if (overlay.classList.contains('open') && overlay.contains(a)) {
      if (a.href.indexOf('/work/') !== -1) { e.preventDefault(); open(a.href, true); }
      else if (href.indexOf('index.html') !== -1 || href.charAt(0) === '#') { e.preventDefault(); close(true); }
      return;
    }
    if (href.indexOf('work/') === 0) { e.preventDefault(); open(a.href, true); }
  });

  closeBtn.addEventListener('click', function () { close(true); });
  overlay.addEventListener('click', function (e) {
    if (!dialog.contains(e.target)) close(true);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && overlay.classList.contains('open')) close(true);
  });
  window.addEventListener('popstate', function (e) {
    if (e.state && e.state.caseUrl) open(e.state.caseUrl, false);
    else close(false);
  });
})();
