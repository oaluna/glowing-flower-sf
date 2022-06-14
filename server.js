const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

//const doordash = require("@doordash/client");


const app = express();
const port = process.env.PORT || 5000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  cors({
    origin:
      process.env.NODE_ENV === "production"
        ? process.env.PRODUCTION_CLIENT_URL
        : "http://localhost:3000",
    credentials: true,
  })
);


if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, error => {
  if (error) throw error;
  console.log('Server running on port ' + port);
});

app.post('/booking', (req, res) => {
  const body = {
    source: req.body.token.id,
    date: req.body.date
  }
})

app.post('/payment', (req, res) => {
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: 'usd'
  };


  stripe.charges.create(body, (stripeErr, stripeRes) => {
    if (stripeErr) {
      res.status(500).send({ error: stripeErr });
    } else {
      res.status(200).send({ success: stripeRes });
    }
  });
});

// app.post('/delivery',client, (req, res) => {
//    const client = new DoorDashClient.DoorDashClient(process.env.DOORDASH_API_KEY);

//   const response = client
//   .createDelivery({
//     external_delivery_id: "D-12345",
//     pickup_address: "1000 4th Ave, Seattle, WA, 98104",
//     pickup_phone_number: "+1(650)5555555",
//     dropoff_address: "1201 3rd Ave, Seattle, WA, 98101",
//     dropoff_phone_number: "+1(650)5555555",
//   })
//   .then((response) => {
//     console.log(response.data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// })