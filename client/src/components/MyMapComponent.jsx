import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  withGoogleMap, 
  GoogleMap, 
  InfoWindow, 
  Marker,
  withScriptjs
} from 'react-google-maps';

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
  </GoogleMap>
))

export default MyMapComponent;