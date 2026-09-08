import { Link } from 'react-router-dom'

const packages = [
  {
    id: 'classic',
    name: 'Classic Shared Tour',
    price: 'From NZD $195 pp',
    duration: '~6 hours',
    tag: 'Most popular',
    blurb:
      'A sociable small-group day visiting boutique cellar doors with coastal lookouts and an easy island pace.',
    inclusions: [
      'Shared vehicle with local guide',
      '2–3 vineyard / cellar-door stops',
      'Tasting fees at selected stops (as confirmed)',
      'Ferry terminal or island pickup (by arrangement)',
      'Bottled water on board',
    ],
    image: './images/wine-tasting.jpg',
    alt: 'Friends toasting with wine glasses outdoors',
  },
  {
    id: 'private',
    name: 'Private Island Tour',
    price: 'From NZD $750 / vehicle',
    duration: 'Full day or half-day',
    tag: 'Your pace',
    blurb:
      'Just your party — choose the vibe (romantic, celebration, curious beginners) and we shape the route around you.',
    inclusions: [
      'Private vehicle & dedicated guide',
      'Custom stop list within opening hours',
      'Flexible lunch / grazing timing',
      'Pickup from ferry or accommodation',
      'Optional add-ons on request',
    ],
    image: './images/vineyard-hills.jpg',
    alt: 'Sunlit vineyard landscape',
  },
  {
    id: 'sunset',
    name: 'Sunset & Grazing',
    price: 'From NZD $240 pp',
    duration: '~4–5 hours',
    tag: 'Late light',
    blurb:
      'Afternoon pours that lean into golden hour — vineyard views, a grazing board, and a softer finish to the day.',
    inclusions: [
      'Late-afternoon start',
      '1–2 scenic tasting stops',
      'Shared grazing platter (dietary options noted)',
      'Designated driver back to ferry / stay',
      'Golden-hour photo stops when weather allows',
    ],
    image: './images/grazing-board.jpg',
    alt: 'Wine and grazing-style table setting',
  },
]

export function Tours() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-burgundy">Tours</p>
        <h1 className="font-display mt-2 text-4xl font-semibold text-ink">Packages for every kind of day</h1>
        <p className="mt-3 text-muted">
          Prices below are <strong className="font-semibold text-ink">indicative NZD placeholders</strong> for
          planning. Final quotes depend on season, group size, vineyard availability, and tasting menus.
          Vineyard partnerships shown elsewhere on the site are illustrative unless confirmed in writing.
        </p>
      </div>

      <div className="mt-10 grid gap-8">
        {packages.map((p) => (
          <article
            key={p.id}
            className="grid overflow-hidden rounded-3xl border border-line bg-cream/70 shadow-sm lg:grid-cols-5"
          >
            <div className="relative lg:col-span-2">
              <img src={p.image} alt={p.alt} className="h-56 w-full object-cover lg:h-full" />
              <span className="absolute left-4 top-4 rounded-full bg-burgundy/90 px-3 py-1 text-xs font-semibold text-cream">
                {p.tag}
              </span>
            </div>
            <div className="flex flex-col p-6 sm:p-8 lg:col-span-3">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h2 className="font-display text-2xl font-semibold text-burgundy sm:text-3xl">
                  {p.name}
                </h2>
                <p className="text-sm font-semibold text-plum">{p.price}</p>
              </div>
              <p className="mt-1 text-xs font-medium uppercase tracking-wide text-muted">{p.duration}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{p.blurb}</p>
              <h3 className="mt-5 text-sm font-semibold text-ink">Inclusions</h3>
              <ul className="mt-2 grid gap-1.5 text-sm text-muted sm:grid-cols-2">
                {p.inclusions.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="mt-6 inline-flex w-fit rounded-full bg-burgundy px-5 py-2.5 text-sm font-semibold text-cream hover:bg-burgundy-deep"
              >
                Enquire about this tour
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
