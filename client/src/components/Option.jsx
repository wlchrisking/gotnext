import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'; 
import {fetchGameData} from '../actions/fetchGameData.js'

import OptionSearch from './OptionSearch.jsx'

class Option extends Component {
  render() {
    return(
      <div>
        Option
        <OptionSearch />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    
  }
};

export default connect(mapStateToProps)(Option);