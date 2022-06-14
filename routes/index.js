const paymentApi = require('./payment');
const deliveryApi = require('./deliveries')

const configureRoutes = app => {
  paymentApi(app);
  deliveryApi(app);
};

module.exports = configureRoutes;