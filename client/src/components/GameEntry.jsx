import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'; 
import axios from 'axios';

import {setGameSetting} from '../actions/setGameSetting';
import {setOption} from '../actions/setOption';
import {setLoginPage} from '../actions/setLoginPage';
import {setEditState} from '../actions/setEditState';
import {setUserGames} from '../actions/setUserGames';

class GameEntry extends Component {
  constructor(prop) {
    super(prop);
    console.log('this is this.game', prop.game);
    this.form = {
      id: prop.game.id,
      sport: prop.game.sport,
      max: prop.game.max,
      start: prop.game.start,
      end: prop.game.end,
      competitive: prop.game.competitive,
      notes: prop.game.notes,
      address: prop.game.address,
      coordinates: prop.game.coordinates,
      UserId: prop.game.UserId
    }
  }

  onEditHandler() {
    this.props.setEditState(true);
    this.props.setGameSetting(this.form);
    this.props.setOption('create');
    this.props.setLoginPage('default');
  }

  onDeleteHandler() {
    axios.delete(`api/games/delete/${this.form.id}`)
    .then((response) => {
      axios.get(`/api/games/fetch/user/${this.props.user}`)
      .then((response) => {
        this.props.setUserGames(response.data);
      })
      .catch((err) => {
        console.log('Error fetching user games: ', err);
      });
    })
    .catch((error) => {
      console.log('Error deleting user game: ', error);
    });
  }

  render() {
    return (
        <div>
          <div>
            <br/>
            <div>
              GameID: {JSON.stringify(this.form.id)}
            </div>
            <div>
              Sport: {this.form.sport}
            </div>
            <div>
              Start: {this.form.start} End: {this.form.end}
            </div>
            <div>
              Address: {this.form.address}
            </div>
            <div>
              Max Players: {this.form.max}
            </div>
            <div>
              Casual/Nightmare: {JSON.stringify(this.form.competitive) === 'true' ? 'Nightmare mode' : 'Casual'}
            </div>
            <div>
              Coordinates: {(this.form.coordinates.replace(/"/, '').replace(/"/, '').replace(/"/, '').replace(/"/, ''))}
            </div>
            <br/>
            <button onClick={this.onEditHandler.bind(this)}>Edit</button>
            <button onClick={this.onDeleteHandler.bind(this)}>Delete</button>
          </div>
        </div>
      )
    }
}

const mapStateToProps = state => {
  return {
    edit: state.edit,
    location: state.location,
    setting: state.setting,
    user: state.user    
  }
};

const matchDispatchToProps = dispatch => {
  return bindActionCreators({
    setEditState:setEditState,
    setGameSetting:setGameSetting,
    setOption:setOption,
    setUserGames:setUserGames,
    setLoginPage:setLoginPage
    }, 
    dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(GameEntry);