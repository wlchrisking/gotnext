import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'; 
import {fetchGameData} from '../actions/fetchGameData.js'

class OptionSearch extends Component {
  render() {
    return(
      <div>
        --- OptionSearch Component Here ---
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    
  }
};

export default connect(mapStateToProps)(OptionSearch);