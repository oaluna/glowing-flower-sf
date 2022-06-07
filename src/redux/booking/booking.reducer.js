import BookingTypes from "./booking.types";

const initialState = {
  bookings: [],
  booking: {},
  loading: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case BookingTypes.GET_BOOKINGS:
      return {
        ...state,
        bookings: action.payload,
        loading: false,
        booking: {},
      };
    case BookingTypes.GET_BOOKING:
      return { ...state, booking: action.payload, loading: false };
    default:
      return state;
  }
};
