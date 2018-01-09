import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'; 

import {setLocation} from '../actions/setLocation';

// google-maps-react library stuff
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import googleApi from '../config/config.js'


class Maps extends Component {

  render() {
    return (
      <Map 
        onClick={(mapProps, map, clickEvent) => {
          // upon clicking the map, store the lat/lng coordinates as 'location'
          console.log({lat: clickEvent.latLng.lat(), lng: clickEvent.latLng.lng()})
          this.props.setLocation({'lat': clickEvent.latLng.lat(), 'lng': clickEvent.latLng.lng()})
        }}
        google={this.props.google} 
        zoom={14}
        style={{
          width: '40%',
          height: '80%'
        }} 
        // hack reactor as initial location
        initialCenter={{
          lat: 33.976215,
          lng: -118.390891          
        }}
      >
      </Map>
    );
  }
}

const mapStateToProps = state => {
  return {
    location: state.location
  }
};

const matchDispatchToProps = dispatch => {
  return bindActionCreators({
    setLocation:setLocation}, 
    dispatch);
};

const WrappedContainer = GoogleApiWrapper({
  apiKey: (googleApi.key)
})(Maps);

export default connect(mapStateToProps, matchDispatchToProps)(WrappedContainer)