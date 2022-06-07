import styled from "styled-components";
import CustomButton from "../custom-button/custom-button.component";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 360px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px 0 0 0;
  border: 1px solid indigo;
  background-color: white;
  border-radius: 45px 0px 45px 0px;
  top: 90px;
  right: 360px;
  z-index: 5;
  @media only screen and (max-width: 700px) {
    top: 300px;
    left: 0px;
    width: 85%;
  }
`;

export const CartDropdownButton = styled(CustomButton)`
  width: 100%;
  height: auto;
  margin-left: 0;
  line-height: 5rem;
  display:flex;
  flex-direction:column;
  align-self: stretch;
  border-radius: 0 0 45px 0;
  border: none;
  bottom: 0px;
  background-color: indigo;
  padding: 0 25%;
  &:hover {
    border:1px solid fuchsia;
    a: lightpink
  }
`;

export const EmptyMessageContainer = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const CartItemsContainer = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;
