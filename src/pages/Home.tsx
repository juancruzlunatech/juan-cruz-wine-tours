import { Link } from 'react-router-dom'

const reasons = [
  {
    title: 'Local on the island',
    body: 'Juan lives on Waiheke — timing, parking, and the quieter cellar doors are part of the craft.',
  },
  {
    title: 'Small groups, soft pace',
    body: 'Shared tours stay intimate. Private days follow your rhythm: linger where you love, skip the rush.',
  },
  {
    title: 'Warm island hospitality',
    body: 'Premium without pretence — stories between pours, ferry meetups if you need them, and a day that feels like Waiheke.',
  },
]

const steps = [
  { n: '01', title: 'Meet', text: 'Matiatia ferry terminal or your accommodation — we confirm the pickup when you book.' },
  { n: '02', title: 'Taste', text: 'Two to three boutique stops with coastal views, vines, and cellar-door flights.' },
  { n: '03', title: 'Graze', text: 'Platter time or a vineyard lunch stop — tell us about dietary needs in your enquiry.' },
  { n: '04', title: 'Return', text: 'Back to the ferry or your stay with a clear head for the crossing (we’re your designated driver).' },
]

export function Home() {
  return (
    <div>
      <section className="relative isolate overflow-hidden">
        <img
          src="./images/waiheke-coast.jpg"
          alt="Coastal hills and sea views on Waiheke Island"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-burgundy-deep/90 via-burgundy/75 to-plum/55" />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-4 py-20 sm:px-6 sm:py-28 lg:py-32">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            Waiheke Island · New Zealand
          </p>
          <h1 className="font-display max-w-2xl text-4xl font-semibold leading-tight text-cream sm:text-5xl lg:text-6xl">
            Private &amp; small-group wine tasting, with island hospitality
          </h1>
          <p className="max-w-xl text-base text-cream/90 sm:text-lg">
            Explore Waiheke’s boutique vineyards with Juan Cruz — a local guide who keeps the day
            unhurried, the pours thoughtful, and the views front and centre.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="rounded-full bg-gold px-6 py-3 text-sm font-semibold text-burgundy-deep shadow-sm transition hover:bg-[#d4b03a]"
            >
              Book an enquiry
            </Link>
            <Link
              to="/tours"
              className="rounded-full border border-cream/40 bg-white/10 px-6 py-3 text-sm font-semibold text-cream backdrop-blur transition hover:bg-white/20"
            >
              View tours
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-burgundy">Why us</p>
          <h2 className="font-display mt-2 text-3xl font-semibold text-ink sm:text-4xl">
            A local guide, not a big-bus day
          </h2>
          <p className="mt-3 text-muted">
            Waiheke rewards curiosity and patience. We plan for both — so you taste more of the
            island, and less of the timetable.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {reasons.map((r) => (
            <article
              key={r.title}
              className="rounded-2xl border border-line bg-cream/80 p-6 shadow-sm"
            >
              <h3 className="font-display text-xl font-semibold text-burgundy">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{r.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-sand/40 py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-burgundy">
              Featured packages
            </p>
            <h2 className="font-display mt-2 text-3xl font-semibold text-ink sm:text-4xl">
              Shared, private, or sunset grazing
            </h2>
            <p className="mt-3 text-muted">
              Indicative NZD pricing on the tours page — we’ll confirm availability, vineyard
              openings, and a tailored route once you enquire.
            </p>
            <Link
              to="/tours"
              className="mt-6 inline-flex rounded-full bg-burgundy px-5 py-2.5 text-sm font-semibold text-cream hover:bg-burgundy-deep"
            >
              Compare packages
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <img
              src="./images/wine-glasses.jpg"
              alt="Wine glass with outdoor vineyard view"
              className="h-56 w-full rounded-2xl object-cover shadow-md sm:h-64"
            />
            <img
              src="./images/vineyard-hills.jpg"
              alt="Rolling vineyard hills"
              className="h-56 w-full rounded-2xl object-cover shadow-md sm:mt-8 sm:h-64"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-burgundy">
            How the day works
          </p>
          <h2 className="font-display mt-2 text-3xl font-semibold text-ink sm:text-4xl">
            Ferry meetup optional · island flow guaranteed
          </h2>
        </div>
        <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <li key={s.n} className="rounded-2xl border border-line bg-white/70 p-5">
              <span className="font-display text-2xl font-semibold text-gold">{s.n}</span>
              <h3 className="mt-2 font-semibold text-burgundy">{s.title}</h3>
              <p className="mt-1 text-sm text-muted">{s.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-t border-line bg-burgundy px-4 py-14 text-center sm:px-6">
        <h2 className="font-display text-3xl font-semibold text-cream">
          Ready for a Waiheke wine day?
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-cream/80">
          Tell us your dates, group size, and vibe — we’ll reply with options and indicative pricing.
        </p>
        <Link
          to="/contact"
          className="mt-6 inline-flex rounded-full bg-gold px-6 py-3 text-sm font-semibold text-burgundy-deep hover:bg-[#d4b03a]"
        >
          Start your enquiry
        </Link>
      </section>
    </div>
  )
}
