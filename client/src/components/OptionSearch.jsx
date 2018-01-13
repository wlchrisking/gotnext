import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import OptionSearchEntry from './OptionSearchEntry'
import { Form, Table, FormControl, Grid, Button, Jumbotron, Row, Col, FormGroup, ControlLabel, HelpBlock } from 'react-bootstrap';

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