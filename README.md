# lareezy-web

Website redesign for the New Orleans artist **La Reezy** (Khayree Salahuddin) — a refresh
of [lareezy.com](https://lareezy.com), built around his debut album *Skiddle Bandana*.

Live preview: see the Vercel deployment link on the branch.

---

## The design

The old prototype ran on a generic cream-and-terracotta design system. This branch replaces
it with **Skiddle Bandana** — a bespoke system pulled directly from his own artwork:

- **Deep oxblood ground.** `#260f12`, mixed from the same red as the crimson bands, so the
  page and the full-bleed sections read as one family rather than fighting each other.
- **Crimson field, gold paisley print.** The bandana *is* the brand. The seamless paisley
  repeat in `website/assets/art/paisley-tile.svg` is hand-drawn and runs through every surface.
- **Ticker bands** — `· SKIDDLE BANDANA · OUT NOW ·` in gold slab caps, lifted from the bars
  that bracket his interview stills.
- **Poster caps** — heavy condensed Anton, the "NOLA'S OWN LA REEZY" treatment.
- The album's own thesis drives it: *"Skiddle is the colourful energy and cultural presence
  of Black people; Bandana is unity — carrying collective stories forward."*

The surface treatment is deliberately **soft, not brutalist**: generous radii (26px cards,
pill buttons and inputs), hairline borders, and layered drop shadows instead of hard offset
blocks. On this dark ground crimson type fails contrast, so **accent type is gold** and
crimson is reserved for fills and surfaces — which is exactly how the album artwork uses the
two colours.

Type is **Anton** (display), **Space Grotesk** (body) and **Alfa Slab One** (tickers, badges,
prices), all from Google Fonts.

### Interaction

- **Flip stat cards** on the homepage — hover on a pointer device, tap or press Enter on
  touch and keyboard, so the detail on the back is never mouse-only. Reduced motion swaps the
  3D tumble for a cross-fade.
- **Nav links are pills**, with the current page filled crimson, so the cluster reads as a
  control group rather than loose words in the bar.
- **Sticky player** with a real 13-track listing (see below).

## Contents

```
website/
  Home.dc.html      Hero, stats, album, tour preview, videos, merch teaser
  Tour.dc.html      All 20 real dates + the New Orleans homecoming
  Music.dc.html     Playable 13-track album, full catalogue, videos
  Merch.dc.html     Six-piece concept drop
  About.dc.html     Bio, UTH Foundation, milestones, press, EPK
  _ds/skiddle-bandana/styles.css   The design system — tokens + components
  assets/art/       Hand-authored SVG artwork (see below)
  assets/           Photography
  data.js           Shared data: socials, tour dates, tracklist, releases, products
  site.js           Menu, player and tracklist behaviour
  support.js        Claude Design canvas runtime (generated — do not edit)
  image-slot.js     <image-slot> custom element (generated — do not edit)
vercel.json         Static hosting config
```

## Artwork

There was no photography for the shop, so every product and cover is **hand-authored SVG** in
`website/assets/art/` — vector, so it stays sharp at any size, recolours from the design
tokens, and costs a fraction of a photograph in bytes.

- `paisley-tile.svg` — the seamless bandana print (the keystone asset)
- `crest.svg`, `favicon.svg`, `grain.svg` — identity marks and texture
- `prod-*.svg` — bandana, tee, cap, hoodie, vinyl, poster
- `rel-*.svg` — five catalogue covers that had no art

## Running it locally

```bash
cd website
python -m http.server 8000
# http://localhost:8000/Home.dc.html
```

Use a server rather than opening the files directly — the pages load their stylesheet and
scripts by relative path. **An internet connection is required**: the canvas runtime
(`support.js`) fetches React and Babel from unpkg at page load, and fonts come from Google
Fonts.

## Deploying

`vercel.json` serves `website/` as a static site, rewrites `/` to `Home.dc.html`, and adds
short redirects (`/tour`, `/music`, `/merch`, `/about`). No build step.

The pages keep their `.dc.html` filenames so they still open in the Claude Design canvas for
visual editing, and still work over `file://` and a plain static server.

---

## What is real, and what is not

Nothing here should be mistaken for live product. Read this before sharing with the team.

### Real, and verified

- **Tour dates** — all 20, pulled from his
  [Ticketmaster artist page](https://www.ticketmaster.com/la-reezy-tickets/artist/3142407)
  on **2026-08-17**. Every row links to its actual event page. He is supporting Chance the
  Rapper's *Coloring Book 10 Year Anniversary Tour*, Aug 18 – Sep 20 2026, with the
  homecoming at The Fillmore New Orleans on Sep 9. **Re-check these before launch** — routings
  change.
- **Tracklist** — all 13 tracks of *Skiddle Bandana* in album order, with real Spotify track
  IDs, so the player genuinely plays the track you tap.
- **Catalogue** — six real releases with correct years, including *We All Need Help* (2024)
  and *Free99$* (2025), which the previous prototype was missing. The *cover artwork* for five
  of them is invented (see below).
- **Biography** — XXL Freshman '26, UnitedMasters, the UTH Foundation, the Hip Hop Museum
  *Next Up* Award (Oct 2025), Camp Flog Gnaw, the Little Simz support run, the 12th Ward.
- **Social and streaming links** — all nine verified against live profiles on 2026-08-17.

### Fabricated for the pitch

- **All six merch products** — names, prices, descriptions and artwork. The Skiddle Bandana
  $30, LaReezyana Tee $35, Leader of da UTH Cap $32, Tour Hoodie $65, Vinyl $28, Tour Poster
  $20. **None of this is real product and none of these prices are real.** "Notify me" does
  nothing.
- **Five catalogue cover artworks** (`rel-shakedown`, `rel-free99`, `rel-pardon`,
  `rel-lareezyana`, `rel-weallneedhelp`) — original designs standing in for the real covers.
  Only *Reeborn* uses its actual cover.
- **Email capture forms** — presentational. Not wired to anything.
- **Pull quote on the About page** — written to illustrate the album's stated theme; it is not
  a sourced quotation from him.
- **The "13 tracks / 20 shows / XXL / 504" stat copy** — accurate facts, but the phrasing is ours.

### Socials still to confirm

Not included, because no profile could be verified: **Facebook, Threads, Snapchat, Tidal,
Deezer, Amazon Music, Pandora, Genius, Bandcamp, LinkedIn**. If the team supplies real URLs,
each is a one-line addition to `SOCIALS` in `website/data.js` and appears everywhere at once.

---

## Known cosmetic issue

The browser console shows a few 404s for `{{ v.thumb }}`, `{{ p.img }}` and
`.image-slots.state.json`. These come from the vendored Claude Design runtime, which paints an
uninterpolated placeholder pass before it resolves template values, and from `image-slot.js`
probing for an editor sidecar that does not exist in a static deploy. The final rendered page
is correct and every image loads — verified across all five pages. Fixing it would mean
patching generated files, so it has been left alone.

## Related

- [`FUTURE-DECISIONS.md`](FUTURE-DECISIONS.md) — the Skiddle Technicolor alternate direction
  and the features deliberately banked for later.
