import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {fetchOption} from '../actions/fetchOption'

class Nav extends Component {

    


  render() {
    return(
      <div>         
        
        <a href="" 
          onClick={(e) => {
            e.preventDefault()
            this.props.fetchOption('search')
          }} 
          className="navigation" 
        >
          Search 
        </a>
        
        <a href="" 
          onClick={(e) => {
            e.preventDefault()
            this.props.fetchOption('create')
          }} 
          className="navigation" 
        >          
          Create 
        </a>
        
        <a href="" 
          onClick={(e) => {
            e.preventDefault()
            this.props.fetchOption('view')
          }}  
          className="navigation" 
        >
          View 
        </a>
        
        <a href="" className="navigation" >
          Sign Up 
        </a>
        
        <a href="" className="navigation" >
          Login 
        </a>
        
        <a href="" className="navigation" >
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
  return bindActionCreators({fetchOption:fetchOption}, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(Nav);