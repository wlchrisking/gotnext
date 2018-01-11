import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import OptionSearchEntry from './OptionSearchEntry'

class OptionSearch extends Component {
  render() {
    console.log('hi',this.props.userList)
    return(
      <div>
        {
          this.props.gameData 
          ?
          this.props.gameData.map( (game) => {
            return <OptionSearchEntry key={game.id} game={game}/>;
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