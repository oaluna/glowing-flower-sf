import React from 'react';
//import {} from 'feather-icons/dist/icons/';
import styled from 'styled-components';

const ApptCards = styled.div`
  width: 50vw;
  height: 4rem;

  background: linear-gradient(
    124deg,
    rgba(255, 255, 255, 0.11) 0%,
    rgba(255, 255, 255, 0.06) 84%
  );
  border-radius: 5px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  display: flex;
  flex-direction: row;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  
`;

const CardsHeader = styled.header`


`;
const ProfileDate = styled.div`
  padding: 5px 15% 5px 0px;
text-align: center;
  `;

const ProfileButton = styled.button`
  font-weight: normal;
  padding: 5px 25px;
  margin: 0 45px;
  border-radius: 12px;
  background-color: indigo;
  color: white;
  &::hover &::focus {
    background-color: cobalt;
    box-shadow: 0.5px 1.5px rgba(255, 255, 255, 0.2);
    outline: none;
    transition-duration: 300ms;

  }
`;
const AppointmentCards = ({
  florist,
  specialty,
  appDate,
  appTime,
  cancelAppointment,
}) => {
  return (
    <main className="cards">
      <ApptCards>
        <CardsHeader>
          {/* <img className="profilePic" src={Florist} alt="medical logo" /> */}
          <div className="profileTitle">
            <h5>{florist}</h5>
            <p>Florist</p>
          </div>
        </CardsHeader>
        <ProfileDate>
          <div className="profileleft">
            {/* <img src={CalendarSmall} alt="calendar icon" /> */}
            <span>{appDate}</span>
          </div>
          <div className="profileRight">
            {/* <img src={Clock} alt="time icon" /> */}
            <span>{appTime}</span>
          </div>
        </ProfileDate>

        <section className="profileButtons">
          <ProfileButton onClick={cancelAppointment} className=" button cancel">
            <p>Cancel Appointment</p>
          </ProfileButton>
        </section>
      </ApptCards>
    </main>
  );
};

export default AppointmentCards;
