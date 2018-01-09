import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'; 

import {setLocation} from '../actions/setLocation';

// google-maps-react library stuff
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import googleApi from '../config/config.js'


class Maps extends Component {

  renderMarkers() {
    // sampleData will be replaced by gameData
    const sampleData = [
      {lat: 33.969906100574846, lng: -118.40377807617188},
      {lat: 33.95800896591401, lng: -118.38420867919922},
      {lat: 33.96840236615572, lng: -118.37493896484375}, 
      {lat: 33.98121439916207, lng: -118.36721420288086}
    ]
    
    return sampleData.map(loc => {
      console.log(loc)
      return (
        <Marker 
          title={'placeholder'}
          name={'placeholder'}
          key={loc.lat}
          position={loc}
        />
      )
    })
  }

  render() {
    return (
      <Map         
        // upon clicking the map, store the lat/lng coordinates as 'location'
        onClick={(mapProps, map, clickEvent) => {
          let lat = clickEvent.latLng.lat()
          let lng = clickEvent.latLng.lng()

          this.props.setLocation({lat: lat, lng: lng})
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
      {
        // gets rid of the initial marker
        !this.props.location ? 
        null
        :
        <Marker 
          title={'first marker'}
          name={'first marker'}
          position={this.props.location}
        />
      }
      {this.renderMarkers()}        
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