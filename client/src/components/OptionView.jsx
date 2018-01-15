import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'; 
import axios from 'axios';

import {setUserGames} from '../actions/setUserGames';
import GameEntry from './GameEntry';


class OptionView extends Component {

  componentWillMount() {
    axios.get(`/api/games/fetch/user/${this.props.user}`)
      .then( (response) => {
        this.props.setUserGames(response.data);
      })
      .catch( () => {
        console.log('errrrror');
      });
  }
  
  render() {
    return(
      <div>
        
        <div style={{ fontSize: '14px', fontWeight: 'bold' }}>All games from user:  {this.props.user}:
        </div>
        <br/>
        <div style={{ height: '430px', overflow:'scroll'}}>
          {
            this.props.games ?
              this.props.games.map( (game) => {
                return <GameEntry key={game.id} game={game}/>;
              })
              :
              null
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    games: state.games,
    setting: state.setting,
    user: state.user
  }
};


const matchDispatchToProps = dispatch => {
  return bindActionCreators({
    setUserGames:setUserGames,
  }, 
  dispatch);
};


export default connect(mapStateToProps, matchDispatchToProps)(OptionView);