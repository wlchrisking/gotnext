import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Form, FormControl, Grid, Button, Jumbotron, Row, Col, FormGroup, ControlLabel, HelpBlock } from 'react-bootstrap';
import axios from 'axios'

class Login extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: '',
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleLoginUser = this.handleLoginUser.bind(this)
  }


  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value,
      [event.target.id]: event.target.value
    })
  }

  handleLoginUser() {
    let payload = {
      username: this.state.username,
      password: this.state.password
    }

    axios.post('/api/user/login', payload)
    .then((data) => {
      console.log('User logged in! Data received from server: ', data)
      if (data.data.token) {
        console.log('Token received from server!\nThis Token will be stored on localStorage: ', data.data.token)
        window.localStorage.setItem('token', data.data.token)
      }
    })
      .catch((err) => {
        console.log('Error logging in user: ', err)
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
        <FormGroup
        // controlId="formBasicText"
        // validationState={this.getValidationState()}
        >
          {/* <ControlLabel>Login:</ControlLabel> */}
          <FormControl className=""
            type="text"
            id="username"
            value={this.state.username}
            placeholder="Enter Username"
            onChange={this.handleChange}
          />

          <FormControl
            type="text"
            id="password"
            value={this.state.password}
            placeholder="Enter Password"
            onChange={this.handleChange}
          />

          {/* <HelpBlock>Validation is based on string length.</HelpBlock> */}
        </FormGroup>
      </Form>

      <Button
        block={true}
        type="button"
        bsStyle="primary"
        onClick={this.handleLoginUser}
      >Login</Button>

    </div>
  )
}
}

const mapStateToProps = state => {
  return {

  }
};

export default connect(mapStateToProps)(Login);