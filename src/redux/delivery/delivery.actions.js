import deliveryTypes from "./delivery.types"

import client from "@doordash/client"

export const fetchDeliveriesStart = () => ({
  type: deliveryTypes.FETCH_DELIVERIES_START
})

export const fetchDevliveriesSuccess = (data) => ({
  type: deliveryTypes.FETCH_DEVLIVERIES_SUCCESS,
  payload: client

});

export const fetchDeliveriesFilure = errorMessage => ({
  type: deliveryTypes.FETCH_DELIVERIES_FAILURE,
  payload: errorMessage
});