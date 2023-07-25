import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "./PaymentForm";
const PUBLIC_KEY =
  "pk_test_51NXcYQKN36dse1aErlYD9mR6UNvUW4aW5nR8uNwoXJWCN7NRWGOvICJRbxORX9j68uo5BNtRfaH4MgXuwBIT1x5V00Wq1QTE7n";
const CLIENT_SECRET =
  "sk_test_51NXcYQKN36dse1aEviDU9Hfbkz3iBpNSfLeM8Iax1LYMNcS0xxRWAqp2kLvo7UKjKqTuFvvcFD4DJpTgMdJHh7aJ00YWMH0xx5";
const stripeTestPromise = loadStripe(PUBLIC_KEY);
function StripeContainer() {
  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentForm />
    </Elements>
  );
}

export default StripeContainer;
