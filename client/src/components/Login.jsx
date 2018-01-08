import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'; 
import {fetchGameData} from '../actions/fetchGameData.js'

class Login extends Component {
  render() {
    return(
      <div>
        --- Login Component Here ---
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    
  }
};

export default connect(mapStateToProps)(Login);