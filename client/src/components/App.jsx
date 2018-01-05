import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super()
  }

  onSubmit() {
    const payload = {
      email: 'xxx@xxx.com'
    }
    axios.post('/api/user/signup', payload)
      .then( (res) => {
        console.log('res', res);
      })
      .catch( (err) => {
        console.log('err', err);
      })
  }
  render() {
    return(
      <div>
        <button onClick={this.onSubmit}>Click Me!</button>
      </div>
    )
  }
}

export default App;
