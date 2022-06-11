import React from "react"
import GoogleMaps from "./google-maps.component"

const GoogleMapsContainer = () => {
  return (
    <section className="search">
      <GoogleMaps />
      <div className="searchCard">
        <header>
          <span>Chandra Tanuwijaya</span>
        </header>
      </div>
    </section>
  );
};

export default GoogleMapsContainer