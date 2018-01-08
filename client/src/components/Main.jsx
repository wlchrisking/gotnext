import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'; 

import Map from './Map.jsx';
import Option from './Option.jsx';

class Main extends Component {
  
  render() {
    return(
      <div>
        Main
        <Map />
        <Option />

      </div>
    )
  }
};

const mapStateToProps = state => {
  return {
    
  }
};

const matchDispatchToProps = dispatch => {
  return bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(Main);