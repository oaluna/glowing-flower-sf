import styled from "styled-components"
import { Link } from "react-router-dom"

export const LinkCard = styled(Link)`
  text-decoration: none;
  margin: 2em;
  transition: all 0.3s ease;
  box-shadow: 0 16px 38px -12px rgba(0, 0, 0, 0.56),
    0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
`;

export const Card = styled.div`
  width: 300px;
  display: flex;
  flex-flow: column;
  background-color: #fbab7e;
  background-image: linear-gradient(62deg, #fbab7e 0%, #f7ce68 100%);
`;
export const CardImage = styled.div`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;
export const CardInfo = styled.div`
  padding: 1rem 0;
  align-items: center;
  display: flex;
  flex-flow: column;
`;
export const CardLocation = styled.p`
  font-size: 1.2em;
  text-transform: uppercase;
  color: #000;
  margin-bottom: 0.3em;
`;
export const CardTitle = styled.h2`
  font-size: 2em;
  color: #fff;
  margin-bottom: 0.3em;
`;
export const CardPrice = styled.p`
  font-size: 1.5em;
  text-transform: uppercase;
  color: #000;
  font-weight: bold;
  margin-bottom: 1em;
`;