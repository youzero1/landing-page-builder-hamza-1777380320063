import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

export async function POST(request: NextRequest) {
  const secretKey = process.env.STRIPE_SECRET_KEY;

  if (!secretKey) {
    return NextResponse.json(
      { error: 'Stripe is not configured on the server.' },
      { status: 500 }
    );
  }

  const stripe = new Stripe(secretKey, {
    apiVersion: '2024-04-10' as any,
  });

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 2900, // $29.00 in cents
      currency: 'usd',
      metadata: {
        product: 'Acme Pro Plan',
      },
      automatic_payment_methods: {
        enabled: true,
      },
    });

    return NextResponse.json({ clientSecret: paymentIntent.client_secret });
  } catch (err: any) {
    console.error('Stripe error:', err.message);
    return NextResponse.json(
      { error: err.message || 'Failed to create payment intent.' },
      { status: 500 }
    );
  }
}
