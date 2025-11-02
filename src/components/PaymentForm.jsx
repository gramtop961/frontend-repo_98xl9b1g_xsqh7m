import { useState } from 'react'
import { CreditCard, Phone, User, ArrowRight } from 'lucide-react'

const providers = [
  { id: 'umeme', name: 'Umeme (UG)', country: 'Uganda' },
  { id: 'kplc', name: 'Kenya Power (KE)', country: 'Kenya' },
  { id: 'tanesco', name: 'TANESCO (TZ)', country: 'Tanzania' },
  { id: 'reg', name: 'REG (RW)', country: 'Rwanda' },
  { id: 'ssedc', name: 'SSEDC (SS)', country: 'South Sudan' },
]

const methods = [
  { id: 'mobile_money', label: 'Mobile Money', icon: Phone },
  { id: 'card', label: 'Debit/Credit Card', icon: CreditCard },
]

export default function PaymentForm() {
  const [method, setMethod] = useState('mobile_money')
  const [sendingFor, setSendingFor] = useState('self')

  return (
    <section id="pay" className="mx-auto max-w-6xl px-4 py-12">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900">Pay your electricity bill</h2>
          <p className="mt-1 text-sm text-gray-500">Fast, secure, and convenient across East Africa.</p>

          <div className="mt-6 grid gap-4">
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">Service provider</label>
              <select className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500">
                {providers.map((p) => (
                  <option key={p.id} value={p.id}>{p.name}</option>
                ))}
              </select>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">Account/Meter number</label>
                <input type="text" placeholder="e.g. 1234567890" className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">Amount</label>
                <input type="number" placeholder="e.g. 50,000" className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">Paying for</label>
              <div className="flex items-center gap-3">
                <button onClick={() => setSendingFor('self')} className={`rounded-full px-3 py-1 text-sm border ${sendingFor === 'self' ? 'border-blue-600 text-blue-700 bg-blue-50' : 'border-gray-300 text-gray-700'}`}>Myself</button>
                <button onClick={() => setSendingFor('other')} className={`rounded-full px-3 py-1 text-sm border ${sendingFor === 'other' ? 'border-blue-600 text-blue-700 bg-blue-50' : 'border-gray-300 text-gray-700'}`}>Someone else</button>
              </div>
            </div>

            {sendingFor === 'other' && (
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">Recipient name</label>
                  <div className="relative">
                    <User className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                    <input type="text" placeholder="e.g. Jane Doe" className="w-full rounded-lg border border-gray-300 pl-9 pr-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">Recipient phone</label>
                  <div className="relative">
                    <Phone className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                    <input type="tel" placeholder="e.g. +256 700 000000" className="w-full rounded-lg border border-gray-300 pl-9 pr-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <p className="mt-1 text-xs text-gray-500">A small convenience fee applies. You’ll see it before confirming.</p>
                </div>
              </div>
            )}

            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">Payment method</label>
              <div className="grid grid-cols-2 gap-3">
                {methods.map(({ id, label, icon: Icon }) => (
                  <button
                    key={id}
                    onClick={() => setMethod(id)}
                    className={`flex items-center justify-center gap-2 rounded-lg border px-3 py-2 text-sm ${method === id ? 'border-blue-600 bg-blue-50 text-blue-700' : 'border-gray-300 text-gray-700'}`}
                  >
                    <Icon className="h-4 w-4" /> {label}
                  </button>
                ))}
              </div>
            </div>

            <button className="group mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
              Continue
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-slate-50 to-white p-6">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500">Why WattPay</h3>
          <ul className="mt-4 grid gap-3">
            <li className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
              • Pay with mobile money or cards in seconds
            </li>
            <li className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
              • Support for family and friends with transparent fees
            </li>
            <li className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
              • Bank‑grade security and instant confirmations
            </li>
            <li className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
              • Personalized insights and bill forecasting
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
