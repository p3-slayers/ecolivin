require("dotenv").config()
const router = require('express').Router();

const stripe= require('stripe')(process.env.STRIPE_SECRET_PRODUCTION)

 router.post('/create-checkout-session', async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: req.body.items.map(({ quantity, price }) => {
        return {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Donation Amount'
            },
            unit_amount: price*100,
          },
          quantity: quantity,
        };
      }),
      mode: 'payment',
      success_url: 'http://localhost:3000/success',
      cancel_url: 'http://localhost:3000/donate',
    });
    res.json({ url: session.url });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});


module.exports = router;