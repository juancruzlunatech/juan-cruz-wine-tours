import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="mt-auto border-t border-line bg-burgundy-deep text-cream">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-3 sm:px-6">
        <div>
          <p className="font-display text-2xl font-semibold">Juan Cruz Wine Tours</p>
          <p className="mt-2 text-sm text-cream/75">
            Private and small-group wine tasting on Waiheke Island — warm hospitality,
            island pace, and a guide who knows the roads and the cellar doors.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-gold">Contact</p>
          <ul className="mt-3 space-y-1 text-sm text-cream/85">
            <li>
              <a className="hover:text-white" href="tel:+64210000000">
                021 000 0000
              </a>
              <span className="text-cream/50"> · placeholder</span>
            </li>
            <li>
              <a className="hover:text-white" href="mailto:hello@juancruzwinetours.nz">
                hello@juancruzwinetours.nz
              </a>
            </li>
            <li>Waiheke Island, Auckland, New Zealand</li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-gold">Explore</p>
          <ul className="mt-3 space-y-1 text-sm text-cream/85">
            <li>
              <Link className="hover:text-white" to="/tours">
                Tours &amp; packages
              </Link>
            </li>
            <li>
              <Link className="hover:text-white" to="/experience">
                The island experience
              </Link>
            </li>
            <li>
              <Link className="hover:text-white" to="/faq">
                FAQ
              </Link>
            </li>
            <li>
              <Link className="hover:text-white" to="/contact">
                Booking enquiry
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-cream/55">
        © {new Date().getFullYear()} Juan Cruz Wine Tours · en-NZ · Placeholder photos until
        real tour photography.
      </div>
    </footer>
  )
}
