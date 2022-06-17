import React from 'react';
import styled from 'styled-components';

const StyledAlert = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
const AlertContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-evenly;
`;
const AlertHeader = styled.div``;
const Dots = styled.p`
font-size: 12px
margin: 0 auto;
`;

const Alert = ({ today, clearAlert, currentUser }) => {
  return (
    <StyledAlert>
      {currentUser &&
        (today[0].florist === '' || today[0] === undefined ? (
          <AlertContainer>
            <AlertHeader>
              <h3>Alert</h3>
              <Dots>You have no events today...</Dots>
              <ul>
                <li>Chandra Tanuwijaya - your Florist</li>
              </ul>
            </AlertHeader>
          </AlertContainer>
        ) : (
          <AlertContainer>
            <AlertHeader>
              <h3>Alert</h3>
              <Dots onClick={clearAlert}>
                  You have no events today
              </Dots>
            </AlertHeader>
            <p>{`You have ${today.length} event(s) today:`}</p>
            {today.map((val, index) => {
              return (
                <ul key={index}>
                  <li>
                    {today[index].florist}
                    <span>{today[index].specialty}</span>
                  </li>
                  <li>{val}</li>
                </ul>
              );
            })}
          </AlertContainer>
        ))}
      <h2
        style={{
          position: 'relative',
          marginTop: '35vh',
          marginBottom: '0vh',
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        You must log in as an administrator first.
      </h2>
    </StyledAlert>
  );
};

export default Alert;
