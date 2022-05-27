import styled from 'styled-components';

//import { ReactComponent as ShoppingIconSVG } from '../../assets/shopping-bag.svg';

export const CartContainer = styled.div`
  width: 64px;
  height: 64px;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-evenly;
  float: right;
  cursor: pointer;
`;

export const ShoppingIcon = styled.img`
  width: 48px;
  height: 48px;
  background: none;
  margin: 40px;
`;

export const ItemCountContainer = styled.span`
  position: absolute;
  font-size: 14px;
  background: fuchsia;
  border-radius: 50%;
  width: 20px;
  text-align: center;
  font-weight: bold;

  bottom: 50px;
`;
