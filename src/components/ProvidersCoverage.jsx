export default function ProvidersCoverage() {
  const countries = [
    {
      name: 'Uganda',
      providers: ['Umeme', 'UEDCL'],
      currency: 'UGX',
    },
    {
      name: 'Kenya',
      providers: ['Kenya Power'],
      currency: 'KES',
    },
    {
      name: 'Tanzania',
      providers: ['TANESCO'],
      currency: 'TZS',
    },
    {
      name: 'Rwanda',
      providers: ['REG'],
      currency: 'RWF',
    },
    {
      name: 'South Sudan',
      providers: ['SSEDC'],
      currency: 'SSP',
    },
  ]

  return (
    <section id="coverage" className="mx-auto max-w-6xl px-4 py-12">
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-gray-900">Available across East Africa</h2>
        <p className="mt-1 text-sm text-gray-500">We integrate directly with utility companies and mobile money providers to ensure reliable, real-time payments.</p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {countries.map((c) => (
            <div key={c.name} className="rounded-xl border border-gray-200 p-4">
              <div className="flex items-baseline justify-between">
                <p className="font-medium text-gray-900">{c.name}</p>
                <span className="text-xs rounded-full bg-gray-100 px-2 py-0.5 text-gray-600">{c.currency}</span>
              </div>
              <ul className="mt-2 text-sm text-gray-600 list-disc list-inside">
                {c.providers.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
