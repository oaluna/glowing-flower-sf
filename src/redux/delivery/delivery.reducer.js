import deliveryTypes from "./delivery.types"

const initialState = {
created: false,
dasherConfirmed: false,
dasherArrivedAtPickup: false,
deliveryPickedUp: false,
dasherArrivedAtDropoff: false,
orderDelivered: false,
orderCancelled: false
}

const deliveryReducer = (state=initialState, action) => {
  switch (action.type) {
    case deliveryTypes.FETCH_DELIVERIES_START:
      return {
        ...state,
        isFetching: false
      }
    case deliveryTypes.FETCH_DELIVERIES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.payload
      }
    case deliveryTypes.FETCH_DELIVERIES_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      }
    default:
      return state
  }
}

export default deliveryReducer