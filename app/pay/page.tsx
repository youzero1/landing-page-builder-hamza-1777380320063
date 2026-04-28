import PaymentPage from '@/components/PaymentPage';

export const metadata = {
  title: 'Pay — Acme Pro Plan',
  description: 'Complete your purchase of the Acme Pro Plan for $29.',
};

export default function PayRoute() {
  return <PaymentPage />;
}
