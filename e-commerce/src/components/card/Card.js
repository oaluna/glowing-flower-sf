import React from 'react';
import { css } from '@emotion/css';

const cardCSS = css`
  cursor: pointer;
  list-style: none;
  margin-bottom: 30px;
  padding: 15px;
  &:hover {
    box-shadow: 0px 1.5px 4px rgba(0, 0, 0, 0.23);
  }
`;

function Card({ children, details }) {
  return (
    <div className={cardCSS}>
      {children}
      {details}
    </div>
  );
}

export default Card;
