import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'; 

import {setLocation} from '../actions/setLocation';

// google-maps-react library stuff
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import googleApi from '../config/config.js'


class Maps extends Component {

  renderMarkers() {
    
    return this.props.gameData.map(game => {
      const loc = JSON.parse(game.coordinates)  
      return (
        <Marker 
          title={'placeholder'}
          name={'placeholder'}
          key={game.id}
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
          height: '40%'
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
    location: state.location,
    gameData: state.gameData
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