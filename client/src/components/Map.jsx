import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'; 

import {setLocation} from '../actions/setLocation';

// google-maps-react library stuff
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
// import googleApi from '../config/config.js'
// const googleApiKey = process.env.GOOGLEAPIKEY;

class Maps extends Component {

  renderMarkers() {
    if (this.props.option !== 'search' && this.props.games) {
      return this.renderMarkersHelper(this.props.games);
    } else {
      return this.renderMarkersHelper(this.props.gameData);
    }
  }
  
  renderMarkersHelper(allOrJustUserGames){
    return allOrJustUserGames.map(game => {
      const loc = JSON.parse(game.coordinates);
      return (
        <Marker 
        title={game.address + '\n' + game.sport}
        name={game.address}
        key={game.id}
        position={loc}
          icon={game.UserId === this.findUserId() ?
            'http://maps.google.com/mapfiles/ms/icons/green-dot.png' : 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'}
            />
          )
        })
  }
  
  findUserId() {
    var userId;
    if (this.props.userList) {
      for (var i = 0; i< this.props.userList.length; i++) {
        if (this.props.userList[i].username === this.props.user) {
          userId = this.props.userList[i].id;
          return userId;
        }
      }
    }
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
    gameData: state.gameData,
    games: state.games,
    user: state.user,
    option: state.option,
    userList: state.userList
  }
};

const matchDispatchToProps = dispatch => {
  return bindActionCreators({
    setLocation:setLocation}, 
    dispatch);
};

const WrappedContainer = GoogleApiWrapper({
  // apiKey: (googleApi.key)
  apiKey: process.env.GOOGLEMAPAPI
})(Maps);

export default connect(mapStateToProps, matchDispatchToProps)(WrappedContainer)