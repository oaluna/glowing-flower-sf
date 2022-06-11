import React from 'react';

const AppointmentCards = ({
  florist,
  specialty,
  appDate,
  appTime,
  cancelAppointment,
}) => {
  return (
    <main className="cards">
      <div className="container">
        <header className="cardsHeader">
          {/* <img className="profilePic" src={Florist} alt="medical logo" /> */}
          <div className="profileTitle">
            <p>{florist}</p>
            <p>Dermatologist</p>
          </div>
        </header>
        <section className="profileDate">
          <div className="profileleft">
            {/* <img src={CalendarSmall} alt="calendar icon" /> */}
            <span>{appDate}</span>
          </div>
          <div className="profileRight">
            {/* <img src={Clock} alt="time icon" /> */}
            <span>{appTime}</span>
          </div>
        </section>

        <section className="profileButtons">
          <button onClick={cancelAppointment} className=" button cancel">
            <p></p>
          </button>
        </section>
      </div>
    </main>
  );
};

export default AppointmentCards;
