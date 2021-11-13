require("dotenv").config()
const router = require('express').Router();

const stripe= require('stripe')(process.env.STRIPE_SECRET_PRODUCTION)
console.log(process.env.STRIPE_SECRET_PRODUCTION)


const storeItems = new Map([
  [1, { priceInCents: 10000, name: 'Learn React Today' }],
  [2, { priceInCents: 15000, name: 'Learn CSS Today' }],
]);

 router.post('/create-checkout-session', async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: req.body.items.map(({ id, quantity, price }) => {
        // const storeItem = storeItems.get(id);
        // console.log(storeItem,"strore itme")
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
      success_url: 'http://localhost:3000/',
      cancel_url: 'http://localhost:3000/donate',
    });
    res.json({ url: session.url });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});


module.exports = router;