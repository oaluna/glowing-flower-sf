import React, { Component } from 'react'
import GoogleMapReact from "google-map-react";



const Chandra = () => {
  return (
    <div className="florists">
      <span>We are here</span>
    </div>
  );
};

class GoogleMaps extends Component {
  constructor({ props }) {
    super(props);
  }
  static defaultProps = {
    center: { lat: 37.785287, lng: -122.4127535 },
    zoom: 12,
  };

  render() {
    return (
      <div className="googleMaps">
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.GOOGLE_MAPS_API_KEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Chandra lat={37.785287} lng={-122.4127535} />
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMaps