import react from "react"
import client from "@doordash/client";
const axios = require("axios");

const DoorDashConfig = {
  developer_id: "c479cb9c-93dc-4a38-ad30-b840a2c7227d",
  key_id: "0a03ab22-d5f7-4710-a136-09090b709cc6",
  signing_secret: "EDAstWZreC7VbPrb5ukE7vltT_eDpgR9ZrXs_XvMzXQ",
  jwt: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImRkLXZlciI6IkRELUpXVC1WMSJ9.eyJhdWQiOiJkb29yZGFzaCIsImV4cCI6MTY1NTM5NTc4MSwiaWF0IjoxNjU1MzkzOTgxLCJpc3MiOiJjNDc5Y2I5Yy05M2RjLTRhMzgtYWQzMC1iODQwYTJjNzIyN2QiLCJraWQiOiIwYTAzYWIyMi1kNWY3LTQ3MTAtYTEzNi0wOTA5MGI3MDljYzYifQ.JIkLOOXZ8l1tWJDGLY_0AASTYCOXVCrOKMqBGYifm-s"
}

const encodedParams = new URLSearchParams();
encodedParams.append("developer_id", process.env.DOORDASH_DEVELOPER_ID || DoorDashConfig.developer_id);
encodedParams.append("key_id", process.env.DOORDASH_KEY_ID || DoorDashConfig.key_id);
encodedParams.append("signing_secret", process.env.KEY_SECRET || DoorDashConfig.signing_secret);

const options = {
  method: 'POST',
  url: '',
  headers: {
    'Authorization': 'bearer ' + DoorDashConfig.jwt
    'content-type': 'application/x-www-form-urlencoded',
    'X-RapidAPI-Key': 'b838da7ad6mshd7412ef111250afp12e8f4jsne4e0a2f1ee72',
    'X-RapidAPI-Host': 'PostmatesAPIserg-osipchukV1.p.rapidapi.com'
  },
  data: encodedParams
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});