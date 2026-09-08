const highlights = [
  {
    title: 'Boutique cellar doors',
    body: 'Illustrative of the Mudbrick-style island feel — gardens, gulf views, and carefully poured flights. Specific vineyard bookings are confirmed per tour day.',
    image: './images/wine-glasses.jpg',
    alt: 'Wine glass overlooking orchard and hills',
  },
  {
    title: 'Vines & volcanic slopes',
    body: 'Waiheke’s hills and maritime climate shape concentrated reds and elegant whites. We pause for the landscape as much as the glass.',
    image: './images/vineyard-hills.jpg',
    alt: 'Vineyard hills in soft light',
  },
  {
    title: 'Grapes to glass',
    body: 'Learn a little about varieties and tasting without the lecture — enough story to make each pour stick.',
    image: './images/vineyard-rows.jpg',
    alt: 'Red grapes and wine glass detail',
  },
  {
    title: 'Coastal island pauses',
    body: 'Between cellar doors: beaches, lookouts, and that salt-air reset that makes Waiheke feel a world away from the CBD.',
    image: './images/waiheke-palm-beach.jpg',
    alt: 'Palm Beach on Waiheke Island',
  },
  {
    title: 'Cellar atmosphere',
    body: 'Racks, barrels, and quiet corners — the tactile side of wine country when a stop allows a peek behind the scenes.',
    image: './images/wine-cellar.jpg',
    alt: 'Wine bottles in a cellar setting',
  },
  {
    title: 'Shared tables',
    body: 'Cheers with your group — celebrations, anniversaries, or simply a long-awaited day off the mainland.',
    image: './images/wine-tasting.jpg',
    alt: 'Group toasting with wine outdoors',
  },
]

export function Experience() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-burgundy">Experience</p>
        <h1 className="font-display mt-2 text-4xl font-semibold text-ink">
          Vineyards, scenery &amp; island light
        </h1>
        <p className="mt-3 text-muted">
          A gallery of the Waiheke wine mood. Named venues on marketing materials are{' '}
          <strong className="font-semibold text-ink">illustrative</strong> of the boutique island
          style unless we confirm a partnership for your date. Stock photos until real tour shots
          land.
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {highlights.map((h) => (
          <article
            key={h.title}
            className="overflow-hidden rounded-2xl border border-line bg-cream/70 shadow-sm"
          >
            <img src={h.image} alt={h.alt} className="h-48 w-full object-cover" />
            <div className="p-5">
              <h2 className="font-display text-xl font-semibold text-burgundy">{h.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{h.body}</p>
            </div>
          </article>
        ))}
      </div>

      <aside className="mt-12 rounded-2xl border border-dashed border-sand-deep/60 bg-sand/40 p-6 text-sm text-muted">
        <p className="font-semibold text-ink">Illustrative venues</p>
        <p className="mt-1">
          Guests often ask about Mudbrick-style ridge views, eastern-coast beach cellar doors, and
          valley boutique stops. We’ll match openings and your preferences when you book — no
          venue is guaranteed until confirmed for your tour.
        </p>
      </aside>
    </div>
  )
}
