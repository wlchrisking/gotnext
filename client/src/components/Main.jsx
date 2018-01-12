import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Maps from './Map.jsx';
import Option from './Option.jsx';
import Login from './Login.jsx';
import SignUp from './SignUp.jsx';
import { Col } from 'react-bootstrap';

class Main extends Component {

  render() {
    if (this.props.loginPage === 'login') {
      return (
        <Col xs={6} md={4} xsOffset={3} mdOffset={4} >
          <Login />
        </Col>
      )
    }

    if (this.props.loginPage === 'signup') {
      return (
        <Col xs={6} md={4} xsOffset={3} mdOffset={4} >
          <SignUp />
        </Col>
      )
    }

    if (this.props.loginPage === 'default' || this.props.loginPage === null) {
      return (
        <div>
          <Col md={6} style={{ border: '2px solid pink' }}>
            <Option />
          </Col>

          <Col md={6} style={{ border: '2px solid green', paddingTop: '6cm'}}>
            Map:
          <Maps />
          </Col>
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