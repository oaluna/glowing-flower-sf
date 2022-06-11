import React from "react"
import AppointmentList from 'components/bookings/appointment-list.component';

const CurrentAppointments = ({ appointments, cancelAppointment }) => {
  return (
    <main className="currentAppointments">
      <div className="container">
        <header className="header">
          <h3>Appointments</h3>
          <p className="dots">...</p>
        </header>

        <section className="buttonContainer">
          <div className="sectionLeft">
            <button className="button1">Upcoming</button>
            <button className="button2">Past</button>
          </div>
          <div className="sectionRight">
            <span>
              Sort By: <strong>Date</strong>
            </span>
            <select>
              <option selected>Today</option>
            </select>
          </div>
        </section>
        <section className="cardsContainer">
          <AppointmentList
            appointments={appointments}
            cancelAppointment={cancelAppointment}
          />
        </section>
      </div>
    </main>
  );
};

export default CurrentAppointments;
