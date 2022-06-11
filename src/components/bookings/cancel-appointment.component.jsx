import React from 'react';

const CancelAppointment = ({
  florist,
  specality,
  appDate,
  canAppointmentList,
  clearApp,
}) => {
  return (
    <div className="canceled">
      {canAppointmentList[0].florist === '' ||
      canAppointmentList[0].florist === undefined ||
      canAppointmentList.length === 0 ? (
        <div className="canceledContainer">
          <div className="canceledHeader">
            <h3>CancelAppointment visits</h3>
            <span className="dots">...</span>
          </div>
          <p>You have no canceled visits</p>
          <p></p>
        </div>
      ) : (
        <div className="canceledContainer">
          <div className="canceledHeader">
            <h3>CancelAppointment visits</h3>
            <span onClick={clearApp} className="dots">
              ...
            </span>
          </div>
          <p>{`You have  ${canAppointmentList.length} canceled visit(s):`}</p>
          {canAppointmentList.map((val, index) => (
            <div className="canceledDetails" key={index}>
              <p>{`${canAppointmentList[index].florist}`}</p>
              <div className="canceledDate">
                <p>{canAppointmentList[index].appDate}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CancelAppointment;
