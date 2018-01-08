import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import {fetchGameData} from '../actions/fetchGameData';
import {fetchUserGameData} from '../actions/fetchUserGameData';

import Nav from './Nav.jsx';
import Main from './Main.jsx';

class App extends Component {

  // on load, axios request to render games on map
  componentDidMount() {
    this.props.fetchGameData() 
  }



  render() {
    if (!this.props.gameData) {
      return null
    }

    return(
      <div>
        <h1>.got(Next)</h1>  
        <hr/>
        <Nav />
        <hr/>
        <Main />
      </div>
    )
  }
};

const mapStateToProps = state => {
  return {
    gameData: state.gameData
  }
};

const matchDispatchToProps = dispatch => {
  return bindActionCreators({fetchGameData:fetchGameData}, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(App);

// onSubmit() {
  //   const payload = {
    //     username: 'xxx@xxx.com',
    //     password: 'xxx'
    //   }
    //   axios.post('/api/user/signup', payload)
    //     .then( (res) => {
      //       console.log('res', res);
      //     })
      //     .catch( (err) => {
        //       console.log('err', err);
        //       // render a new alert saying unsuccessful signup
        //     })
        // }
        
        // onLogin() {
          //   const payload = {
            //     username: 'xxx@xxx.com',
            //     password: 'xxx'
            //   }
            //   axios.post('/api/user/login', payload)
            //   .then( (res) => {
              //     console.log('res', res);
              //   })
              //   .catch( (err) => {
                //     console.log('err', err);
                //     // render a new alert saying unsuccessful login
                //   })
                // }