import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {setOption} from '../actions/setOption'
import {setLoginPage} from '../actions/setLoginPage'
import {setUser} from '../actions/setUser.js'
import {setUserGames} from '../actions/setUserGames'
import axios from 'axios'


class Nav extends Component {

  render() {
    return(
      <div>         

        {/* === SEARCH BUTTON === */}

        <a href="" 
          onClick={(e) => {
            e.preventDefault()
            this.props.setOption('search')
            this.props.setLoginPage('default')
          }} 
          className="navigation" 
        >
          Search 
        </a>
        
        {/* === CREATE BUTTON === */}

        <a href="" 
          onClick={(e) => {
            e.preventDefault()
            this.props.setOption('create')
            this.props.setLoginPage('default')
          }} 
          className="navigation" 
        >          
          Create 
        </a>
        
        {/* === VIEW BUTTON === */}

        <a href="" 
          onClick={(e) => {
            e.preventDefault()
            this.props.setOption('view')
            this.props.setLoginPage('default')
          }}  
          className="navigation" 
        >
          View 
        </a>
        
        {/* === SIGNUP BUTTON === */}

        <a href="" 
          onClick={(e) => {
            e.preventDefault()
            this.props.setLoginPage('signup')
          }} 
          className="navigation" 
        >
          Sign Up 
        </a>
        
        {/* === LOGIN BUTTON === */}

        <a href="" 
          onClick={
            (e) => {
            e.preventDefault()
            this.props.setLoginPage('login')
          }} 
          className="navigation" 
        >
          Login 
        </a>
        
        {/* === LOG OUT BUTTON === */}

        <a href=""
          onClick={(e) => {
            e.preventDefault()
          
            axios.get('/api/user/logout')
            .then((data)=>{
              window.localStorage.removeItem('token')
              this.props.setUser(null)
              this.props.setUserGames(null)
              this.props.setLoginPage('default')
              this.props.setOption('search')
              console.log('Data:', data.data.message)
            })
            .catch((err)=>{
              console.log('Error logging out', err)
            })

            
          }
        } 
          className="navigation" 
        >
          Log Out 
        </a>       
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
    setOption:setOption, 
    setLoginPage:setLoginPage,
    setUser:setUser,
    setUserGames:setUserGames}, 
    dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(Nav);