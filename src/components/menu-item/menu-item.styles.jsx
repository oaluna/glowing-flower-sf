import styled from "styled-components";

export const MenuItemContainer = styled.div`
  height: 280px;
  max-width: 25%;
  overflow: hidden;
  flex: 1 1 auto;
  display: flex;
background: linear-gradient(135deg, #a1ffce, #faffd1);
  align-items: center;
  justify-content: center;
  border: 0px solid transparent;
  margin: 0vh 5vw;
  overflow: hidden;
  border-radius: 25% 0;
  box-shadow: 0px 1.5px 6px rgba(0, 0, 0, 0.3);
  transform: scale(1.2);
  &:hover {
    cursor: pointer;
    opacity: 1;
    box-shadow: 0px 1.5px 12px rgba(0, 0, 0, 0.45);
    & .background-image .content {
      transition: ease-in 2.2s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }
  }

  @media screen and (max-width: 800px) {
    height: 380px;
    min-width: 100%;
    overflow: hidden;
    flex: 1 1 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(127, 17, 224, 0.3);
    margin: 0 7.5px 15px;
    overflow: hidden;

    &:hover {
      cursor: pointer;
      opacity: 1;

      & .background-image {
        transform: scale(1.1);
        transition: transform 2.2s cubic-bezier(0.25, 0.45, 0.45, 0.95);
      }
      & .content {
        transition: transform 2.2s;
      }
    }
  }
`;

export const BackgroundImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  backdrop-filter: multiply;
  opacity: 0.75;
  border: 1px solid lightgrey;
  transform: scale(1.5);
  &:hover {
    opacity: 1;
    transition: 0.3s ease-in-out;
  }
`;

export const ContentContainer = styled.div`
  height: 90px;
  width: 300px;
  border-radius: 35px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #312e81;
  border: 1px solid rgba(127, 17, 224, 0.3);

  position: absolute;
  &:hover {
    opacity: 1;
    transition: 0.3s ease-in-out;
  }

  @media screen and (max-width: 800px) {
    opacity: 1;
  }
`;

export const ContentTitle = styled.span`
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 22px;
  color: white;
  &:hover {
    color: navy;
    transition: 0.3s ease-in-out;
  }
`;

export const ContentSubtitle = styled.span`
  font-weight: lighter;
  font-size: 16px;
  color: white;
  &:hover {
    color: navy;
    transition: 0.3s ease-in-out;
  }
`;
