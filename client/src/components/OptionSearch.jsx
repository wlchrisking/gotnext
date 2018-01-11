import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import OptionSearchEntry from './OptionSearchEntry'

class OptionSearch extends Component {
  render() {
    console.log('hi',this.props.gameData)
    return(
      <div>
        --- OptionSearch Component Here ---
        {
          this.props.gameData ?
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
    gameData: state.gameData
  }
};

export default connect(mapStateToProps)(OptionSearch);