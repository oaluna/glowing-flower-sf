import React from 'react';

const Alert = ({ today, clearAlert }) => {
  return (
    <div className="alert">
      {today[0].florist === '' || today[0] === undefined ? (
        <div className="alertContainer">
          <div className="alertHeader">
            <h3>Alert</h3>
            <p className="dots">...</p>
          </div>
          <p>You have no visits today:</p>
          <ul>
            {/* <li>Dr Anthony Wagner <span>Dermatologist</span></li>
                <li>Dr Anthony Wagner <span>Dentist</span></li> */}
          </ul>
        </div>
      ) : (
        <div className="alertContainer">
          <div className="alertHeader">
            <h3>Alert</h3>
            <p onClick={clearAlert} className="dots">
              ...
            </p>
          </div>
          <p>{`You have ${today.length} visit(s) today:`}</p>
          {today.map((val, index) => {
            return (
              <ul key={index}>
                <li>
                  {today[index].florist}
                  <span>{today[index].specialty}</span>
                </li>
              </ul>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Alert;
