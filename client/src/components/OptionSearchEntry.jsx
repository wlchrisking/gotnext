import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import OptionSearch from './OptionSearch.jsx'
import { Alert, Popover, Col, Row, Button, Table, ListGroup, ListGroupItem, OverlayTrigger, ButtonToolbar } from 'react-bootstrap';


class OptionSearchEntry extends Component {

  render() {
    return (
      <div style={{fontSize: '12px'}}>
      <ListGroup>
      <div>
      <ListGroupItem header="Creator: " active><div>User</div></ListGroupItem>
      </div>
      <ListGroupItem className="created-entry">Sport: {this.props.game.sport}</ListGroupItem>
      <ListGroupItem className="created-entry">Start/End: {this.props.game.start}-{this.props.game.end}</ListGroupItem>
      <ListGroupItem className="created-entry">Address: {this.props.game.address}</ListGroupItem>
      <ListGroupItem className="created-entry">Max Players: {this.props.game.max}</ListGroupItem>
      <ListGroupItem className="created-entry">Type: {this.props.game.game ? <span>Competitive</span> : <span>Casual</span>}</ListGroupItem>
      <ListGroupItem className="created-entry" >Notes: {this.props.game.notes}</ListGroupItem>
      </ListGroup>


      {/* Need to render user name}
      {/* {this.props.userList ? null : <div>{this.props.userList.find(user => {return user.id === this.props.game.UserId}).username}</div>} */}

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