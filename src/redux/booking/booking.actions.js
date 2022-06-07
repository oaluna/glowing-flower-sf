import axios from "axios"

import BookingTypes from "./booking.types";

export const getbookings = () => async (dispatch) => {
  const res = await axios.get("/bookings");

  dispatch({ type: BookingTypes.GET_BOOKINGS, payload: res.data });
};

export const getBooking = (id) => async (dispatch) => {
  const res = await axios.get(`/bookings/:${id}`);

  dispatch({ type: BookingTypes.GET_BOOKING, payload: res.data });
};
