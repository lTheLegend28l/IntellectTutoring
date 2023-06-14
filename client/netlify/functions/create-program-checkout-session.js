const Stripe = require("stripe");
const stripe = new Stripe(process.env.STRIPE_KEY);

exports.handler = async () => {
  try {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: "price_1NHYmxK1Xa4n6v2jKulCrdA9",
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${process.env.DOMAIN}/checkout/program?success=true`,
      cancel_url: `${process.env.DOMAIN}/checkout/program?canceled=true`,
    });

    res.send(session.url);
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};
