import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'; 
import axios from 'axios'

import {setUser} from '../actions/setUser.js'


class SignUp extends Component {

  onCreateUser1() {
    let payload = {
      username: 'John@gmail.com',
      password: 'abc123'
    }

    let mytoken = {
      token: window.localStorage.token
    }

    axios.post('/api/user/signup', payload)
      .then((data)=>{
        console.log('data:', data)
        if (data.data.token) {
          window.localStorage.setItem('token', data.data.token)
        }
      })
      .catch((err)=>{
        console.log('error', err)
      })
  }

  onCreateUser2() {
    let payload = {
      username: 'Bill@gmail.com',
      password: 'abc123'
    }

    let mytoken = {
      token: window.localStorage.token
    }

    axios.post('/api/user/signup', payload)
    .then((data)=>{
      console.log('data:', data)
      if (data.data.token) {
        window.localStorage.setItem('token', data.data.token)
      }
    })
    .catch((err)=>{
      console.log('error', err)
    })
  }

  onLoginUser1() {
    let payload = {
      username: 'John@gmail.com',
      password: 'abc123'
    }
    this.props.setUser(payload.username);

    let mytoken = {
      token: window.localStorage.token
    }

    axios.post('/api/user/login', payload, mytoken)
    .then((data)=>{
      console.log('data:', data)
      if (data.data.token) {
        window.localStorage.setItem('token', data.data.token)
      }
    })
      .catch((err)=>{
        console.log('error', err)
      })
  }

  onLoginUser2() {
    let payload = {
      username: 'Bill@gmail.com',
      password: 'abc123'
    }
    this.props.setUser(payload.username);

    let mytoken = {
      token: window.localStorage.token
    }

    axios.post('/api/user/login', payload, mytoken)
      .then((data)=>{
        console.log('data:', data)
        if (data.data.token) {
          window.localStorage.setItem('token', data.data.token)
        }
      })
      .catch((err)=>{
        console.log('error', err)
      })
  }

  onLogOut() {
    axios.get('/api/user/logout')
      .then((data)=>{
        window.localStorage.removeItem('token') 
        console.log(data)
      })
      .catch((err)=>{
        console.log(err)
      })
  }

  onCreateGameHandler () {
    let payload = {
      token: window.localStorage.token
    }
    axios.post('/api/games/create', payload)
    .then((data)=>{
      console.log(data)
    })
    .catch((err)=>{
      console.log(err)
    })
}


  render() {
    return(
      <div>
        --- SignUp Component Here ---
        <br/>
        <br/>
        John@gmail.com | abc123
        <button onClick={this.onCreateUser1}>Create User: John</button>
        <br/>
        Bill@gmail.com | 123abc
        <button onClick={this.onCreateUser2}>Create User: Bill</button>
        <br/>


        <br/>

        John@gmail.com | abc123
        <button onClick={this.onLoginUser1.bind(this)}>Login: John</button>
        <br/>
        Bill@gmail.com | 123abc
        <button onClick={this.onLoginUser2.bind(this)}>Login: Bill</button>
        <br/>

        <br/>
         You should only be able to create a game if logged in.
        <button onClick={this.onCreateGameHandler}>Create a game</button>
        <br/>

        <br/>
        <br/>
        <br/>
        <button onClick={this.onLogOut}>Logout</button>
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
    setUser:setUser
    }, 
    dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(SignUp);