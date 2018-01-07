import React, {Component} from 'react';
import {bindActionCreators} from 'redux'; 
import {connect} from 'react-redux';
import {selectUser} from '../actions/index'

// "Dumb" component
class UserList extends Component {

  createListItems() {
    return this.props.users.map((user) => {
      return (
        <li 
          key={user.id}
          onClick={() => this.props.selectUser(user)}
        >
          {user.first} {user.last}
        </li>
      );
    });
  }

  render() {
    return (
      <ul>
        {this.createListItems()}
      </ul>
    )
  }
}

// calling users state from the store
const mapStateToProps = (state) => {
  return {
    users: state.users
  };
}

// 
const matchDispatchToProps = (dispatch) => { // dispatch is redux's way of calling a function (selectUser in this case)
  return bindActionCreators({selectUser: selectUser}, dispatch) 
}

// Container - or "smart component"
// - Connects states and actions to the dumb component
export default connect(mapStateToProps, matchDispatchToProps)(UserList);