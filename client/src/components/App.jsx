import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';

import {fetchGameData} from '../actions/fetchGameData';

import Nav from './Nav.jsx';
import Main from './Main.jsx';

class App extends Component {

  // on load, axios request to render games on map
  componentDidMount() {
    this.props.fetchGameData() 
  }



  render() {
    if (!this.props.gameData) {
      return null
    }

    return(
      <div>
        <h1>.got(Next)</h1>  
        <hr/>
        <Nav />
        <hr/>
        <Main />
      </div>
    )
  }
};

const mapStateToProps = state => {
  return {
    gameData: state.gameData
  }
};

const matchDispatchToProps = dispatch => {
  return bindActionCreators({fetchGameData:fetchGameData}, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(App);