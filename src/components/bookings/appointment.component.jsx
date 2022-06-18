import React from 'react';
import Modal from 'react-responsive-modal';
import styled from 'styled-components';

const StyledMakeAppointment = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: auto;
  height: 7rem;
  padding: 1rem;
  margin: 2rem 10rem 0 10rem;
  background: transparent;

`;

const MakeAppointmentButton = styled.button`

  margin: 0 5rem;
  padding: 1rem 3rem;
  color: #fff;
  background: linear-gradient(to right, #9495ea, #6c6de4);
  border: none;
  border-radius:15rem;
  box-shadow: 0px 4px 20px #e3e4f7;
  letter-spacing: 0.09rem;
  cursor: pointer;
  outline: none;
  position: relative;
  z-index: 10;
  &:active {
    border: inset 1px #7471d5;
  }
  &.profileContainer {
    display: flex;
    margin: 0 15rem;
    &.profilePic {
      width: 3rem;
      height: 3rem;
      margin-right: 0.5rem;
      border-radius: 2rem;
      background: #f6c5e6;
      box-shadow: 0px 4px 20px #e3e4f7;
      display: flex;
      justify-content: center;
      align-items: center;
      &img {
        width: 3rem;
        height: 3rem;
        border-radius: 2rem;
      }
    }
    select {
      border: none;
      padding: 1rem 0rem;
      font-weight: bold;
      text-indent: 0.8rem;
      &:focus {
        outline: none;
      }
    }
  }
`;

const ModalWindow = styled.div`
  position: absolute;
  width: 40vw;
  top: 5vh;
  left: 30vw;
  padding: 3rem 6rem;
  background: linear-gradient(
    50deg,
    rgba(255, 255, 255, 0.11) 0%,
    rgba(255, 255, 255, 0.06) 84%
  );
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.2);
  display: flex;
  flex-direction: column;
  text-align: left;
  z-index: 50;
  box-shadow: 0px 1.5px 4px rgba(0, 0, 0, 0.25);
  p {
    margin: 1rem 0;
    color: #6c6de4;
  }
  label {
    padding: 2rem 0;
  }
  select {
    display: block;
    padding: 0.5rem 0 0.5rem 0.5rem;
    margin-bottom: 1rem;
    border-radius: 0.5rem;
    font-size: 0.9rem;
    &:focus {
      outline: none;
    }
  }
`;

const BookAppointmentButton = styled.button`
  margin-top: 1rem;
  border-radius: 1rem;
  padding: 0.5rem 1rem;
  background: linear-gradient(to right, #9495ea, #6c6de4);
  border: none;
  color: #fefefe;
  cursor: pointer;
`;

const Appointment = ({
  open,
  onCloseModal,
  onOpenModal,
  bookAppointment,
  handleChangeFlorist,
  handleChangeDate,
  handleChangeTime,
  handleChangeMessage,
  greeting,
}) => {
  return (
    <StyledMakeAppointment>
      <MakeAppointmentButton onClick={onOpenModal}>
        Make an appointment
      </MakeAppointmentButton>
      {greeting === false && (
        <Modal open={open} onClose={onCloseModal} center>
          <ModalWindow>
            <h5 style={{textAlign: "center"}}>Book a florist for your special event</h5>
            <p>Select a Florist</p>
            <select id=" florist" onChange={handleChangeFlorist}>
              <option>Select a Florist</option>
              <option defaultValue>Chandra Tanuwijaya</option>
            </select>
            <p>Select a date</p>
            <select id=" appDate" onChange={handleChangeDate}>
              <option>Select a date</option>
              <option>6/28/2022</option>
              <option>6/29/2022</option>
              <option>6/30/2022</option>
              <option>7/1/2022</option>
              <option>7/2/2022</option>
              <option>7/3/2022</option>
              <option>7/4/2022</option>
              <option>7/5/2022</option>
              <option>7/6/2022</option>
            </select>

            <p>Select a time</p>
            <select id="appTime" onChange={handleChangeTime}>
              <option>Select a time</option>
              <option>8:30am</option>
              <option>9:30am</option>
            </select>

            <textarea
              style={{ borderRadius: '5px', padding: '5px' }}
              name="message"
              placeholder="Share details about your event here."
              onChange={handleChangeMessage}
              rows="5"
            />

            <BookAppointmentButton onClick={bookAppointment}>
              Book Appointment
            </BookAppointmentButton>
          </ModalWindow>
        </Modal>
      )}
      {bookAppointment === true && (
        <div>
          <h1>Thank You</h1>
          <p>Your apointment is set</p>
        </div>
      )}

      <div className="profileContainer">
        <div className="profilePic">
          {/* <img src={Me} alt="profile icon" /> */}
        </div>
      </div>
    </StyledMakeAppointment>
  );
};

export default Appointment;
