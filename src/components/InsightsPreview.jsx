import { BarChart3 } from 'lucide-react'

export default function InsightsPreview() {
  return (
    <section id="insights" className="mx-auto max-w-6xl px-4 py-12">
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Insights & Forecasts</h2>
            <p className="mt-1 text-sm text-gray-500">Your account tracks usage and spending to personalize tips and predict your next bill.</p>
          </div>
          <div className="hidden sm:flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-700">
            <BarChart3 className="h-5 w-5" />
          </div>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-gray-200 p-4">
            <p className="text-xs font-medium text-gray-500">This month spend</p>
            <p className="mt-1 text-2xl font-semibold text-gray-900">UGX 128,500</p>
            <p className="mt-1 text-xs text-emerald-600">−6% vs last month</p>
          </div>
          <div className="rounded-xl border border-gray-200 p-4">
            <p className="text-xs font-medium text-gray-500">Average daily usage</p>
            <p className="mt-1 text-2xl font-semibold text-gray-900">13.2 kWh</p>
            <p className="mt-1 text-xs text-gray-500">Based on the last 30 days</p>
          </div>
          <div className="rounded-xl border border-gray-200 p-4">
            <p className="text-xs font-medium text-gray-500">Forecasted next bill</p>
            <p className="mt-1 text-2xl font-semibold text-gray-900">UGX 142,000</p>
            <p className="mt-1 text-xs text-gray-500">We’ll adjust as new data comes in</p>
          </div>
        </div>

        <div className="mt-6">
          <div className="h-36 w-full overflow-hidden rounded-lg bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100">
            <div className="h-full w-full bg-[radial-gradient(closest-side,rgba(59,130,246,0.35),transparent)]" />
          </div>
          <p className="mt-2 text-xs text-gray-500">Connect your account to see real data. We personalize insights using your usage history and payment behaviour.</p>
        </div>
      </div>
    </section>
  )
}
