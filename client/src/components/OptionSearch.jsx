import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import OptionSearchEntry from './OptionSearchEntry'
import { Form, Table, FormControl, Grid, Button, Jumbotron, Row, Col, FormGroup, ControlLabel, HelpBlock } from 'react-bootstrap';

class OptionSearch extends Component {

  render() {    
    return(
      <div>
        <Table striped bordered condensed>
        <thead>
        <tr><th>Creator</th><th>Sport</th><th>Start/End</th><th>Address</th><th>Max Players</th><th>Type</th></tr>
        </thead>
        <tbody>
        {
          this.props.gameData.map( game => {
            return <OptionSearchEntry 
              key={game.id} 
              game={game}
            />;
          })
        }
        </tbody>
      </Table>
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