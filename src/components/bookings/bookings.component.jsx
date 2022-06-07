import { LinkCard, Card, CardImage, CardInfo, CardLocation, CardTitle, CardPrice } from "./bookings.styles"

const BookingsComponent = ({ title, city, address, img, price, id }) => (
  <LinkCard to={`/booking/${id}`}>
    <Card>
      <CardImage>
        <img src={img} alt="not load" />
      </CardImage>
      <CardInfo>
        <CardLocation>
          <span>{address}</span>-<span>{city}</span>
        </CardLocation>
        <CardTitle>{title}</CardTitle>

        <CardPrice>${price} per Hour</CardPrice>
      </CardInfo>
    </Card>
  </LinkCard>
);

export default BookingsComponent