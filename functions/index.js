const functions = require("firebase-functions");
const express = require('express');
const cors = require('cors')
const stripe = require('stripe')('sk_test_51JrHB6SHIDhmJGCMJcQByyPaLPSKRbyCyzQs7QGE33ThdrRdTi4aM3RpkBhrgd7JqPiAu3TupAdfSxuBu4Dyg5H600NmlLcepy')

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.post('/payment/create', async (req, res) => {
    const total = req.query.total;
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: 'inr'
    });
    res.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

exports.api = functions.https.onRequest(app);