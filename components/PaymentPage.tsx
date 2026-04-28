'use client';

import { useState, useEffect, useCallback } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '@/components/CheckoutForm';

const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
const stripePromise = publishableKey ? loadStripe(publishableKey) : null;

export default function PaymentPage() {
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const createPaymentIntent = useCallback(async () => {
    try {
      const res = await fetch('/api/stripe/create-payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || 'Something went wrong.');
      } else {
        setClientSecret(data.clientSecret);
      }
    } catch (err) {
      setError('Failed to connect to the server.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!stripePromise) {
      setError('Stripe publishable key is not configured.');
      setLoading(false);
      return;
    }
    createPaymentIntent();
  }, [createPaymentIntent]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <a href="/" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-indigo-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="text-xl font-bold tracking-tight">Acme</span>
            </a>
            <a
              href="/"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              ← Back to home
            </a>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-lg px-4 py-16 sm:px-6 lg:px-8">
        {/* Order summary */}
        <div className="rounded-2xl border border-gray-200 bg-white p-8 mb-8 shadow-sm">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-indigo-600 mb-1">
            Order Summary
          </h2>
          <h1 className="text-2xl font-bold tracking-tight mb-4">Acme Pro Plan</h1>
          <p className="text-gray-600 mb-6">
            Everything you need to grow your business — unlimited projects, 100 GB storage, priority
            support, advanced analytics, team collaboration, and custom integrations.
          </p>
          <div className="flex items-baseline gap-1 mb-2">
            <span className="text-4xl font-extrabold">$29</span>
            <span className="text-sm text-gray-500">/month</span>
          </div>
          <ul className="mt-4 space-y-2">
            {[
              'Unlimited projects',
              '100 GB storage',
              'Priority support',
              'Advanced analytics',
              'Team collaboration',
              'Custom integrations',
            ].map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                <svg
                  className="h-4 w-4 flex-shrink-0 text-indigo-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                {f}
              </li>
            ))}
          </ul>
        </div>

        {/* Payment form */}
        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <h2 className="text-lg font-semibold mb-6">Payment Details</h2>

          {loading && (
            <div className="flex items-center justify-center py-12">
              <div className="h-8 w-8 animate-spin rounded-full border-4 border-indigo-200 border-t-indigo-600" />
            </div>
          )}

          {error && (
            <div className="rounded-lg bg-red-50 border border-red-200 p-4 text-sm text-red-700">
              {error}
            </div>
          )}

          {!loading && !error && clientSecret && stripePromise && (
            <Elements
              stripe={stripePromise}
              options={{
                clientSecret,
                appearance: {
                  theme: 'stripe',
                  variables: {
                    colorPrimary: '#4f46e5',
                    borderRadius: '8px',
                  },
                },
              }}
            >
              <CheckoutForm />
            </Elements>
          )}
        </div>
      </div>
    </div>
  );
}
