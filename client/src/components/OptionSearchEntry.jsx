import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import OptionSearch from './OptionSearch.jsx'

class OptionSearchEntry extends Component {

  render() {
    return (

      <tr>
        {!this.props.userList ? null :
        <th scope="row">{
          this.props.userList.find(user => {
            return user.id === this.props.game.UserId
          }).username}
        </th>
        }

        <td>{this.props.game.sport}</td>
        <td>{this.props.game.start}-{this.props.game.end}</td>
        <td>{this.props.game.address}</td>
        <td>{this.props.game.max}</td>
        {this.props.game.competitive ? <td>Competitive</td> : <td>Casual</td>}

      </tr>
    )

  }

}


const mapStateToProps = state => {
  return {
    userList: state.userList
  }
};

export default connect(mapStateToProps)(OptionSearchEntry);