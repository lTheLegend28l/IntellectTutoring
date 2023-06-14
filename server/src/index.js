import "dotenv/config";
import express from "express";
import Stripe from "stripe";
import cors from "cors";

// Middleware Config
// Express
const app = express();
app.use(express.json());

// Cors
app.use(cors());

// Stripe
const stripe = new Stripe(process.env.STRIPE_KEY);

// Server
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log("Server running on port " + port);
});

// Variables
const domain = process.env.DOMAIN || "http://localhost:3000";

// Routes
app.post("/create-program-checkout-session", async (req, res) => {
  // Stripe Session
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: "price_1NHYmxK1Xa4n6v2jKulCrdA9",
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `${domain}/checkout/program?success=true`,
    cancel_url: `${domain}/checkout/program?canceled=true`,
  });

  res.send(session.url);
});

app.post("/create-tutoring-checkout-session", async (req, res) => {
  // Stripe Session
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: "price_1NHyXjK1Xa4n6v2jwlkfS4gc",
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `${domain}/schedule?success=true`,
    cancel_url: `${domain}/checkout/tutoring?canceled=true`,
  });

  res.send(session.url);
});
