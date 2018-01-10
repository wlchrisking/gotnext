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
  }

  render() {
    return (
        <div>
          <div>
            <div>
              <h4>GameID:</h4>{JSON.stringify(this.form.id)}
            </div>
            <div>
              <h5>Coordinates:</h5>{JSON.stringify(this.form.coordinates)}
            </div>
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