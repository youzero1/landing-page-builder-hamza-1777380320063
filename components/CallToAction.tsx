export default function CallToAction() {
  return (
    <section className="py-24 bg-gradient-to-br from-indigo-600 to-purple-700">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Ready to build something great?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-indigo-100">
          Join thousands of teams already using Acme to ship faster, collaborate better, and grow smarter.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-indigo-600 shadow-lg hover:bg-gray-50 transition-colors"
          >
            Start for free
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-lg border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
          >
            Schedule a demo →
          </a>
        </div>
      </div>
    </section>
  );
}
