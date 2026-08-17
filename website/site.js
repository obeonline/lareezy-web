/* Skiddle Bandana — site behaviour.
   The pages are rendered by the DC runtime (React) after this file loads, so
   everything here is delegated from `document` rather than bound to elements
   that do not exist yet. No dependencies. */
(function () {
  'use strict';

  var ALBUM = '1ua9bT9kFnJeGi9j9nbfIL';
  var EMBED = 'https://open.spotify.com/embed/';
  var DISMISS_KEY = 'lareezy.player.dismissed';

  function $(sel) { return document.querySelector(sel); }

  /* ---------------------------------------------------------------- menu */
  function setMenu(open) {
    var menu = $('#sb-menu');
    if (!menu) return;
    menu.setAttribute('data-open', open ? 'true' : 'false');
    document.body.style.overflow = open ? 'hidden' : '';
    if (open) {
      var first = menu.querySelector('a, button');
      if (first) first.focus();
    }
  }

  /* -------------------------------------------------------------- player */
  function openPlayer(src) {
    var player = $('#sb-player');
    if (!player) return;
    var frame = player.querySelector('iframe');
    if (frame && src && frame.getAttribute('src') !== src) frame.setAttribute('src', src);
    player.setAttribute('data-open', 'true');
    try { localStorage.removeItem(DISMISS_KEY); } catch (e) {}
  }

  function closePlayer() {
    var player = $('#sb-player');
    if (!player) return;
    player.setAttribute('data-open', 'false');
    // Stop playback: an iframe keeps playing while hidden otherwise.
    var frame = player.querySelector('iframe');
    if (frame) frame.setAttribute('src', frame.getAttribute('src'));
    try { localStorage.setItem(DISMISS_KEY, '1'); } catch (e) {}
    markCurrent(null);
  }

  function markCurrent(id) {
    var rows = document.querySelectorAll('[data-track]');
    for (var i = 0; i < rows.length; i++) {
      rows[i].setAttribute('aria-current', rows[i].getAttribute('data-track') === id ? 'true' : 'false');
    }
  }

  /* ------------------------------------------------------------ dispatch */
  document.addEventListener('click', function (ev) {
    var el = ev.target.closest ? ev.target.closest('[data-action], [data-track]') : null;
    if (!el) return;

    var track = el.getAttribute('data-track');
    if (track) {
      ev.preventDefault();
      openPlayer(EMBED + 'track/' + track + '?theme=0');
      markCurrent(track);
      return;
    }

    switch (el.getAttribute('data-action')) {
      case 'menu-open':  ev.preventDefault(); setMenu(true); break;
      case 'menu-close': ev.preventDefault(); setMenu(false); break;
      case 'play-album':
        ev.preventDefault();
        openPlayer(EMBED + 'album/' + ALBUM + '?theme=0');
        markCurrent(null);
        break;
      case 'player-close': ev.preventDefault(); closePlayer(); break;
    }
  });

  document.addEventListener('keydown', function (ev) {
    if (ev.key !== 'Escape') return;
    var menu = $('#sb-menu');
    if (menu && menu.getAttribute('data-open') === 'true') { setMenu(false); return; }
    var player = $('#sb-player');
    if (player && player.getAttribute('data-open') === 'true') closePlayer();
  });

  /* Keep focus inside the menu while it is open. */
  document.addEventListener('focusin', function (ev) {
    var menu = $('#sb-menu');
    if (!menu || menu.getAttribute('data-open') !== 'true') return;
    if (!menu.contains(ev.target)) {
      var first = menu.querySelector('a, button');
      if (first) first.focus();
    }
  });

  /* Close the overlay after navigating to an in-page anchor. */
  document.addEventListener('click', function (ev) {
    var link = ev.target.closest ? ev.target.closest('#sb-menu a') : null;
    if (link) setMenu(false);
  });
})();
