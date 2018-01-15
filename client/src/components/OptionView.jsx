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
    console.log('this is games', this.props);
    const games = [];
    if (this.props.games) {
      for (let i =0; i<this.props.games.length; i++) {
      console.log('gameeee', this.props.games[i])
       games.push(<GameEntry game={this.props.games[i]}/>);
        
      }
    }
    return(
      <div>
        
        <div style={{ fontSize: '14px', fontWeight: 'bold' }}>All games from user:  {this.props.user}:
        </div>
        <br/>
        <div style={{ height: '430px', overflow:'scroll'}}>
          
         {games}
          
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
// this.props.games ?
  // this.props.games.map( (game) => {
  //   console.log('meowgame!', game);
  //   // console.log('this is mini ms', ms);
  //   return <GameEntry game={game}/>;
    
  // })
  // :
  // null