# Future decisions

Directions and features considered during the `redesign-with-pop` build and deliberately
deferred, recorded in enough detail to pick up later without re-deriving anything.

---

## 1. "Skiddle Technicolor" — the alternate art direction  ✅ BUILT

**Status: built** (2026-08-18) and living in `website-technicolor/`, alongside the shipped
`website/`. Not deployed — it runs locally for side-by-side review. See "As built" below for
where it departs from this original spec.

The shipped design is **Bandana Red & Gold**: disciplined, premium, unmistakably the album.
The runner-up was louder, younger and more playful. It was not rejected on quality — it is a
different bet. If the team's reaction is *"we love it but it's too grown"*, this is the pivot.

**The thesis.** Take the album's own definition literally: *"Skiddle represents the colourful
energy and cultural presence of Black people."* Bandana Red & Gold honours the artwork.
Technicolor honours the sentence. Where the shipped system uses two brand colours and treats
paisley as texture, Technicolor treats colour itself as the subject.

### Palette

Keep crimson and gold as the anchors, then open the system up. Every colour below already has
a home in the current token file, so the change is mostly a `styles.css` swap.

| Role | Token | Value | Use |
|---|---|---|---|
| Ground | `--color-bg` | `#1C1030` | a violet-leaning dark, to the shipped oxblood's red |
| Anchor | `--color-accent` | `#C8102E` | unchanged crimson |
| Anchor | `--color-accent-2` | `#F0A81E` | unchanged marigold |
| Spot | `--color-accent-3` | `#2E7D4F` | already in the system, promoted to front rank |
| **New** | `--color-accent-4` | `#5B3FD9` | violet |
| **New** | `--color-accent-5` | `#18B5C4` | turquoise |
| **New** | `--color-accent-6` | `#F2568F` | hot pink |

Each needs a 100–900 ramp on the same OKLCH lightness scale as the existing three, so
`.tag-accent-4` and friends drop straight in.

### Rules that make it cohere instead of look like a paint box

1. **Three colours per screen, never more.** Rotate the trio by page: Home crimson/gold/violet,
   Tour crimson/gold/turquoise, Music crimson/gold/green, Merch crimson/gold/pink, About
   crimson/gold/violet. Consistency comes from the rotation, not from uniformity.
2. **One colour per word** in display headlines — `SKIDDLE` crimson, `BANDANA` violet, the
   full stop in gold. Cheap, and it is the single most recognisable move in the direction.
3. **Paisley becomes confetti.** Recolour `paisley-tile.svg` motif-by-motif instead of a single
   gold ink: each boteh, floret and eye takes a different ramp. Scatter individual motifs
   loose across sections at `rotate()` angles rather than only tiling them.
4. **Sticker collage layout.** Cards tilt `rotate(-2deg … 3deg)`, overlap by 8–16px, and carry
   a white "die-cut" 4px border plus the existing hard shadow. Straighten on hover.
   ⚠️ *Superseded — the hard shadows this refers to no longer exist. See "As built".*
5. **Bubble display face.** Swap Anton for **Bagel Fat One** (Google Fonts) as `--font-display`,
   keeping Anton as `--font-heading` for anything that has to stay legible at small sizes.
   Keep Space Grotesk for body.

### Files that would change

- `website/_ds/skiddle-bandana/styles.css` — palette, three new ramps, `--font-display`,
  `.sb-poster` per-word spans, `.card` tilt/overlap, `.sb-paisley` recolour
- `website/assets/art/paisley-tile.svg` — multi-colour motif fills
- The five `.dc.html` pages — headline markup only, wrapping each word in its own span
- The product and cover SVGs would want a recolour pass to match

Everything else — layout, data, player, mobile behaviour — is untouched. Realistically a
focused day of work, not a rebuild.

### As built — where it departs from the spec above

- **No sticker collage.** Rule 4 was written while the system still used hard offset shadows
  and square corners; those were deliberately replaced with rounded corners and soft
  elevation. Keeping die-cut borders would have reimported the brutalism. The playfulness is
  carried by colour, the display face, and a 1.1° card tilt that straightens on hover —
  radii, hairline borders and soft shadows are unchanged from the shipped system.
- **The spot colour drives each hero's full-bleed ground**, not just small accents. This is
  what makes the direction read as "colour is the subject": Home/About violet, Tour
  turquoise, Music green, Merch pink, with crimson and gold constant on top.
- **Two grades darker than planned.** The hero veil runs spot-800 → spot-900, not 700 → 900.
  Measured, not guessed: at grade 700 the gold headline word hit only 2.78:1 on turquoise.
  Grade 800 puts the worst case at 4.43:1, with cream body text at 7.92:1.
- **The full stop is `--color-accent-300`, not crimson.** Full crimson measured 1.04:1
  against turquoise — invisible. Grade 300 stays in the crimson family and clears 4.76:1 on
  the worst of the five hues.
- **`.sb-poster` stays Anton.** It is reused at 26–30px for tour dates and milestone years,
  where Bagel Fat One is unreadable. Only the five hero headlines opt in, via
  `.sb-poster-display`, and they render mixed-case rather than caps — friendlier, and a
  sharper contrast against Red & Gold's all-caps.
- **Hero type sizes came down** roughly 40%, since Bagel Fat One is far wider than Anton.
- **Feature parity is enforced, not assumed.** All six test suites (audit, flip, interact,
  motion, touch, together) pass against the Technicolor folder, and `data.js`, `site.js`,
  `image-slot.js`, `support.js` and every photograph are byte-identical to `website/`.

### Deploying it

`website-technicolor/vercel.json` is ready. Create a Vercel project with **Root Directory =
`website-technicolor`** (Vercel then reads config from inside that folder, leaving the
repo-root `vercel.json` serving the existing project). Suggested name
`lareezy-website-technicolor`; disable the preview toolbar with
`VERCEL_PREVIEW_FEEDBACK_ENABLED=0` as on the first project.

---

## 2. "Reezy World" — SMS fan community

Considered as one of the three superstar features; the embedded player was chosen first.

Email capture alone reads dated to a 13–25 audience. The convention now is direct-to-fan SMS:
text a shortcode, get drop alerts and presale codes before the public. The site's own copy
already promises this — *"Reezy World hears about every drop before it goes public"* — but
there is no mechanism behind it.

**What to build:** a phone-number field alongside the existing email capture, a live member
count for social proof, and a double-opt-in flow. **What it needs from the team:** a provider
(Community, Laylo and SuperPhone are the ones artists at this level use), a real shortcode,
and someone to own compliance — SMS marketing has hard consent requirements, and this is the
part that makes it a business decision rather than a design one.

**Why it matters commercially:** it is the mechanism that turns a tour announcement into a
sell-out and a merch drop into a sell-through, and it is the argument his team will care about
most.

---

## 3. "Build your own bandana" — the shareable toy

The highest-ceiling idea and the most work. An interactive where a visitor recolours the
paisley print, drops in their own ward or city, and exports the result as a phone wallpaper or
share card.

**Why it fits:** it enacts the album's thesis — carrying the stories forward together — rather
than describing it, and it gives a teenager a reason to send the URL to a friend. Organic
sharing is the only growth mechanism that really works in his age bracket, and no other artist
site has this.

**How it would work:** the existing `paisley-tile.svg` is already parameterised by fill and
stroke colour, so the renderer is a `<canvas>` (or an inline SVG cloned and recoloured) driven
by a small palette picker. Export via `canvas.toBlob()` → download, plus a Web Share API path
on mobile. Presets for the album's own colourways. No backend required, which makes it
cheaper than it looks.

**Watch out for:** letting people put arbitrary text on artist-branded imagery and then share
it. Restrict the text field to a short character limit and a safe character set, or offer a
fixed list of New Orleans wards and neighbourhoods rather than free text.

---

## 4. Licensed full-track audio

The player uses Spotify's embed, which gives full tracks to signed-in listeners and ~30-second
previews to everyone else. That is the standard approach and the only legal one without
hosting audio.

If the team wants full playback for every visitor regardless of login, that means licensed
audio hosted directly, which is a rights conversation (UnitedMasters distributes him) plus a
storage and bandwidth cost. Worth raising only if the 30-second preview genuinely bothers them.

---

## 5. Pre-render, and drop the CDN dependency

`support.js` fetches React 18 and Babel from unpkg on every page load and compiles the
templates in the browser. That is fine for a prototype but wrong for production: it adds a
render-blocking third-party dependency, hurts first paint on cellular, and means the site
breaks if unpkg is unreachable.

**Fix:** render each page once and commit the resulting static HTML, keeping the `.dc.html`
sources for canvas editing. A small Playwright script — the same approach used to verify this
build — can do it: load the page, wait for render, write `document.documentElement.outerHTML`.
Add it as a Vercel build step so the deploy serves flat HTML while the editable sources stay
in the repo. This also makes the site crawlable, which currently it largely is not.

---

## 6. Smaller deferred items

- **Real product photography.** The SVG renders are deliberate and they hold up, but once
  actual samples exist, photographs replace them by swapping `img` values in
  `website/data.js` — no markup changes.
- **Real commerce.** "Notify me" is presentational. Shopify's Buy Button or a Vercel commerce
  integration would drop into the existing card markup.
- **Point lareezy.com at the deploy**, once the team signs off. Currently deployed to a Vercel
  preview URL only, and the live site is untouched.
- **A video page.** Videos currently appear as a three-up grid on Home and Music that links out
  to YouTube. A dedicated page with a lightbox player would keep people on the site — the same
  argument that justified the audio player.
- **Confirm the remaining socials** (Facebook, Threads, Tidal, Deezer, Genius, LinkedIn and
  the rest) — see the README.
- **Accessibility audit against real assistive tech.** Contrast, focus order, target sizes and
  reduced-motion are all handled, and the build was verified programmatically, but nothing has
  been through an actual screen reader.

---

## 7. A runtime constraint worth knowing about

The DC runtime (`support.js`) re-renders and can replace DOM nodes outright, which **reverts
any attribute declared in the template** and wipes anything JavaScript wrote onto those nodes.
This bit the flip cards: `data-flipped` set on click was silently reset within a frame.

The working pattern, in `site.js`, is: keep the state in a JS object keyed by card index,
never in the DOM; re-apply it after every render via a `MutationObserver`; and never declare
the stateful attribute in the `.dc.html` template. Anything else interactive added later
should follow the same rule. Pre-rendering to static HTML (item 5) would remove the
constraint entirely.
