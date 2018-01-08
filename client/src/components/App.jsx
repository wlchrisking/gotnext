import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';

import Nav from './Nav.jsx';
import Main from './Main.jsx';


// import UserList from './UserList.jsx';
// import UserDetail from './UserDetail.jsx'

class App extends Component {
  
  render() {
    return(
      <div>
        <h1>.got(Next)</h1>  
        <Nav />
        <Main />
      </div>
    )
  }
};

const mapStateToProps = state => {
  return {
    
  }
};

// const matchDispatchToProps = dispatch => {
//   return bindActionCreators({}, dispatch);
// };

export default connect(mapStateToProps)(App);




// const App = () => (
//   <div>
//     <h2>User List</h2>
//     <UserList />
//     <hr />
//     <h2>User Detail</h2>
//     <UserDetail />
//   </div>
// );

// export default App;









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