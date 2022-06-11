import React from 'react';
import GoogleMaps from 'components/bookings/google-maps.component';

const SearchFlorist = () => {
  return (
    <section className="searchFlorist">
      <GoogleMaps />
      <div className="searchCard">
        <header>
          <span className="googleLetter">A</span>
          <p className="googleFlorist"> Dr. Stephanie Satz</p>
          <span className="googleLetter">B</span>
          <p className="googleFlorist"> Dr. Michael Winger</p>
          <span className="googleLetter">C</span>
          <p className="googleFlorist">Dr. Zaher Amjad</p>
          <span className="googleLetter">D</span>
          <p className="googleFlorist">Dr. Charles McFarlane</p>
        </header>
      </div>
    </section>
  );
};

export default SearchFlorist;
