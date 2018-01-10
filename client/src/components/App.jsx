import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';

import {fetchGameData} from '../actions/fetchGameData';
import {setEditState} from '../actions/setEditState';

import axios from 'axios';

import Nav from './Nav.jsx';
import Main from './Main.jsx';

class App extends Component {

  // on load, axios request to render games on map
  componentDidMount() {
    this.props.setEditState(false);
    axios.get('/api/map/fetch')
      .then(response => {
        console.log('fetching data on componentDidMount')
        this.props.fetchGameData(response.data)
      })
      .catch(err => {
        console.log('error fetching data on componentDidMount', err)
      })
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
  return bindActionCreators({fetchGameData:fetchGameData, setEditState:setEditState}, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(App);