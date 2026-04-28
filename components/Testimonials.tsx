const testimonials = [
  {
    quote: 'Acme completely transformed our workflow. We shipped our product 3x faster and our team loves it.',
    name: 'Sarah Chen',
    role: 'CTO at Vercel',
    initials: 'SC',
  },
  {
    quote: 'The best platform we have ever used. The integrations alone saved us hundreds of hours this quarter.',
    name: 'Marcus Johnson',
    role: 'Head of Product at Stripe',
    initials: 'MJ',
  },
  {
    quote: 'Switching to Acme was the best decision we made this year. Our conversion rate went up 40%.',
    name: 'Emily Rodriguez',
    role: 'Founder at Linear',
    initials: 'ER',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600 mb-2">Testimonials</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Loved by teams worldwide
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            See what industry leaders are saying about their experience with Acme.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="flex flex-col justify-between rounded-2xl bg-white p-8 shadow-sm border border-gray-200"
            >
              {/* Stars */}
              <div className="mb-4 flex gap-1 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.063 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
                  </svg>
                ))}
              </div>

              <blockquote className="text-gray-700 leading-relaxed mb-6">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-sm font-bold text-indigo-600">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
