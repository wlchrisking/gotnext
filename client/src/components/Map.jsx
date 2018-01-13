import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'; 

import {setLocation} from '../actions/setLocation';

// google-maps-react library stuff
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
// import googleApi from '../config/config.js'


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
      <div className="map-container" >
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
          marginTop: '40px',
          width: '100%',
          height: '430px',
        }} 

        // hack reactor as initial location
        initialCenter={{
          lat: 33.976215,
          lng: -118.390891          
        }}
      >        
      {
        // gets rid of the initial marker (bug)
        !this.props.location 
        ? 
        null
        :
        // put a marker down on click
        <Marker 
          title={'first marker'}
          name={'first marker'}
          position={this.props.location}
        />
      }
      {
        // render all game markers on map 
        this.renderMarkers()
      }        
      </Map>
      </div>
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
  // apiKey: (googleApi.key)
  apiKey: 'AIzaSyCunMfNeXagtSF-HZu7LT9iIyUg0Ad6ZOU'
})(Maps);

export default connect(mapStateToProps, matchDispatchToProps)(WrappedContainer)