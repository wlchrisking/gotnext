import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'; 
import axios from 'axios';

import {setUserGames} from '../actions/setUserGames';
import GameEntry from './GameEntry';

class OptionView extends Component {

  // oncomponentdidmount
  // // query for user created games
  // // // dynamically render games into optionviewentry component
  // // // // 
  componentWillMount() {
    console.log('this is props.setting', this.props.setting);
    console.log('this is props.user', this.props.user);
    axios.get(`/api/games/fetch/user/${this.props.user}`)
      .then( (response) => {
        console.log('hello world', response);
        this.props.setUserGames(response.data);
        console.log('this is props.games', this.props.games);
      })
      .catch( () => {
        console.log('errrrror');
      })
  }
  render() {
    return(
      <div>
        <div>
          <h4>{this.props.user}, here are your games!</h4>
        </div>
        {
          this.props.games ?
            this.props.games.map( (game) => {
              // console.log('this is mini ms', ms);
              return <GameEntry game={game}/>;
            })
            :
            null
        }
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