import DoorDashClient from "@doordash/sdk"

const token = process.env.DOORDASH_SIGNING_SECRET;

export const createDelivery = (req, res) => {
  const client = new DoorDashClient({
  developer_id: process.env.DOORDASH_DEVELOPER_ID,
  key_id: process.env.DOORDASH_KEY_ID,
  signing_secret: process.env.DOORDASH_SIGNING_SECRET,
  });

const response = await client.createDelivery({
  external_delivery_id: uuidv4(),
  pickup_address: params.pickup_address,
  pickup_phone_number: params.phone_number,
  dropoff_address: params.dropoff_address,
  dropoff_phone_number: params.dropoff_phone_number,
}).then((res) => {
  if(res.data) {
    return
  }
}).catch(errorMessage => {
  return json.status(400).json({
    message: errorMessage
  })
})
}

