import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Media, orm, FormControl, Grid, Button, Jumbotron, Row, Col, FormGroup, ControlLabel, HelpBlock } from 'react-bootstrap';
import Maps from './Map.jsx';
import Option from './Option.jsx';
import Login from './Login.jsx';
import SignUp from './SignUp.jsx';

class Main extends Component {

  render() {
    if (this.props.loginPage === 'login') {
      return (
        <Login />
      )
    }

    if (this.props.loginPage === 'signup') {
      return (
        <SignUp />
      )
    }

    if (this.props.loginPage === 'default' || this.props.loginPage === null) {
      return (
        <div style={{border: '2px solid pink'}}>
          <Col xs={6} md={6}>
            All Games:
            <Option />
          </Col>
          <br /><br />
          <br /><br />

          <Col>
            Map of Games:
            <Maps />
          </Col>

          <br /><br />
          <br /><br />
          <div>
            {JSON.stringify(this.props.location)}
          </div>
        </div>
      )
    }
  }
};

const mapStateToProps = state => {
  return {
    loginPage: state.loginPage,
    location: state.location
  }
};

const matchDispatchToProps = dispatch => {
  return bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(Main);