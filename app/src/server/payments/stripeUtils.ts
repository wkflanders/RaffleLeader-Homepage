import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_KEY!, {
  apiVersion: '2022-11-15',
});

// WASP_WEB_CLIENT_URL will be set up by Wasp when deploying to production: https://wasp-lang.dev/docs/deploying
const DOMAIN = process.env.WASP_WEB_CLIENT_URL || 'http://localhost:3000';

export async function fetchStripeCustomer(customerEmail: string) {
  let customer: Stripe.Customer;
  const stripeCustomers = await stripe.customers.list({
    email: customerEmail,
  });
  if (!stripeCustomers.data.length) {
    console.log('creating customer');
    customer = await stripe.customers.create({
      email: customerEmail,
    });
  } else {
    console.log('using existing customer');
    customer = stripeCustomers.data[0];
  }
  return customer;
}

export async function createStripeCheckoutSession({
  priceId,
  customerId,
  mode,
}: {
  priceId: string;
  customerId?: string;  // Make customerId optional
  mode: 'subscription' | 'payment';
}) {
  const sessionParams: Stripe.Checkout.SessionCreateParams = {
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    mode: mode,
    success_url: `${DOMAIN}/checkout?success=true`,
    cancel_url: `${DOMAIN}/checkout?canceled=true`,
    automatic_tax: { enabled: true }
  };

  // Only include the customer ID and customer_update if one is provided
  if (customerId) {
    sessionParams.customer = customerId;
    sessionParams.customer_update = {
      address: 'auto',
    };
  } else {
    // Stripe will prompt for email if customer_email is set to undefined explicitly
    sessionParams.customer_email = undefined; 
  }

  return await stripe.checkout.sessions.create(sessionParams);
}


