import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Alert, Form, FormControl, Grid, Button, Jumbotron, Row, Col, FormGroup, ControlLabel, HelpBlock } from 'react-bootstrap';
import axios from 'axios'

class SignUp extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: '',
      usernameValidationState: null,
      passwordValidationState: null,
      errMsg: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSignUpUser = this.handleSignUpUser.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value,
      [event.target.id]: event.target.value
    })
    
  }

  handleSignUpUser() {
    let payload = {
      username: this.state.username,
      password: this.state.password
    }

    axios.post('/api/user/signup', payload)
      .then((data) => {
        if (data.data.success) {
          this.setState({
            signedUp: true,
            
          })
        } else {
          if (data.data.errMsg && data.data.errMsg.includes('username')) {
            this.setState({
              errMsg: data.data.errMsg,
              passwordValidationState: null,
              usernameValidationState: 'error'
            })
          } else {
            this.setState({
              errMsg: data.data.errMsg,
              usernameValidationState: null,
              passwordValidationState: 'error'
            })
          }
        }
      })
      .catch((err) => {
      })
  }

  render() {
    return (
      <div>

        <Form>
          <FormGroup
            validationState = {this.state.usernameValidationState}
            >
            Username:
            <FormControl
              type="text"
              id="username"
              value={this.state.username}
              placeholder="somebody@hackreactor.com"
              onChange={this.handleChange}
              required
              autoFocus
            />
            

            </FormGroup>

            <FormGroup
            validationState={this.state.passwordValidationState}>
            Password:
            <FormControl
              type="password"
              id="password"
              value={this.state.password}
              placeholder="Enter Password"
              onChange={this.handleChange}
              required
            />
           
          </FormGroup>
        </Form>

        

        {!this.state.errMsg ? null : 
        
        
        <Alert bsStyle="danger">
        <strong>Error:</strong> {this.state.errMsg}
      </Alert>
        
        }


        <Button
          block={true}
          type="button"
          bsStyle="primary"
          onClick={this.handleSignUpUser}
        >Sign up</Button>

        {this.state.signedUp ? <div>Sign up successful! Continue to Login.</div> : null}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {

  }
};

export default connect(mapStateToProps)(SignUp);
