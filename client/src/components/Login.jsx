import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Alert, Form, FormControl, Button, FormGroup } from 'react-bootstrap';
import axios from 'axios'
import {setUser} from '../actions/setUser.js'
import {setLoginPage} from '../actions/setLoginPage'
import {setOption} from '../actions/setOption'


class Login extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: '',
      errMsg: ''
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
      if (data.data.errMsg) {
        if (data.data.errMsg) {
          this.setState({
            errMsg: data.data.errMsg,
          })
        }



      } else if (data.data.token) {
        this.props.setUser(payload.username)
        window.localStorage.setItem('token', data.data.token)
        window.localStorage.setItem('username', data.data.username)
        this.props.setOption('view')
        this.props.setLoginPage('default')
      } else {
      }
    })
      .catch((err) => {
      })
  }


render() {
  return (
    <div>

      <Form>
        <FormGroup>
          Username:
          <FormControl
            type="text"
            id="username"
            value={this.state.username}
            placeholder="somebody@hackreactor.com"
            onChange={this.handleChange}
          />
          </FormGroup>


        <FormGroup>
          Password:
          <FormControl
            type="password"
            id="password"
            value={this.state.password}
            placeholder="Enter Password"
            onChange={this.handleChange}
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

const matchDispatchToProps = dispatch => {
  return bindActionCreators({
    setUser: setUser,
    setLoginPage: setLoginPage,
    setOption: setOption
  },
    dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(Login);