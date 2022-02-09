import React from 'react'
import "./map.css";
import GoogleMapReact from "google-map-react";

const Map = () => {
  const coordinates = { lat: 0, lng: 0}
  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyC2_CSOgKzi7UHZgPeu9FrayLoCW18SEO0' }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={""}
        onChildClick={""}
      ></GoogleMapReact>
    </div>
  );
}

export default Map