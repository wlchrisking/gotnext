import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import { fetchGameData } from '../actions/fetchGameData';
import { setEditState } from '../actions/setEditState';
import { fetchUsers } from '../actions/fetchUsers';
import { setUser } from '../actions/setUser';

import axios from 'axios';

import Navi from './Navi.jsx';
import Main from './Main.jsx';

import {Grid, Row, Col, Jumbotron} from 'react-bootstrap';


class App extends Component {

  // on load, axios request to render games on map
  componentDidMount() {

    (!this.props.user && window.localStorage.username)
    ? this.props.setUser(window.localStorage.username)
    : null
    
    this.props.setEditState(false);

    // fetch list of all GAMES and put it in store as 'gameData
    axios.get('/api/map/fetch')
      .then(response => {
        console.log('fetching data on componentDidMount')
        this.props.fetchGameData(response.data)
      })
      .catch(err => {
        console.log('error fetching data on componentDidMount', err)
      })

    // fetch list of all USERS and put it in store as 'userList'
    axios.get('/api/games/fetch/users')
      .then(response => {
        console.log('fetching user list on componentDidMount')
        this.props.fetchUsers(response.data)
      })
      .catch(err => {
        console.log('error fetching user list on componentDidMount', err)
      })
  }

  render() {
    if (!this.props.gameData) {
      return null
    }

    return (
      <Grid>

        <Row>
          <Col>
            <Jumbotron style={{ margin: '1px', height: '120px', padding: '20px', textAlign: 'center', color: '#3f250b', backgroundColor: 'orange' }}>
              <h1 style={{ margin: 'auto auto'}}><div className='colorme'>.got(Next)</div></h1>
            </Jumbotron>
          </Col>
        </Row>

        <Row >
          <Col>
            <Navi />
          </Col>
        </Row>

        <Row >
          <Main />
        </Row>

      </Grid>
    )
  }
};

const mapStateToProps = state => {
  return {
    gameData: state.gameData,
    user: state.user
  }
};

const matchDispatchToProps = dispatch => {
  return bindActionCreators({
    setUser: setUser,
    fetchGameData: fetchGameData,
    fetchUsers: fetchUsers,
    setEditState: setEditState
  }, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(App);