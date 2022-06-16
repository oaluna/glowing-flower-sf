import React from "react"
import GoogleMaps from "./google-maps.component"
import styled from "styled-components"

const SearchCard = styled.div`
  width: 80vw;
  margin: auto 8vw;
  padding: auto;
  text-align: center;
`;

const GoogleMapsContainer = () => {
  return (
    <section className="search">
      <GoogleMaps />
      <SearchCard>
        <header>
          <span>Chandra Tanuwijaya</span>
        </header>
      </SearchCard>
    </section>
  );
};

export default GoogleMapsContainer