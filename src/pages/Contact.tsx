import { type FormEvent, useState } from 'react'
import { saveEnquiry } from '../lib/storage'
import type { TourType } from '../lib/types'

const tourOptions: { value: TourType; label: string }[] = [
  { value: 'classic', label: 'Classic Shared Tour' },
  { value: 'private', label: 'Private Island Tour' },
  { value: 'sunset', label: 'Sunset & Grazing' },
  { value: 'unsure', label: 'Not sure yet — advise me' },
]

export function Contact() {
  const [submittedId, setSubmittedId] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)
    const fd = new FormData(e.currentTarget)
    const name = String(fd.get('name') ?? '').trim()
    const email = String(fd.get('email') ?? '').trim()
    const phone = String(fd.get('phone') ?? '').trim()
    const date = String(fd.get('date') ?? '').trim()
    const guestsRaw = String(fd.get('guests') ?? '2')
    const guests = Number(guestsRaw)
    const tourType = String(fd.get('tourType') ?? 'unsure') as TourType
    const message = String(fd.get('message') ?? '').trim()

    if (!name || !email || !phone || !date || !message) {
      setError('Please fill in all required fields.')
      return
    }
    if (!Number.isFinite(guests) || guests < 1 || guests > 20) {
      setError('Guests should be between 1 and 20.')
      return
    }

    const enquiry = saveEnquiry({
      name,
      email,
      phone,
      date,
      guests,
      tourType,
      message,
    })
    setSubmittedId(enquiry.id)
    e.currentTarget.reset()
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <div className="grid gap-10 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-burgundy">Contact</p>
          <h1 className="font-display mt-2 text-4xl font-semibold text-ink">Book an enquiry</h1>
          <p className="mt-3 text-muted">
            Share your preferred date and group size. This demo saves enquiries to your browser
            localStorage (key{' '}
            <code className="rounded bg-sand px-1.5 py-0.5 text-xs">jcwine-enquiries-v1</code>) —
            same pattern as the Waiheke Spa Hire demo site. No email is sent from this build.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-muted">
            <li>
              <span className="font-semibold text-ink">Phone:</span>{' '}
              <a className="text-burgundy hover:underline" href="tel:+64210000000">
                021 000 0000
              </a>{' '}
              (placeholder)
            </li>
            <li>
              <span className="font-semibold text-ink">Email:</span>{' '}
              <a className="text-burgundy hover:underline" href="mailto:hello@juancruzwinetours.nz">
                hello@juancruzwinetours.nz
              </a>
            </li>
            <li>
              <span className="font-semibold text-ink">Based:</span> Waiheke Island, Auckland, NZ
            </li>
          </ul>
          <img
            src="./images/wine-pour.jpg"
            alt="Wine bottles ready for tasting"
            className="mt-8 hidden h-56 w-full rounded-2xl object-cover shadow-sm lg:block"
          />
        </div>

        <div className="lg:col-span-3">
          {submittedId ? (
            <div className="rounded-3xl border border-ok/30 bg-ok/10 p-8">
              <p className="text-sm font-semibold uppercase tracking-wide text-ok">Enquiry saved</p>
              <h2 className="font-display mt-2 text-3xl font-semibold text-ink">
                Thanks — we&apos;ve got it
              </h2>
              <p className="mt-3 text-sm text-muted">
                Your enquiry was stored locally in this browser under{' '}
                <code className="rounded bg-sand px-1.5 py-0.5 text-xs">jcwine-enquiries-v1</code>.
                Reference: <span className="font-medium text-ink">{submittedId}</span>.
              </p>
              <button
                type="button"
                onClick={() => setSubmittedId(null)}
                className="mt-6 rounded-full bg-burgundy px-5 py-2.5 text-sm font-semibold text-cream hover:bg-burgundy-deep"
              >
                Send another enquiry
              </button>
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              className="rounded-3xl border border-line bg-cream/80 p-6 shadow-sm sm:p-8"
              noValidate
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-sm">
                  <span className="font-medium text-ink">Name *</span>
                  <input
                    name="name"
                    required
                    autoComplete="name"
                    className="mt-1.5 w-full rounded-xl border border-line bg-white px-3 py-2.5 outline-none ring-burgundy/30 focus:ring-2"
                  />
                </label>
                <label className="block text-sm">
                  <span className="font-medium text-ink">Email *</span>
                  <input
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="mt-1.5 w-full rounded-xl border border-line bg-white px-3 py-2.5 outline-none ring-burgundy/30 focus:ring-2"
                  />
                </label>
                <label className="block text-sm">
                  <span className="font-medium text-ink">Phone *</span>
                  <input
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    className="mt-1.5 w-full rounded-xl border border-line bg-white px-3 py-2.5 outline-none ring-burgundy/30 focus:ring-2"
                  />
                </label>
                <label className="block text-sm">
                  <span className="font-medium text-ink">Preferred date *</span>
                  <input
                    name="date"
                    type="date"
                    required
                    className="mt-1.5 w-full rounded-xl border border-line bg-white px-3 py-2.5 outline-none ring-burgundy/30 focus:ring-2"
                  />
                </label>
                <label className="block text-sm">
                  <span className="font-medium text-ink">Guests *</span>
                  <input
                    name="guests"
                    type="number"
                    min={1}
                    max={20}
                    defaultValue={2}
                    required
                    className="mt-1.5 w-full rounded-xl border border-line bg-white px-3 py-2.5 outline-none ring-burgundy/30 focus:ring-2"
                  />
                </label>
                <label className="block text-sm">
                  <span className="font-medium text-ink">Tour type *</span>
                  <select
                    name="tourType"
                    defaultValue="classic"
                    className="mt-1.5 w-full rounded-xl border border-line bg-white px-3 py-2.5 outline-none ring-burgundy/30 focus:ring-2"
                  >
                    {tourOptions.map((o) => (
                      <option key={o.value} value={o.value}>
                        {o.label}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="block text-sm sm:col-span-2">
                  <span className="font-medium text-ink">Message *</span>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Ferry times, dietary needs, celebration notes, preferred vineyards…"
                    className="mt-1.5 w-full rounded-xl border border-line bg-white px-3 py-2.5 outline-none ring-burgundy/30 focus:ring-2"
                  />
                </label>
              </div>
              {error ? <p className="mt-4 text-sm font-medium text-danger">{error}</p> : null}
              <button
                type="submit"
                className="mt-6 w-full rounded-full bg-burgundy px-5 py-3 text-sm font-semibold text-cream hover:bg-burgundy-deep sm:w-auto"
              >
                Submit enquiry
              </button>
              <p className="mt-3 text-xs text-muted">
                Demo only — data stays in this browser&apos;s localStorage until you clear site data.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
