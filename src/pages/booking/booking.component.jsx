import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getBooking } from "../../redux/booking/booking.actions";
import {
  StyledBooking,
  BookingContainer,
  BookingImgContainer,
  BookingDetailsContainer,
  BookingDetailsTitle,
  BookingDetailsCity,
  BookingDetailsAddress,
  BookingDetailsDescription,
  BookingDetailsMapLocator,
} from "./booking.styles";
import { MapWithAMarker } from "./map";

const BookingPage = ({ booking, ...props }) => {
  useEffect(() => {
    getBooking(props.match.params.id);
    if (!booking) {
      return () => {
        displayBookingDetails();
      };
    }
  });

  function displayBookingDetails() {
    const { booking } = this.props;
    if (!booking) {
      return <h1>Loding...</h1>;
    }

    return (
      <StyledBooking>
        <BookingContainer>
          <BookingImgContainer>
            <img src={booking.image} alt="not found" />
          </BookingImgContainer>

          <BookingDetailsContainer>
            <BookingDetailsTitle>{booking.title}</BookingDetailsTitle>
            <BookingDetailsCity>{booking.city}</BookingDetailsCity>
            <BookingDetailsAddress>{booking.address}</BookingDetailsAddress>
            <BookingDetailsDescription>
              {booking.description}
            </BookingDetailsDescription>
          </BookingDetailsContainer>
          <BookingDetailsMapLocator>
            <MapWithAMarker
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAOmEmG_JnHzjMFtAIg_4sB7k3tgWHHmlg&v=3.exp&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `400px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
          </BookingDetailsMapLocator>
        </BookingContainer>
      </StyledBooking>
    );
  }
  return displayBookingDetails();
};
const mapStateToProps = ({ bookingReducer }) => ({
  rental: bookingReducer.booking,
});

export default connect(mapStateToProps, { getBooking })(BookingPage);