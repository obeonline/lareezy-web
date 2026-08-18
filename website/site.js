/* Skiddle Bandana — site behaviour.
   The pages are rendered by the DC runtime (React) after this file loads, so
   everything here is delegated from `document` rather than bound to elements
   that do not exist yet. No dependencies. */
(function () {
  'use strict';

  var ALBUM = '1ua9bT9kFnJeGi9j9nbfIL';
  var EMBED = 'https://open.spotify.com/embed/';
  var DISMISS_KEY = 'lareezy.player.dismissed';
  var flipState = {};

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
      case 'flip': {
        ev.preventDefault();
        var cards = document.querySelectorAll('.sb-flip');
        var i = Array.prototype.indexOf.call(cards, el);
        if (i >= 0) { flipState[i] = !flipState[i]; syncFlips(); }
        break;
      }
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

  /* The DC runtime re-renders and can replace these nodes outright, which
     wipes anything written onto them. So the flipped state is owned here,
     keyed by card position, and re-applied to the DOM after every render. */
  function syncFlips() {
    var cards = document.querySelectorAll('.sb-flip');
    for (var i = 0; i < cards.length; i++) {
      var on = flipState[i] ? 'true' : 'false';
      if (cards[i].getAttribute('data-flipped') !== on) {
        cards[i].setAttribute('data-flipped', on);
        cards[i].setAttribute('aria-pressed', on);
      }
    }
  }
  /* Stamping the initial aria-pressed is awkward to time: the helmet hoists
     this script around the same moment the runtime renders, so the cards may
     not exist yet, and depending on ordering no further mutation fires. A
     short bounded poll covers every ordering without racing the runtime; it
     stops as soon as it finds the cards, and gives up after ~4s regardless. */
  var tries = 0;
  (function stamp() {
    syncFlips();
    if (document.querySelector('.sb-flip') || ++tries > 40) return;
    setTimeout(stamp, 100);
  })();

  document.addEventListener('DOMContentLoaded', syncFlips);
  window.addEventListener('load', syncFlips);
  // childList only: the attribute writes above must not retrigger this.
  new MutationObserver(syncFlips).observe(document.documentElement, {
    childList: true,
    subtree: true,
  });
})();
