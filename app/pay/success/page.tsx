import Link from 'next/link';

export const metadata = {
  title: 'Payment Successful — Acme',
  description: 'Your payment was successful.',
};

export default function PaymentSuccessPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="mx-auto max-w-md px-4 text-center">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
          <svg
            className="h-10 w-10 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h1 className="text-3xl font-bold tracking-tight mb-4">Payment Successful!</h1>
        <p className="text-gray-600 mb-8">
          Thank you for purchasing the Acme Pro Plan. Your account has been upgraded and you now have
          access to all Pro features.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
