const DoorDashClient = require('@doordash/sdk');

const client = new DoorDashClient.DoorDashClient(
  process.env.DOORDASH_
);

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