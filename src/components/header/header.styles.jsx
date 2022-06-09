import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const HeaderContainer = styled.div`
  height: 75px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 10px;

  @media screen and (max-width: 800px) {
    height: 70px;
    padding: auto;
    margin-left: 60px;
    justify-content: space-evenly;
  }
`

export const HeaderTitle = styled.h2`
  display: flex;
  height: 100%;
  width: 100%;
  padding: auto;
  margin: auto;
  color: white;
  text-shadow: 1px 0px 10px #000;
  font-weight: 600;
  font-size: 18px;
  &:hover {
    color: goldenrod;
  }
  @media screen and (max-width: 800px) {
    display: none;
  }
`

export const LogoContainer = styled(Link)`
  height: 50%;
  width: 100px;
  margin: auto;

  @media screen and (max-width: 800px) {
    display: none;
  }
`
export const LogoText = styled.h2`
  font-family: "Rozha One", sans-serif;
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  z-index: 50;
  &:hover {
    color: goldenrod;
  }

  @media screen and (max-width: 800px) {
    width: 80%;
  }
`

export const OptionLink = styled(Link)`
  padding: 25px;
  height: 100%;
  font-size: 24px;
  color: white;
  text-shadow: 1px 0px 10px #000;
  font-weight: bold;
  cursor: pointer;
  z-index: 75;
  &:hover {
    color: goldenrod;
  }
`
