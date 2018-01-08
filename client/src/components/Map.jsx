import React, {Component} from 'react';
import {connect} from 'react-redux';
import googleApi from '../config/config.js'

import {
  withGoogleMap, 
  GoogleMap, 
  InfoWindow, 
  Marker,
  withScriptjs
} from 'react-google-maps';
import MyMapComponent from'./MyMapComponent';

import {bindActionCreators} from 'redux'; 
import {fetchGameData} from '../actions/fetchGameData.js'

class Map extends Component {
  render() {
    return(
      <div>
        Map
        <MyMapComponent
          isMarkerShown
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${googleApi.key}`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%`, width: '50%' }} />}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    
  }
};

export default connect(mapStateToProps)(Map);
// export default Map;



