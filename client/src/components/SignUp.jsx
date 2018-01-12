import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Form, FormControl, Grid, Button, Jumbotron, Row, Col, FormGroup, ControlLabel, HelpBlock } from 'react-bootstrap';
import axios from 'axios'

class SignUp extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: '',
      signedUp: false
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
        console.log('Sign up successful. Data received from server:', data)
        if (data.data.success) {
          this.setState({
            signedUp: true
          })
        }
      })
      .catch((err) => {
        console.log('Error signing up user: ', err)
      })
  }

  // handleValidation() {
  //   // will mess with later. handles client side validation
  //   const pwlength = this.state.password.length
  //   const userlength = this.state.username.length
  //   if (userlength < 3) return 'error'
  //   if (pwlength < 3) return 'error'

  // }

  render() {
    return (
      <div>

        <Form>
          <FormGroup>
            <FormControl
              type="text"
              id="username"
              value={this.state.username}
              placeholder="Enter Username"
              onChange={this.handleChange}
            />

            <FormControl
              type="password"
              id="password"
              value={this.state.password}
              placeholder="Enter Password"
              onChange={this.handleChange}
            />
          </FormGroup>
        </Form>

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
