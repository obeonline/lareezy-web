# lareezy-web

Website redesign for the musical artist **Lareezy** (New Orleans) — a refresh of
[lareezy.com](https://lareezy.com).

## Contents

```
website/
  Home.dc.html      Landing page — hero, stats, album feature
  Tour.dc.html      Tour dates
  Music.dc.html     Releases and streaming links
  Merch.dc.html     Merch
  About.dc.html     Bio / press
  assets/           Photography and cover art used by the pages
  uploads/          Source images dropped into the canvas
  _ds/              "Organic" design system — design tokens, styles.css, usage guide
  support.js        Canvas runtime support
  image-slot.js     <image-slot> custom element used for photo placement
```

The pages are static HTML built on the shared design system in `website/_ds/`.
All colors, type, spacing and radii come from CSS custom properties defined in
that system's `styles.css` — see its `readme.md` for the conventions.

## Viewing locally

Open any of the `.dc.html` files directly in a browser, or serve the folder:

```bash
cd website
python -m http.server 8000
# then visit http://localhost:8000/Home.dc.html
```

A local server is preferable to opening the files directly, since the pages load
the stylesheet and scripts by relative path.
