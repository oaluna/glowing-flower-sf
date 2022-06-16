const jwt = require('jsonwebtoken');

const accessKey = process.env.DOORDASH_API_KEY;

const data = {
  aud: 'doordash',
  iss: process.env.DOORDASH_DEVELOPER_ID,
  kid: process.env.DOORDASH_KEY_ID,
  exp: Math.floor(Date.now() / 1000 + 60),
  iat: Math.floor(Date.now() / 1000),
};

const headers = { algorithm: 'HS256', header: { 'dd-ver': 'DD-JWT-V1' } };

const token = jwt.sign(
  data,
  Buffer.from(accessKey.signing_secret, 'base64'),
  headers
);

console.log(token);
