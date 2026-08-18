/* Shared site data. Loaded synchronously from each page's real <head>, so it
   is always defined before the DC runtime evaluates a page's logic block.

   PROVENANCE — see README.md:
     SOCIALS   real, each verified against a live profile (2026-08-17)
     DATES     real, from the Ticketmaster artist page (2026-08-17)
     TRACKS    real, Spotify album 1ua9bT9kFnJeGi9j9nbfIL, real track IDs
     RELEASES  real titles and years
     PRODUCTS  CONCEPT — invented names, prices and copy for the pitch
*/

window.SOCIALS = [
  { name: 'Instagram', url: 'https://www.instagram.com/lareezymusic/', d: 'M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9zm0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM17.8 6a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4z' },
  { name: 'TikTok', url: 'https://www.tiktok.com/@mrlareezy', d: 'M16.5 2h-3v13.2a2.6 2.6 0 1 1-2.3-2.6v-3a5.6 5.6 0 1 0 5.3 5.6V9a7.3 7.3 0 0 0 4.2 1.3V7.4a4.4 4.4 0 0 1-4.2-4.4V2z' },
  { name: 'X', url: 'https://x.com/lareezymusic', d: 'M17.5 3h3.2l-7 8 8.2 10h-6.4l-5-6.1L4.8 21H1.6l7.5-8.6L1.2 3h6.6l4.5 5.6L17.5 3zm-1.1 16h1.8L7.7 4.8H5.8L16.4 19z' },
  { name: 'YouTube', url: 'https://www.youtube.com/@lareezymusic', d: 'M22.5 7.2a2.7 2.7 0 0 0-1.9-1.9C18.9 4.8 12 4.8 12 4.8s-6.9 0-8.6.5A2.7 2.7 0 0 0 1.5 7.2C1 8.9 1 12 1 12s0 3.1.5 4.8a2.7 2.7 0 0 0 1.9 1.9c1.7.5 8.6.5 8.6.5s6.9 0 8.6-.5a2.7 2.7 0 0 0 1.9-1.9c.5-1.7.5-4.8.5-4.8s0-3.1-.5-4.8zM9.8 15.3V8.7l5.7 3.3-5.7 3.3z' },
  { name: 'Spotify', url: 'https://open.spotify.com/artist/2uVTJrWgoWoJmImS2I0KVE', d: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm4.6 14.5a.8.8 0 0 1-1.1.3c-3-1.8-6.7-2.2-11.1-1.2a.8.8 0 0 1-.3-1.5c4.8-1.1 8.9-.6 12.2 1.4.4.2.5.7.3 1zm1.2-2.9a1 1 0 0 1-1.3.3c-3.4-2.1-8.5-2.7-12.5-1.5a1 1 0 1 1-.5-1.9c4.5-1.4 10.2-.7 14 1.7.5.3.6.9.3 1.4zm.1-3C14.1 8.2 7.9 8 4.5 9a1.2 1.2 0 1 1-.7-2.3c3.9-1.2 10.7-1 15 1.6a1.2 1.2 0 0 1-1.2 2z' },
  { name: 'Apple Music', url: 'https://music.apple.com/us/artist/la-reezy/1472684455', d: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm3.2 4.4v7.9a2.4 2.4 0 1 1-1.4-2.2V8.6l-4 .9v6.3a2.4 2.4 0 1 1-1.4-2.2V7.9l6.8-1.5z' },
  { name: 'SoundCloud', url: 'https://soundcloud.com/2400reezy', d: 'M3 13v5h1.5v-5H3zm3-2v7h1.5v-7H6zm3-2v9h1.5V9H9zm3-2v11h1.5V7H12zm4.5 2c-.5 0-1 .1-1.4.3v8.7h5.4a3.5 3.5 0 0 0 0-7 3.6 3.6 0 0 0-.6.1A3.5 3.5 0 0 0 16.5 9z' },
  { name: 'Audiomack', url: 'https://audiomack.com/la-reezy', d: 'M12 2 2 22h4.2l5.8-11.6L17.8 22H22L12 2zm0 9.4-2.6 5.2h5.2L12 11.4z' },
];

window.TICKETS_URL = 'https://www.ticketmaster.com/la-reezy-tickets/artist/3142407';

/* All 20 dates, Chance the Rapper — Coloring Book 10 Year Anniversary Tour. */
window.DATES = [
  { date: 'Aug 18', day: 'Tue', city: 'New York, NY', venue: 'SummerStage, Central Park', url: 'https://www.ticketmaster.com/chance-the-rapper-coloring-book-10-new-york-new-york-08-18-2026/event/000064AA4A98EED4' },
  { date: 'Aug 20', day: 'Thu', city: 'Boston, MA', venue: 'MGM Music Hall at Fenway', url: 'https://www.ticketmaster.com/chance-the-rapper-coloring-book-10-boston-massachusetts-08-20-2026/event/010064A89615C96F' },
  { date: 'Aug 21', day: 'Fri', city: 'Huntington, NY', venue: 'The Paramount', url: 'https://www.ticketmaster.com/chance-the-rapper-coloring-book-10-huntington-new-york-08-21-2026/event/000064ABBC5DE7D2' },
  { date: 'Aug 22', day: 'Sat', city: 'Philadelphia, PA', venue: 'The Fillmore Philadelphia', url: 'https://www.ticketmaster.com/chance-the-rapper-coloring-book-10-philadelphia-pennsylvania-08-22-2026/event/020064A89EC7AA71' },
  { date: 'Aug 23', day: 'Sun', city: 'Asbury Park, NJ', venue: 'Stone Pony Summer Stage', url: 'https://www.ticketmaster.com/chance-the-rapper-coloring-book-10-asbury-park-new-jersey-08-23-2026/event/000064A8C31F34C3' },
  { date: 'Aug 25', day: 'Tue', city: 'Baltimore, MD', venue: 'Nevermore Hall', url: 'https://www.ticketmaster.com/chance-the-rapper-coloring-book-10-baltimore-maryland-08-25-2026/event/150064ACDAB5A8A9' },
  { date: 'Aug 29', day: 'Sat', city: 'Raleigh, NC', venue: 'Red Hat Amphitheater', url: 'https://www.ticketmaster.com/chance-the-rapper-coloring-book-10-raleigh-north-carolina-08-29-2026/event/2D0064ABF24631F7' },
  { date: 'Sep 1', day: 'Tue', city: 'Birmingham, AL', venue: 'Avondale Brewing Co.', url: 'https://www.ticketmaster.com/chance-the-rapper-coloring-book-10-birmingham-alabama-09-01-2026/event/200064AB515D7011' },
  { date: 'Sep 2', day: 'Wed', city: 'Cincinnati, OH', venue: 'The Andrew J Brady Music Center', url: 'https://www.ticketmaster.com/chance-the-rapper-coloring-book-10-cincinnati-ohio-09-02-2026/event/160064AD9CB07AAD' },
  { date: 'Sep 3', day: 'Thu', city: 'Atlanta, GA', venue: 'Coca-Cola Roxy', url: 'https://www.ticketmaster.com/chance-the-rapper-coloring-book-10-atlanta-georgia-09-03-2026/event/0E0064ADC51E586D' },
  { date: 'Sep 5', day: 'Sat', city: 'Tampa, FL', venue: 'The Ritz Ybor', url: 'https://www.ticketmaster.com/chance-the-rapper-coloring-book-10-tampa-florida-09-05-2026/event/0D0064ADD6E9D94C' },
  { date: 'Sep 6', day: 'Sun', city: 'Hollywood, FL', venue: 'Hard Rock Live', url: 'https://www.ticketmaster.com/chance-the-rapper-coloring-book-10-hollywood-florida-09-06-2026/event/0D0064ABA25277C9' },
  { date: 'Sep 8', day: 'Tue', city: 'Memphis, TN', venue: 'Satellite Music Hall', url: 'https://www.ticketmaster.com/chance-the-rapper-coloring-book-10-memphis-tennessee-09-08-2026/event/1B0064ABB884D768' },
  { date: 'Sep 9', day: 'Wed', city: 'New Orleans, LA', venue: 'The Fillmore New Orleans', home: true, url: 'https://www.ticketmaster.com/chance-the-rapper-coloring-book-10-new-orleans-louisiana-09-09-2026/event/1B0064ACADB5B71F' },
  { date: 'Sep 10', day: 'Thu', city: 'Dallas, TX', venue: 'South Side Ballroom', url: 'https://www.ticketmaster.com/chance-the-rapper-coloring-book-10-dallas-texas-09-10-2026/event/0C0064A9ADED8C73' },
  { date: 'Sep 12', day: 'Sat', city: 'Houston, TX', venue: '713 Music Hall', url: 'https://www.ticketmaster.com/chance-the-rapper-coloring-book-10-houston-texas-09-12-2026/event/3A0064A8C387334D' },
  { date: 'Sep 13', day: 'Sun', city: 'Austin, TX', venue: 'Moody Amphitheater', url: 'https://www.ticketmaster.com/chance-the-rapper-coloring-book-10-austin-texas-09-13-2026/event/3A0064ABEAE92935' },
  { date: 'Sep 16', day: 'Wed', city: 'Phoenix, AZ', venue: 'Arizona Financial Theatre', url: 'https://www.ticketmaster.com/chance-the-rapper-coloring-book-10-phoenix-arizona-09-16-2026/event/190064AD9AF35940' },
  { date: 'Sep 17', day: 'Thu', city: 'Anaheim, CA', venue: 'House of Blues Anaheim', url: 'https://www.ticketmaster.com/chance-the-rapper-coloring-book-10-anaheim-california-09-17-2026/event/090064A9083FB98F' },
  { date: 'Sep 20', day: 'Sun', city: 'Hollywood, CA', venue: 'Hollywood Palladium', url: 'https://www.ticketmaster.com/chance-the-rapper-coloring-book-10-hollywood-california-09-20-2026/event/090064D2E6C0EEDB' },
];

/* Skiddle Bandana, in album order, with real Spotify track IDs. */
window.TRACKS = [
  { n: '01', name: 'Curly Head Boy', id: '1xUEmqDPpZ9wnE6WAXWy1c' },
  { n: '02', name: 'Hot', id: '5fDeYM81TyrEpaRO8kjUhu' },
  { n: '03', name: 'Family Bizzy', id: '0Dp4JZtVbIiayUL7hxVpEU' },
  { n: '04', name: 'Normal Struggles', id: '0hAuSZDzI8M4aLA5KvFFfQ' },
  { n: '05', name: 'Pretty Girl Bullshit', id: '3bNYFuoIEFeaZ3fxYNHpUY' },
  { n: '06', name: 'How Did You Love Me', id: '3o9Zt1f1gTI38GkgXxp9ld' },
  { n: '07', name: 'Hold Yo Crown', id: '47f00YwtbazboOmAr1LhDl' },
  { n: '08', name: 'Melanate It', id: '7wmDc6S3rvVMaoqCCdjL0i' },
  { n: '09', name: 'God Forgive Me', id: '1eWROy2GPYaExyKMijWGpp' },
  { n: '10', name: 'Skiddle Bandana', id: '6BKJ55njMLXwoJ0MEmdl7q' },
  { n: '11', name: 'Aight', id: '4pChBamkKVQgcc448dwkHh' },
  { n: '12', name: 'Gold Chains', id: '5luzX1r1iduu6SqL3ueG9C' },
  { n: '13', name: 'We Live', id: '1pRtBXNzb5lLmk7yEL1xni' },
];

window.RELEASES = [
  { slot: 'rel-shakedown', title: 'LAREEZYANA SHAKEDOWN', meta: 'Mixtape · 2025', img: 'assets/art/rel-shakedown.svg' },
  { slot: 'rel-free99', title: 'Free99$ (La Reezy LLC)', meta: 'Project · 2025', img: 'assets/art/rel-free99.svg' },
  { slot: 'rel-pardon', title: 'Pardon Me, I’m Different', meta: 'With PJ Morton · 2025', img: 'assets/art/rel-pardon.svg' },
  { slot: 'rel-lareezyana', title: 'Welcome to La Reezyana Vol 1.', meta: 'Mixtape · 2025', img: 'assets/art/rel-lareezyana.svg' },
  { slot: 'rel-weallneedhelp', title: 'We All Need Help', meta: 'Project · 2024', img: 'assets/art/rel-weallneedhelp.svg' },
  { slot: 'rel-reeborn', title: 'Reeborn', meta: 'Project · 2023', img: 'assets/reeborn-cover.jpg' },
];

/* CONCEPT MERCH — invented for the pitch. Not real product. */
window.PRODUCTS = [
  { slot: 'prod-bandana', name: 'The Skiddle Bandana', price: '$30', desc: 'Red-and-gold silk, printed with the album pattern.', img: 'assets/art/prod-bandana.svg', placeholder: 'Bandana', tag: 'Signature' },
  { slot: 'prod-tee', name: 'LaReezyana Tee', price: '$35', desc: 'Heavyweight cotton, LaReezyana crest front and back.', img: 'assets/art/prod-tee.svg', placeholder: 'Tee', tag: '' },
  { slot: 'prod-cap', name: 'Leader of da UTH Cap', price: '$32', desc: 'Utilize Time Here — stitched on a structured snapback.', img: 'assets/art/prod-cap.svg', placeholder: 'Cap', tag: '' },
  { slot: 'prod-hoodie', name: 'Tour Hoodie', price: '$65', desc: 'Full 2026 routing across the chest, crest on the sleeve.', img: 'assets/art/prod-hoodie.svg', placeholder: 'Hoodie', tag: 'Tour only' },
  { slot: 'prod-vinyl', name: 'Skiddle Bandana 12"', price: '$28', desc: 'The debut on wax, gold-foil sleeve, 13 tracks.', img: 'assets/art/prod-vinyl.svg', placeholder: 'Vinyl', tag: '' },
  { slot: 'prod-poster', name: 'Tour Poster', price: '$20', desc: '18" × 24" screenprint, signed, edition of 300.', img: 'assets/art/prod-poster.svg', placeholder: 'Poster', tag: 'Signed' },
];
