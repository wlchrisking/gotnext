import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import OptionSearchEntry from './OptionSearchEntry'

class OptionSearch extends Component {

  render() {    
    return(
      <div>
        {
          this.props.gameData.map( game => {
            return <OptionSearchEntry 
              key={game.id} 
              game={game}
            />;
          })
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