import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {setOption} from '../actions/setOption'
import {setLoginPage} from '../actions/setLoginPage'


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
            console.log(e)
            e.preventDefault()
            this.props.setLoginPage('logout')
          }} 
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
    setLoginPage:setLoginPage}, 
    dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(Nav);