import React from 'react';
import GoogleMaps from 'components/bookings/google-maps.component';

const SearchFlorist = () => {
  return (
    <section className="searchFlorist">
      <GoogleMaps />
      <div className="searchCard">
        <header>
          <span className="googleLetter">Florist:{" "}</span>
          <p className="googleFlorist">Chandra Tanuwijaya</p>

        </header>
      </div>
    </section>
  );
};

export default SearchFlorist;
