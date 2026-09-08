import { Outlet } from 'react-router-dom'
import { Footer } from './Footer'
import { Header } from './Header'
import { PlaceholderBanner } from './PlaceholderBanner'

export function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <PlaceholderBanner />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
