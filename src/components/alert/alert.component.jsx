import React from 'react';

const Alert = ({ today, clearAlert, currentUser }) => {
  return (
    <div className="alert">
      {currentUser && (
        today[0].florist === '' || today[0] === undefined ? (
          <div className="alertContainer">
            <div className="alertHeader">
              <h3>Alert</h3>
              <p className="dots">...</p>
            </div>
            <p>You have no events today:</p>
            <ul>
          <li>Chandra Tanuwijaya - your Florist</li>
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
            <p>{`You have ${today.length} event(s) today:`}</p>
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
        )
    )}
      <h2 style={{position: "relative", marginTop: "35vh", marginBottom: "0vh", width: "100%", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center"}}>You must log in as an administrator first.</h2>
    </div>
  );
};

export default Alert;
