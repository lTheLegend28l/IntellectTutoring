const Stripe = require("stripe");
const stripe = new Stripe(process.env.STRIPE_KEY);

exports.handler = async (event) => {
  try {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: "price_1NHyXjK1Xa4n6v2jwlkfS4gc",
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${process.env.DOMAIN}/schedule?success=true`,
      cancel_url: `${process.env.DOMAIN}/checkout/tutoring?canceled=true`,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ url: session.url }),
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};
