import styled from "styled-components";
import CustomButton from "../custom-button/custom-button.component";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 440px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid rgba(49,46,129,0.3);
  background-color: linear-gradient(135deg, rgba(255,255,255,0.11) 0%, rgba(255,255,255,0.06) 84%);\
  backdrop-filter: blur(12px);
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
  margin-top: auto;
  font-size: 12px;
  letter-spacing: -1px;
  background: #312e81;
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
