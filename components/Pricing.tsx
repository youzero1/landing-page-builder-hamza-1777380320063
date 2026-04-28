import Link from 'next/link';

const plans = [
  {
    name: 'Starter',
    price: '$0',
    period: '/month',
    description: 'Perfect for side projects and experimentation.',
    features: ['Up to 3 projects', '1 GB storage', 'Community support', 'Basic analytics'],
    cta: 'Get Started',
    highlighted: false,
    href: '#',
  },
  {
    name: 'Pro',
    price: '$29',
    period: '/month',
    description: 'Everything you need to grow your business.',
    features: [
      'Unlimited projects',
      '100 GB storage',
      'Priority support',
      'Advanced analytics',
      'Team collaboration',
      'Custom integrations',
    ],
    cta: 'Buy Now — $29',
    highlighted: true,
    href: '/pay',
  },
  {
    name: 'Enterprise',
    price: '$99',
    period: '/month',
    description: 'For large teams with advanced needs.',
    features: [
      'Everything in Pro',
      '1 TB storage',
      'Dedicated account manager',
      'SSO & SAML',
      'Custom SLA',
      'On-premise option',
    ],
    cta: 'Contact Sales',
    highlighted: false,
    href: '#',
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600 mb-2">Pricing</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            No hidden fees. No surprises. Pick the plan that fits your needs.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 items-start">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl border p-8 flex flex-col ${
                plan.highlighted
                  ? 'border-indigo-600 shadow-xl shadow-indigo-500/10 ring-1 ring-indigo-600'
                  : 'border-gray-200'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 inline-flex items-center rounded-full bg-indigo-600 px-4 py-1 text-xs font-semibold text-white">
                  Most Popular
                </div>
              )}

              <h3 className="text-lg font-semibold">{plan.name}</h3>
              <p className="mt-1 text-sm text-gray-500">{plan.description}</p>

              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold">{plan.price}</span>
                <span className="text-sm text-gray-500">{plan.period}</span>
              </div>

              <ul className="mt-8 space-y-3 flex-1">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3 text-sm text-gray-700">
                    <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-indigo-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href={plan.href}
                className={`mt-8 block w-full rounded-lg px-4 py-3 text-center text-sm font-semibold transition-colors ${
                  plan.highlighted
                    ? 'bg-indigo-600 text-white shadow-sm hover:bg-indigo-500'
                    : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
