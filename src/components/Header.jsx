import { Shield, Wallet } from 'lucide-react'

export default function Header() {
  return (
    <header className="sticky top-0 z-30 w-full border-b border-gray-200/70 bg-white/70 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
            <Wallet className="h-5 w-5" />
          </div>
          <div className="leading-tight">
            <p className="font-semibold text-gray-900">WattPay</p>
            <p className="text-xs text-gray-500">Pay electricity smarter</p>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <a href="#pay" className="hover:text-gray-900">Pay Bill</a>
          <a href="#insights" className="hover:text-gray-900">Insights</a>
          <a href="#coverage" className="hover:text-gray-900">Coverage</a>
        </nav>
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-1 rounded-full border border-gray-200 px-3 py-1 text-xs text-gray-600">
            <Shield className="h-3.5 w-3.5 text-emerald-600" />
            Secure by design
          </div>
          <button className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            Sign in
          </button>
        </div>
      </div>
    </header>
  )
}
