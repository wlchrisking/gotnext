import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class OptionSearchEntry extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <div>
          <div>
            <h4>Username:</h4>
            
            {
              JSON.stringify(this.props.userList.find(user => { 
                user.id === this.props.game.userId 
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
    userList: state.userList
  }
};


export default connect(mapStateToProps)(OptionSearchEntry);