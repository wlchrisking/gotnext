import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'; 

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
      return(
        <div>
          --- Main Component Here --- 
          <div id="ui">
            <Option />
          </div>       
          <br/><br/>
          <br/><br/>
          <div id="container">
            <Maps />
          </div>      
          <br/><br/>
          <br/><br/>
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