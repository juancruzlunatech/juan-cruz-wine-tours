import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/tours', label: 'Tours' },
  { to: '/experience', label: 'Experience' },
  { to: '/about', label: 'About' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
]

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-cream/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <NavLink to="/" className="group flex min-w-0 items-center gap-2.5">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-burgundy text-sm font-bold text-cream">
            JC
          </span>
          <span className="truncate">
            <span className="font-display block text-lg font-semibold leading-tight tracking-tight text-burgundy group-hover:text-plum">
              Juan Cruz Wine Tours
            </span>
            <span className="block text-[11px] font-medium uppercase tracking-[0.14em] text-muted">
              Waiheke Island
            </span>
          </span>
        </NavLink>
        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) =>
                `rounded-full px-3 py-1.5 text-sm font-medium transition ${
                  isActive
                    ? 'bg-burgundy text-cream'
                    : 'text-muted hover:bg-sand/80 hover:text-burgundy'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
        <NavLink
          to="/contact"
          className="rounded-full bg-burgundy px-4 py-2 text-sm font-semibold text-cream shadow-sm transition hover:bg-burgundy-deep"
        >
          Book
        </NavLink>
      </div>
      <nav className="flex gap-1 overflow-x-auto border-t border-line/60 px-4 py-2 lg:hidden">
        {links.map((l) => (
          <NavLink
            key={l.to}
            to={l.to}
            end={l.end}
            className={({ isActive }) =>
              `whitespace-nowrap rounded-full px-3 py-1 text-xs font-medium ${
                isActive ? 'bg-burgundy text-cream' : 'bg-sand/50 text-muted'
              }`
            }
          >
            {l.label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}
