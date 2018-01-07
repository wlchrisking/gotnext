import React from 'react';
import axios from 'axios';
import UserList from '../containers/test-list.js';

class App extends React.Component {
  constructor() {
    super()
  }

  onSubmit() {
    const payload = {
      username: 'xxx@xxx.com',
      password: 'xxx'
    }
    axios.post('/api/user/signup', payload)
      .then( (res) => {
        console.log('res', res);
      })
      .catch( (err) => {
        console.log('err', err);
        // render a new alert saying unsuccessful signup
      })
  }

  onLogin() {
    const payload = {
      username: 'xxx@xxx.com',
      password: 'xxx'
    }
    axios.post('/api/user/login', payload)
    .then( (res) => {
      console.log('res', res);
    })
    .catch( (err) => {
      console.log('err', err);
      // render a new alert saying unsuccessful login
    })
  }

  render() {
    return(
      <div>
        <UserList />
        <button onClick={this.onSubmit}>Click Me!</button>
        <button onClick={this.onLogin}>Login!</button>
      </div>
    )
  }
}

export default App;
