import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import OptionSearch from './OptionSearch.jsx'

class OptionSearchEntry extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    console.log('PROPPPSSSSSSSSSSS', this.props)
  }
  
 componentDidMount() {
   console.log('userlist', this.props.userList)
   console.log('game userid', this.props.game.UserId)
  const test = this.props.userList.find(user => { 
    return user.id === this.props.game.UserId 
  }).username
  console.log('TEST',test)
 }

  render() {
    return (
      <div>
        <div>
          <div>
            <h4>Username:</h4>
            
            {
              JSON.stringify(this.props.userList.find(user => { 
                return user.id === this.props.game.UserId 
              }).username)
            }
          </div>
          <div>
            <h5>Coordinates:</h5>{JSON.stringify(this.props.game.coordinates)}
          </div>
          <div>
            <h5>Coordinates:</h5>{JSON.stringify(this.props.game.coordinates)}
          </div>
          <div>
            <h5>Coordinates:</h5>{JSON.stringify(this.props.game.coordinates)}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    // userList: state.userList
  }
};


export default connect(mapStateToProps)(OptionSearchEntry);