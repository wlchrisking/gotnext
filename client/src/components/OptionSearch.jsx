import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import OptionSearchEntry from './OptionSearchEntry'

import axios from 'axios'

class OptionSearch extends Component {
  constructor() {
    super()
    this.state = {
      userList: 0
    }
  }

  componentWillMount() {
    axios.get('/api/games/fetch/users')
      .then(response => {        
        console.log('fetching user list on componentDidMount')
        this.setState({
          userList: response.data
        })
        // this.props.fetchUsers(response.data)
      })
      .catch(err => {
        console.log('error fetching user list on componentDidMount', err)
      })
  }
  
  

  render() {
    
    return(
      <div>
        {
          this.props.gameData && this.state.userList.length
          ?
          this.props.gameData.map( (game) => {
            console.log('hi',this.state.userList)
            return <OptionSearchEntry key={game.id} userList={this.state.userList} game={game}/>;
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
    gameData: state.gameData,
    userList: state.userList
  }
};

export default connect(mapStateToProps)(OptionSearch);