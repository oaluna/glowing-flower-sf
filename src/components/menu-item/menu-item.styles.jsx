import styled from 'styled-components'

export const MenuItemContainer = styled.div`
  height: 380px;
 max-width: 30%;
  overflow: hidden;
  flex: 1 1 auto;
  display: flex;

  align-items: center;
  justify-content: center;
  border: none;
  margin: 0 7.5px 15px;
  overflow: hidden;
  border-radius: 20% 0; 

  &:hover {
    cursor: pointer;
    opacity: 1;
    & .background-image .content{
      transform: scale(1.1);
      transition: transform 2.2s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }
  &:first-child {
    margin-right: 7.5px;
  }
  &:last-child {
    margin-left: 7.5px;
  }

  @media screen and (max-width: 800px) {
    height:380px;
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
  &:first-child {
    margin-right: 7.5px;
  }
  &:last-child {
    margin-left: 7.5px;
  }
  }
`

export const BackgroundImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  backdrop-filter: multiply;
opacity: 0.75;
  border: 1px solid lightgrey;
  &:hover {
   opacity: 1;
    transition: 0.3s ease-in-out;
  }
`


export const ContentContainer = styled.div`
  height: 90px;
  width: 300px;
  border-radius: 35px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(117, 117, 244, 1);
  border: 1px solid rgba(127, 17, 224, 0.3);
  
  position: absolute;
  &:hover {
    opacity: 1;
    transition: 0.3s ease-in-out;

  }

  @media screen and (max-width: 800px) {
    opacity: 1;
  }
`

export const ContentTitle = styled.span`
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 22px;
  color: white;
  &:hover {
    color: navy;
    transition: 0.3s ease-in-out;
  }
`

export const ContentSubtitle = styled.span`

  font-weight: lighter;
  font-size: 16px;
  color: white;
  &:hover {
    color: navy;
    transition: 0.3s ease-in-out;
  }
`
