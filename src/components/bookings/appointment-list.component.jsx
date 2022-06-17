import React from 'react';
import ApptCards from 'components/cards/AppointmentCards';

const AppointmentList = ({ appointments, cancelAppointment }) => {
  return (
    <div className="AppointmentList">
      {appointments.map((val, index) => {
        return (
          <>
            {val !== undefined && (
              <ApptCards
                key={index}
                florist={appointments[index].florist}
                specialty={appointments[index].specialty}
                address1={appointments[index].address1}
                appDate={appointments[index].appDate}
                appTime={appointments[index].appTime}
                cancelAppointment={cancelAppointment.bind(this, index)}
              />
            )}
          </>
        );
      })}
    </div>
  );
};

export default AppointmentList;
