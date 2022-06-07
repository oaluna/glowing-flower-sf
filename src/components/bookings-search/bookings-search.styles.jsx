import styled from "styled-components"

export const StyledSearch = styled.form`
  flex: 0 0 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  &__input {
    font-size: 1.7em;
    font-weight: bold;
    border: none;
    outline: none;
    border-radius: 100px;
    padding: 0.7rem 2rem;
    width: 70%;
    transition: all 0.2s ease-in-out;
    background: rgba(255, 255, 255, 0.7);
    margin-right: -4rem;
    &:focus {
      width: 75%;
    }
  }
`;
export const StyledSearchButton = styled.button`
  border: none;
  outline: none;
  background: transparent;
`;
export const StyledSearchIcon = styled.i`
  height: 1.5em;
  width: 1.5em;
  background: url("../../images/fast-icon.svg");
  background-size: cover;
  background-repeat: no-repeat;
`;

