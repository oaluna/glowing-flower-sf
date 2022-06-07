import {
  StyledSearch,
  StyledSearchButton,
  StyledSearchIcon,
} from "./bookings-search.styles";

const BookingsSearchComponent = (props) => (
  <StyledSearch>
    <input
      className="search__input"
      type="text"
      name="booking"
      placeholder="City ex. San Francisco"
      autoComplete="off"
    />
    <StyledSearchButton>
      <StyledSearchIcon />
    </StyledSearchButton>
  </StyledSearch>
);

export default BookingsSearchComponent;
