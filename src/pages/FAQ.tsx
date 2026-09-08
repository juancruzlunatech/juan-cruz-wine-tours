const faqs = [
  {
    q: 'Do you meet us at the ferry?',
    a: 'Yes — Matiatia ferry meetup is a popular option. We can also collect from accommodation on the island. Tell us your ferry time in the enquiry form and we’ll propose a meet plan.',
  },
  {
    q: 'How long is a typical tour?',
    a: 'Classic shared days run about six hours. Sunset & Grazing is shorter (roughly four to five hours). Private tours can be half-day or full-day depending on what you want to cover.',
  },
  {
    q: 'Is food included?',
    a: 'It depends on the package. Sunset & Grazing includes a shared platter. Classic and Private tours often include a lunch stop or grazing — we’ll clarify inclusions when we quote.',
  },
  {
    q: 'Can you cater for dietary requirements?',
    a: 'Absolutely. Note vegetarian, vegan, gluten-free, allergies, or anything else in your enquiry. We’ll coordinate with food stops where possible and plan alternatives if needed.',
  },
  {
    q: 'What if the weather turns?',
    a: 'Waiheke weather shifts quickly. We tour in light rain with covered tasting areas where available. If conditions are unsafe (e.g. severe weather warnings), we’ll reschedule or discuss options.',
  },
  {
    q: 'What group sizes do you take?',
    a: 'Shared tours stay small for a premium feel (exact caps vary by vehicle and day). Private tours are ideal for couples through to larger celebrations — ask us about vehicle capacity.',
  },
  {
    q: 'Do we need to book vineyard tastings separately?',
    a: 'No — we coordinate cellar-door timings as part of the tour. Some premium experiences have limited seats; booking ahead helps us secure the best fit.',
  },
  {
    q: 'Are children allowed?',
    a: 'Wine-focused days are designed for adults of legal drinking age. If your group includes non-drinkers or younger travellers, message us — private tours can sometimes adapt the plan.',
  },
]

export function FAQ() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-burgundy">FAQ</p>
      <h1 className="font-display mt-2 text-4xl font-semibold text-ink">Common questions</h1>
      <p className="mt-3 text-muted">
        Ferry meetups, food, weather, and group size — answered plainly. Still unsure? Send an
        enquiry and we’ll help you choose a package.
      </p>
      <div className="mt-10 space-y-3">
        {faqs.map((item) => (
          <details
            key={item.q}
            className="group rounded-2xl border border-line bg-cream/80 px-5 py-4 open:bg-white"
          >
            <summary className="cursor-pointer list-none font-semibold text-burgundy marker:content-none [&::-webkit-details-marker]:hidden">
              <span className="flex items-start justify-between gap-4">
                {item.q}
                <span className="text-gold transition group-open:rotate-45">+</span>
              </span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-muted">{item.a}</p>
          </details>
        ))}
      </div>
    </div>
  )
}
