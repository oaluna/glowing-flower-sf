const DoorDashClient = require('@doordash/sdk');
const mongoose = require('mongoose')
const client = new DoorDashClient.DoorDashClient(
  process.env.DOORDASH_KEY_ID
);
const jwt = require('jsonwebtoken');

const data = {

  "aud": "doordash",
  "exp": 1655168797,
  "iat": 1655166997,
  "iss": "94c118bc-0f01-4fbd-90f9-d0a4d198a7f1",
  "kid": "48a6e154-19c4-42c8-9153-98b8e2dcb435",
}

const headers = {
  algorithm: 'HS256',
  header: {

    "alg": "HS256",
    "typ": "JWT",
    "dd-ver": "DD-JWT-V1"
  }

};

const token = jwt.sign(
  data,
  Buffer.from(`${process.env.DOORDASH_SIGNING_SECRET}`, 'base64'),
  headers
);

module.exports = { data, headers, token }

// const response = client
//   .createDelivery({
//     external_delivery_id: process.env.DOORDASH_DELIVERY_ID,
//     pickup_address: '1000 4th Ave, Seattle, WA, 98104',
//     pickup_phone_number: '+1(650)5555555',
//     dropoff_address: '1201 3rd Ave, Seattle, WA, 98101',
//     dropoff_phone_number: '+1(650)5555555',
//   })
//   .then((response) => {
//     console.log(response.data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });