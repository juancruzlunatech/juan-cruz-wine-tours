export function About() {
  return (
    <div>
      <section className="border-b border-line bg-sand/35">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:py-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-burgundy">About</p>
            <h1 className="font-display mt-2 text-4xl font-semibold text-ink sm:text-5xl">
              Meet Juan Cruz
            </h1>
            <p className="mt-4 text-muted leading-relaxed">
              Juan Cruz Wine Tours is a Waiheke-based experience led by Juan — a local host who
              believes the best tasting days feel like visiting a friend’s favourite spots, not
              racing a checklist.
            </p>
            <p className="mt-3 text-muted leading-relaxed">
              This bio is an honest placeholder while the live site takes shape: Juan lives on
              Waiheke Island and brings a warm NZ–Argentina connection to the table — bilingual
              hospitality, curiosity about people, and a soft spot for long lunches overlooking the
              gulf.
            </p>
          </div>
          <img
            src="./images/waiheke-palm-beach.jpg"
            alt="Palm Beach shoreline on Waiheke Island"
            className="h-72 w-full rounded-3xl object-cover shadow-md sm:h-96"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <div className="grid gap-8 lg:grid-cols-3">
          <article className="rounded-2xl border border-line bg-cream/80 p-6 lg:col-span-2">
            <h2 className="font-display text-2xl font-semibold text-burgundy">Why Waiheke</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Forty minutes by ferry from Auckland, Waiheke folds vineyards into coastal hills,
              olive groves, and beaches. Syrah and Bordeaux-style blends sit beside cellar doors
              with harbour views — boutique scale, not industrial sprawl. Juan’s tours stay small
              so there’s room for questions, second pours when they make sense, and the odd detour
              for a lookout when the light is good.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Expect clear communication before the day, a calm drive between stops, and enough
              time to actually enjoy what you’re tasting. If you’re celebrating, curious beginners,
              or returning wine lovers — say so in your enquiry and we’ll tune the route.
            </p>
          </article>
          <article className="rounded-2xl border border-line bg-burgundy p-6 text-cream">
            <h2 className="font-display text-2xl font-semibold">Hospitality notes</h2>
            <ul className="mt-4 space-y-3 text-sm text-cream/85">
              <li>English-led tours · en-NZ</li>
              <li>Spanish welcome when helpful</li>
              <li>Designated driver always</li>
              <li>Dietary needs taken seriously</li>
              <li>Weather plans with soft backups</li>
            </ul>
          </article>
        </div>
      </section>
    </div>
  )
}
