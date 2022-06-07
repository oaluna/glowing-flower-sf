import styled from "styled-components";

export const StyledBooking = styled.div`
  padding: 5em 5em;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
export const BookingContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  justify-content: space-between;
`;
export const BookingImgContainer = styled.div`
  img {
    width: 100%;
    object-fit: cover;
  }
`;
export const BookingDetailsContainer = styled.div`
  margin: 2em 0;
`;
export const BookingDetailsTitle = styled.h2`
  font-size: 2.5em;
`;
export const BookingDetailsCity = styled.p`
  display: flex;
  margin-top: 1.2em;
  list-style: none;
  padding: 0;
`;
export const BookingDetailsAddress = styled.p`
  margin-right: 1em;
  font-weight: bold;
  font-size: 1.5em;
`;
export const BookingDetailsDescription = styled.p`
  font-size: 1.5em;
  margin-top: 1.2em;
`;
export const BookingDetailsMapLocator = styled.div`
  height: 100%;
`;
