import styled from "styled-components";
import CustomButton from "../custom-button/custom-button.component";

export const CartDropdownContainer = styled.div`
  position: absolute;
<<<<<<< HEAD
  width: 360px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px 0 0 0;
  border: 1px solid indigo;
  background-color: white;
  border-radius: 45px 0px 45px 0px;
=======
  width: 440px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid rgba(49,46,129,0.3);
  background-color: linear-gradient(135deg, rgba(255,255,255,0.11) 0%, rgba(255,255,255,0.06) 84%);\
  backdrop-filter: blur(12px);
>>>>>>> 0fb97c7e1f945202459c4ffd39d15fc1b94d2665
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
<<<<<<< HEAD
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
=======
  margin-top: auto;
  font-size: 12px;
  letter-spacing: -1px;
  background: #312e81;
>>>>>>> 0fb97c7e1f945202459c4ffd39d15fc1b94d2665
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
