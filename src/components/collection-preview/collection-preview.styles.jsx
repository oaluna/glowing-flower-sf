import styled from 'styled-components';

export const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  &:hover {
    cursor: pointer;
    & .background-image {
      transform: scale(1.1);
      transition: transform 2.2s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }
    & .content {
      transition: transform 2.2s;
      opacity: 1;
    }
  }
  &:first-child {
    margin-right: 7.5px;
  }
  &:last-child {
    margin-left: 7.5px;
  }

  @media screen and (max-width: 800px) {
    align-items: center;
    &:hover {
    cursor: pointer;
    & .background-image {
      transform: scale(1.1);
      transition: transform 2.2s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }
    & .content {
      transition: transform 2.2s;
      opacity: 1;
    }
  }
  &:first-child {
    margin-right: 7.5px;
  }
  &:last-child {
    margin-left: 7.5px;
  }
  }
  }
`;

export const TitleContainer = styled.h1`
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 25px;
  cursor: pointer;
  color: white;

  &:hover {
    color: goldenrod;
  }
`;

export const PreviewContainer = styled.div`
  display: flex;
  justify-content: space-between;


  @media screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
  }
`;
