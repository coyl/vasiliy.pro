// "Worst of the 2000s" birthday theme: Microsoft Office (19 Nov) and Windows 1.0 (20 Nov).
// On those days, or with ?y2k=1, the page gets html.y2k plus css/y2k.css and a pile of
// period-correct nonsense. "Switch to normal design" crashes the fake OS into the real site
// and remembers the choice for the rest of the year. ?y2k=0 forces it off.
// The way back: the Konami code (any day), and a footer link that shows only on the
// birthdays themselves or in a ?y2k=1 preview.
(function () {
  var root = document.documentElement;
  var script = document.currentScript;
  var base = script ? script.src.replace(/js\/y2k\.js.*$/, '') : '';
  var now = new Date();
  var year = String(now.getFullYear());
  var param = (location.search.match(/[?&]y2k=(\d)/) || [])[1];
  var stored = null;
  try { stored = localStorage.getItem('y2k-off'); } catch (e) {}

  var season = now.getMonth() === 10 && (now.getDate() === 19 || now.getDate() === 20);
  var preview = param === '1';
  var on = preview || (param !== '0' && season && stored !== year);
  var canReturn = preview || (param !== '0' && season);

  var calm = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var lang = (root.lang || 'en').slice(0, 2);

  var T = {
    ru: {
      banner: '🚧 ВНИМАНИЕ! Сайт оптимизирован для просмотра через Internet Explorer 4.0 с разрешением экрана 800х600. Празднуем День рождения Microsoft Office! Включите звук в колонках! 🚧',
      marquee: '★ 19 ноября — День рождения Microsoft Office! ★ 20 ноября — Windows 1.0 исполняется 41 год! ★ Добро пожаловать на мою домашнюю страничку!!! ★ Не забудьте расписаться в гостевой книге ★ Сайт находится в стадии разработки с 1999 года ★',
      title: '★★★ С ДНЁМ РОЖДЕНИЯ, OFFICE! ★★★ ',
      escape: 'Переключиться в обычный дизайн',
      counter: 'Вы — посетитель №',
      fav: 'Добавить в Избранное', home: 'Сделать стартовой', guest: 'Гостевая книга',
      ieOnly: 'Эта функция доступна только в Internet Explorer 4.0!',
      midi: 'Играть', stop: 'Стоп', back: '🕹 Вернуть 2000-е',
      errTitle: 'Ошибка',
      errors: [
        'Программа «Дизайн 2000-х» выполнила недопустимую операцию и будет закрыта.',
        'Не найден файл NORMAL_DESIGN.DLL. Вставьте дискету №3 и нажмите OK.',
        'Недостаточно памяти для отображения Comic Sans. Закройте 47 гифок и повторите попытку.',
        'Ошибка 0x000007D0: слишком много снежинок.',
        'Бегущую строку невозможно остановить: она уже убежала.',
        'Internet Explorer 4.0 не отвечает. Подождать ещё 25 лет?',
        'Соединение с модемом разорвано. Набрать 0-800-DESIGN ещё раз?',
        'Ошибка Y2K: обнаружен 19100 год.',
        'Счётчик посещений переполнен. Вы — посетитель №-32768.',
        'Невозможно закрыть окно «Ошибка»: произошла ошибка.'
      ],
      bsod: [
        'Произошла фатальная ошибка 0E по адресу 0028:C0FFEE19 в VXD COMICSANS(01) + 00002000. Текущий дизайн будет закрыт.',
        '*  Нажмите любую клавишу, чтобы вернуться в ' + year + ' год.\n*  Нажмите CTRL+ALT+DEL, чтобы перезагрузить карьеру. Все несохранённые гифки будут потеряны.',
        'Нажмите любую клавишу для продолжения '
      ]
    },
    en: {
      banner: '🚧 WARNING! This site is best viewed in Internet Explorer 4.0 at 800x600. We are celebrating Microsoft Office’s birthday! Turn on your speakers! 🚧',
      marquee: '★ 19 November — happy birthday, Microsoft Office! ★ 20 November — Windows 1.0 turns 41! ★ Welcome to my homepage!!! ★ Please sign my guestbook ★ This site has been under construction since 1999 ★',
      title: '★★★ HAPPY BIRTHDAY, OFFICE! ★★★ ',
      escape: 'Switch to normal design',
      counter: 'You are visitor No.',
      fav: 'Add to Favorites', home: 'Make this my homepage', guest: 'Guestbook',
      ieOnly: 'This feature requires Internet Explorer 4.0!',
      midi: 'Play', stop: 'Stop', back: '🕹 Back to the 2000s',
      errTitle: 'Error',
      errors: [
        'DESIGN2000.EXE has performed an illegal operation and will be shut down.',
        'Cannot find NORMAL_DESIGN.DLL. Insert disk 3 and press OK.',
        'Not enough memory to display Comic Sans. Close 47 GIFs and try again.',
        'Error 0x000007D0: too many snowflakes.',
        'The marquee cannot be stopped: it has already run away.',
        'Internet Explorer 4.0 is not responding. Wait another 25 years?',
        'Your modem has disconnected. Redial 0-800-DESIGN?',
        'Y2K error: the year 19100 was detected.',
        'The hit counter has overflowed. You are visitor No. -32768.',
        'Cannot close the “Error” window: an error has occurred.'
      ],
      bsod: [
        'A fatal exception 0E has occurred at 0028:C0FFEE19 in VXD COMICSANS(01) + 00002000. The current design will be terminated.',
        '*  Press any key to return to ' + year + '.\n*  Press CTRL+ALT+DEL to restart your career. You will lose any unsaved GIFs.',
        'Press any key to continue '
      ]
    }
  };
  var t = T[lang] || T.en;

  // the theme's own stylesheet, so normal days pay only for this small script
  var css = null, cssReady = false;
  function loadCss(cb) {
    if (cssReady) return cb && cb();
    if (!css) {
      css = document.createElement('link');
      css.rel = 'stylesheet';
      css.href = base + 'css/y2k.css';
      css.addEventListener('load', function () { cssReady = true; if (css.cb) css.cb(); });
      document.head.appendChild(css);
    }
    css.cb = cb;
  }
  function ready(fn) {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fn);
    else fn();
  }

  var added = [];   // nodes to remove when the theme goes away
  var timers = [];
  function el(tag, cls, html) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }
  function gif(name, cls, alt) {
    var i = el('img', cls);
    i.src = base + 'i/y2k/' + name + '.gif';
    i.alt = alt || '';
    return i;
  }
  function put(node, parent, before) {
    if (!parent) return node;
    parent.insertBefore(node, before === undefined ? null : before);
    added.push(node);
    return node;
  }
  function q(s) { return document.querySelector(s); }
  function ieOnly(e) { e.preventDefault(); alert(t.ieOnly); }

  // links between the home pages keep the theme on: the language switch, the brand
  var homePath = /^\/(index|de|ru|pl)\.html$|^\/$/;
  function keepLinks() {
    [].forEach.call(document.querySelectorAll('a[href]'), function (a) {
      var raw = a.getAttribute('href');
      if (raw.charAt(0) === '#') return;
      var u = new URL(raw, location.href);
      if (u.origin !== location.origin || !homePath.test(u.pathname) || u.searchParams.has('y2k')) return;
      u.searchParams.set('y2k', '1');
      a.setAttribute('data-y2k-href', raw);
      a.setAttribute('href', u.pathname + u.search + u.hash);
    });
  }
  function restoreLinks() {
    [].forEach.call(document.querySelectorAll('a[data-y2k-href]'), function (a) {
      a.setAttribute('href', a.getAttribute('data-y2k-href'));
      a.removeAttribute('data-y2k-href');
    });
  }

  function decorate() {
    keepLinks();
    var body = document.body;
    var banner = el('div', 'y2k-banner');
    banner.appendChild(el('span', null, t.banner));
    put(banner, body, body.firstChild);

    var header = q('.site-header');
    var mq = el('marquee', 'y2k-marquee', t.marquee);
    mq.setAttribute('scrollamount', '7');
    put(mq, body, header ? header.nextSibling : banner.nextSibling);
    if (calm && mq.stop) mq.stop();

    var copy = q('.hero-copy');
    if (copy) {
      var row = el('div', 'y2k-hero-gifs');
      row.appendChild(gif('construction', '', 'Under construction'));
      row.appendChild(gif('cake', 'cake', ''));
      row.appendChild(gif('new', '', 'NEW!'));
      put(row, copy, copy.firstChild);
    }

    var workHead = q('.work .section-title');
    if (workHead) put(gif('new', 'y2k-new', 'NEW!'), workHead);

    var mailBtn = q('.footer-actions .btn-primary');
    if (mailBtn) put(gif('mail', 'y2k-mail', ''), mailBtn);

    var meta = q('.footer-meta');
    if (meta) {
      var visits = 13370;
      try { visits += +(localStorage.getItem('y2k-visits') || 0) + 1; localStorage.setItem('y2k-visits', visits - 13370); } catch (e) {}
      var extra = el('div', 'y2k-footer-extra');
      extra.appendChild(gif('globe', 'y2k-globe', ''));
      extra.appendChild(el('div', 'y2k-counter', t.counter + ' <b>' + ('000000' + visits).slice(-7) + '</b>'));
      var links = el('div', 'y2k-links');
      [t.fav, t.home, t.guest].forEach(function (label) {
        var a = el('a', null, label);
        a.href = '#';
        a.addEventListener('click', ieOnly);
        links.appendChild(a);
      });
      extra.appendChild(links);
      var badges = el('div', 'y2k-badges');
      ['b-800', 'b-comic', 'b-notepad', 'b-y2k'].forEach(function (b) { badges.appendChild(gif(b)); });
      extra.appendChild(badges);
      put(extra, meta, meta.firstChild);
    }

    midiPlayer();
    escapeButton();
    if (!calm) { snow(); sparkles(); scrollTitle(); }
  }

  // ── a MIDI-ish player: square-wave "Happy Birthday" (public domain) via Web Audio ──
  var audio = null;
  function ctx() {
    var AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    if (!audio) audio = new AC();
    if (audio.state === 'suspended') audio.resume();
    return audio;
  }
  function beep(freq, at, len, type, vol) {
    var a = ctx(); if (!a) return;
    var o = a.createOscillator(), g = a.createGain();
    o.type = type || 'square';
    o.frequency.value = freq;
    g.gain.setValueAtTime(vol || 0.06, a.currentTime + at);
    g.gain.exponentialRampToValueAtTime(0.0001, a.currentTime + at + len);
    o.connect(g); g.connect(a.destination);
    o.start(a.currentTime + at); o.stop(a.currentTime + at + len + 0.02);
    return o;
  }
  var tune = null;
  function midiPlayer() {
    var box = el('div', 'y2k-midi');
    var lcd = el('span', 'lcd', 'birthday.mid  00:00');
    var play = el('button', null, '▶');
    var stop = el('button', null, '■');
    play.title = t.midi; stop.title = t.stop;
    play.type = stop.type = 'button';
    box.appendChild(el('span', null, '🎵'));
    box.appendChild(play); box.appendChild(stop); box.appendChild(lcd);
    put(box, document.body);
    // note, beats — G G A G C B / G G A G D C / G G G' E C B A / F F E C D C
    var N = { G4: 392, A4: 440, B4: 494, C5: 523, D5: 587, E5: 659, F5: 698, G5: 784 };
    var song = [['G4', .75], ['G4', .25], ['A4', 1], ['G4', 1], ['C5', 1], ['B4', 2],
      ['G4', .75], ['G4', .25], ['A4', 1], ['G4', 1], ['D5', 1], ['C5', 2],
      ['G4', .75], ['G4', .25], ['G5', 1], ['E5', 1], ['C5', 1], ['B4', 1], ['A4', 2],
      ['F5', .75], ['F5', .25], ['E5', 1], ['C5', 1], ['D5', 1], ['C5', 2]];
    play.addEventListener('click', function () {
      if (tune) return;
      var at = 0, beat = 0.36, oscs = [];
      song.forEach(function (n) { oscs.push(beep(N[n[0]], at, n[1] * beat * 0.9, 'square', 0.05)); at += n[1] * beat; });
      var started = Date.now();
      tune = { oscs: oscs, tick: setInterval(function () {
        var s = Math.floor((Date.now() - started) / 1000);
        lcd.textContent = 'birthday.mid  00:' + ('0' + s).slice(-2);
        if (s * 1000 > at * 1000) stopTune();
      }, 250) };
    });
    function stopTune() {
      if (!tune) return;
      tune.oscs.forEach(function (o) { try { o && o.stop(); } catch (e) {} });
      clearInterval(tune.tick); tune = null;
      lcd.textContent = 'birthday.mid  00:00';
    }
    stop.addEventListener('click', stopTune);
    window.addEventListener('y2k:off', stopTune);
  }

  // ── falling snow, old-school DHTML style ──
  function snow() {
    var flakes = [], glyphs = ['❄', '❅', '❆', '*', '✻'];
    for (var i = 0; i < 36; i++) {
      var f = el('div', 'y2k-snow', glyphs[i % glyphs.length]);
      f.style.fontSize = (10 + Math.random() * 18) + 'px';
      put(f, document.body);
      flakes.push({ n: f, x: Math.random() * innerWidth, y: Math.random() * innerHeight, v: 0.6 + Math.random() * 1.6, p: Math.random() * 6 });
    }
    function step() {
      if (!root.classList.contains('y2k')) return;
      for (var i = 0; i < flakes.length; i++) {
        var f = flakes[i];
        f.y += f.v; f.p += 0.02;
        if (f.y > innerHeight) { f.y = -20; f.x = Math.random() * innerWidth; }
        f.n.style.transform = 'translate(' + (f.x + Math.sin(f.p) * 24) + 'px,' + f.y + 'px)';
      }
      requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  // ── a trail of sparkles behind the cursor ──
  function sparkles() {
    var colors = ['#ff0', '#f0f', '#0ff', '#0f0', '#f90'], last = 0;
    function move(e) {
      var now = Date.now();
      if (now - last < 40) return;
      last = now;
      var s = el('div', 'y2k-spark', '✦');
      s.style.color = colors[Math.floor(Math.random() * colors.length)];
      s.style.transform = 'translate(' + (e.clientX + 6) + 'px,' + (e.clientY + 6) + 'px)';
      s.style.transition = 'opacity .7s, transform .7s';
      document.body.appendChild(s);
      requestAnimationFrame(function () {
        s.style.opacity = '0';
        s.style.transform = 'translate(' + (e.clientX + 6) + 'px,' + (e.clientY + 30) + 'px)';
      });
      setTimeout(function () { s.remove(); }, 750);
    }
    document.addEventListener('mousemove', move);
    window.addEventListener('y2k:off', function () { document.removeEventListener('mousemove', move); });
  }

  // ── the tab title scrolls, like it is 2001 ──
  var origTitle = document.title;
  function scrollTitle() {
    var s = t.title + origTitle + ' ';
    timers.push(setInterval(function () { s = s.slice(1) + s[0]; document.title = s; }, 200));
  }

  // ── "switch to normal design": runs from the mouse for its first second ──
  function escapeButton() {
    var b = el('button', 'y2k-escape', t.escape);
    b.type = 'button';
    put(b, document.body);
    var dodgeFrom = 0, R = 120;

    function jump(px, py) {
      var w = b.offsetWidth, h = b.offsetHeight, x, y, tries = 0;
      do {
        x = 10 + Math.random() * (innerWidth - w - 20);
        y = 10 + Math.random() * (innerHeight - h - 20);
      } while (Math.hypot(x + w / 2 - px, y + h / 2 - py) < 260 && ++tries < 20);
      b.style.right = 'auto'; b.style.bottom = 'auto';
      b.style.left = x + 'px'; b.style.top = y + 'px';
    }
    function dodging() { return !dodgeFrom || Date.now() - dodgeFrom < 1000; }

    document.addEventListener('mousemove', function (e) {
      if (!b.isConnected || !dodging()) return;
      var r = b.getBoundingClientRect();
      var dx = Math.max(r.left - e.clientX, 0, e.clientX - r.right);
      var dy = Math.max(r.top - e.clientY, 0, e.clientY - r.bottom);
      if (Math.hypot(dx, dy) > R) return;
      if (!dodgeFrom) dodgeFrom = Date.now();
      jump(e.clientX, e.clientY);
    });
    // touch has no hover: the first tap makes it hop once, the next one counts
    b.addEventListener('touchstart', function (e) {
      if (dodgeFrom) return;
      dodgeFrom = Date.now();
      e.preventDefault();
      var p = e.touches[0];
      jump(p.clientX, p.clientY);
    }, { passive: false });
    b.addEventListener('click', function () {
      if (b.dataset.busy) return;
      b.dataset.busy = '1';
      crash();
    });
  }

  // ── ten error windows on top of each other, then a blue screen, then the real site ──
  function crash() {
    if (calm) return off();
    var layer = el('div', 'y2k-crash');
    document.body.appendChild(layer);
    var n = t.errors.length, step = 30;
    var w = Math.min(380, innerWidth - 40);
    var x0 = Math.max(10, Math.min(innerWidth - w - n * step - 10, innerWidth * 0.18));
    var y0 = Math.max(10, Math.min(innerHeight - 170 - n * step, innerHeight * 0.12));
    t.errors.forEach(function (msg, i) {
      setTimeout(function () {
        var d = el('div', 'y2k-dialog',
          '<div class="bar"><span>' + t.errTitle + '</span><span class="x">×</span></div>' +
          '<div class="body"><div class="ico">×</div><div>' + msg + '</div></div>' +
          '<div class="ok"><span>OK</span></div>');
        var sx = innerWidth - w - 10 < x0 + i * step ? 0 : i * step;
        d.style.left = (x0 + sx) + 'px';
        d.style.top = (y0 + i * step) + 'px';
        layer.appendChild(d);
        beep(i % 2 ? 880 : 660, 0, 0.18, 'triangle', 0.08);
      }, i * 170);
    });
    setTimeout(function () { bsod(layer); }, n * 170 + 700);
  }

  function bsod(layer) {
    var screen = el('div', 'y2k-bsod');
    var lines = t.bsod.slice();
    var lastLine = lines.pop();
    screen.innerHTML = '<div class="in"><span class="hd">VASILIY.PRO</span>' +
      lines.map(function (l) { return '<p>' + l + '</p>'; }).join('') +
      '<p class="go">' + lastLine + '<span class="cur">_</span></p></div>';
    document.body.appendChild(screen);
    beep(110, 0, 0.5, 'sawtooth', 0.05);
    layer.remove();
    off();                // the normal site is already there, behind the blue
    var done = false;
    function fade() {
      if (done) return;
      done = true;
      document.removeEventListener('keydown', fade);
      screen.removeEventListener('click', fade);
      screen.classList.add('gone');
      setTimeout(function () { screen.remove(); }, 1300);
    }
    document.addEventListener('keydown', fade);
    screen.addEventListener('click', fade);
    setTimeout(fade, 3500);
  }

  function off() {
    try { localStorage.setItem('y2k-off', year); } catch (e) {}
    window.dispatchEvent(new Event('y2k:off'));
    timers.forEach(clearInterval);
    document.title = origTitle;
    added.forEach(function (n) { n.remove(); });
    added = []; timers = [];
    restoreLinks();
    document.querySelectorAll('.y2k-spark').forEach(function (n) { n.remove(); });
    root.classList.remove('y2k');   // css/y2k.css stays: the blue screen still needs it
    if (preview) history.replaceState(null, '', location.pathname + location.hash);
    showReturn();
  }

  // ── back to the 2000s, with a dial-up handshake for the drama ──
  function start(withSound) {
    if (root.classList.contains('y2k')) return;
    try { localStorage.removeItem('y2k-off'); } catch (e) {}
    if (withSound) dialUp();
    loadCss(function () {
      root.classList.add('y2k');
      hideReturn();
      decorate();
    });
  }
  function dialUp() {
    var a = ctx(); if (!a) return;
    var at = 0;
    [[697, 1209], [770, 1336], [852, 1477], [941, 1336], [697, 1477]].forEach(function (d) {
      beep(d[0], at, 0.12, 'sine', 0.05); beep(d[1], at, 0.12, 'sine', 0.05); at += 0.16;
    });
    at += 0.2;
    beep(2100, at, 0.5, 'sine', 0.04);
    for (var i = 0; i < 10; i++) beep(900 + Math.random() * 1600, at + 0.55 + i * 0.07, 0.09, 'sawtooth', 0.03);
  }

  var backLink = null;
  function showReturn() {
    if (!canReturn || backLink) return;
    var meta = q('.footer-meta');
    if (!meta) return;
    backLink = el('div', 'y2k-return');
    var a = el('a', null, t.back);
    a.href = '#';
    a.addEventListener('click', function (e) { e.preventDefault(); start(true); });
    backLink.appendChild(a);
    meta.insertBefore(backLink, meta.firstChild);
  }
  function hideReturn() {
    if (backLink) { backLink.remove(); backLink = null; }
  }

  // ↑ ↑ ↓ ↓ ← → ← → B A — by physical key, so it works on any keyboard layout
  var konami = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];
  var k = 0;
  document.addEventListener('keydown', function (e) {
    k = e.code === konami[k] ? k + 1 : (e.code === konami[0] ? 1 : 0);
    if (k < konami.length) return;
    k = 0;
    ready(function () { start(true); });
  });

  if (on) {
    loadCss();
    root.classList.add('y2k');
    ready(decorate);
  } else {
    ready(showReturn);
  }
})();
