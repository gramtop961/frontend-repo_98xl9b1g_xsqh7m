import Header from './components/Header'
import PaymentForm from './components/PaymentForm'
import InsightsPreview from './components/InsightsPreview'
import ProvidersCoverage from './components/ProvidersCoverage'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-slate-100 text-gray-900">
      <Header />

      <main>
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1000px_400px_at_50%_-100px,rgba(59,130,246,0.15),transparent)]" />
          <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
            <div className="max-w-2xl">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Pay electricity bills with mobile money and cards — fast, secure, and affordable
              </h1>
              <p className="mt-3 text-lg text-gray-600">
                Create an account to track usage, understand your spending, and get personalized forecasts that help you plan ahead.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#pay" className="rounded-md bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-blue-700">Get started</a>
                <a href="#insights" className="rounded-md border border-gray-300 bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 hover:bg-gray-50">See insights</a>
              </div>
            </div>
          </div>
        </section>

        <PaymentForm />
        <InsightsPreview />
        <ProvidersCoverage />
      </main>

      <footer className="border-t border-gray-200/70 py-8">
        <div className="mx-auto max-w-6xl px-4 text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} WattPay. Available in Uganda, Kenya, Tanzania, Rwanda, and South Sudan. Google sign‑in, card payments, and direct utility integrations coming soon.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
