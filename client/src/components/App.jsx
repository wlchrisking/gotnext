import React from 'react';
import axios from 'axios';
import UserList from './UserList.jsx';
import UserDetail from './UserDetail.jsx'
 
const App = () => (
  <div>
      <h2>User List</h2>
      <UserList />
      <hr />
      <h2>User Detail</h2>
      <UserDetail />
  </div>
);

export default App;


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