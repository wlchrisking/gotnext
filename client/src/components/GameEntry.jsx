import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'; 

import {setGameSetting} from '../actions/setGameSetting';
import {setOption} from '../actions/setOption';
import {setLoginPage} from '../actions/setLoginPage';
import {setEditState} from '../actions/setEditState';

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
    console.log('edited!');
    this.props.setEditState(true);
    this.props.setGameSetting(this.form);
    this.props.setOption('create');
    this.props.setLoginPage('default');
  }

  onDeleteHandler() {
    console.log('deleted!');
    //send this.form.id to server to delete the game from the db. then need to rerender the relevant
    //components - by doing the axios request for the users games i guess? basically just need to kill this component. or
    //rerender component above it. figure out how to do it.

    //looks like will have to be a params thing - so may need to change route in server too
    //compare the then and catch here to other axios request to see what they did.
    axios.delete(`api/games/delete/${this.form.id}`)
    .then(function (response) {
      console.log(response);
      //do a new request for the users games list now? hrm? userid will still be here, or get from elsewhere? shud still be here i think.
    })
    .catch(function (error) {
      console.log(error);
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
              Casual/Nightmare: {JSON.stringify(this.form.competitive) === 'true' ? 'Nightmare mode homie' : 'Tek it ezzz foo'}
            </div>
            <div>
              Coordinates: {(this.form.coordinates)}
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
    setLoginPage:setLoginPage
    }, 
    dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(GameEntry);