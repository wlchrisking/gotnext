import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';

import { setGameSetting } from '../actions/setGameSetting';
import { setOption } from '../actions/setOption';
import { setLoginPage } from '../actions/setLoginPage';
import { setEditState } from '../actions/setEditState';
import { setUserGames } from '../actions/setUserGames';
import { setDeleteState } from '../actions/setDeleteState';
import { setDeleteUserState } from '../actions/setDeleteUserState';

import { Modal, Alert, Popover, Col, Row, Button, Table, ListGroup, ListGroupItem, OverlayTrigger, ButtonToolbar } from 'react-bootstrap';

class GameEntry extends Component {
  constructor(props) {
    super(props);
  }

  onEditHandler() {
    this.props.setEditState(true);
    this.props.setGameSetting({ id: this.props.game.id, sport: this.props.game.sport, max: this.props.game.max, start: this.props.game.start, end: this.props.game.end, competitive: this.props.game.competitive, notes: this.props.game.notes, address: this.props.game.address, coordinates: this.props.game.coordinates, UserId: this.props.game.UserId });
    this.props.setOption('create');
    this.props.setLoginPage('default');
  }

  onDeleteHandler(deletedUser) {
    axios.delete(`api/games/delete/${deletedUser}`)
      .then((response) => {
        axios.get(`/api/games/fetch/user/${this.props.user}`)
          .then((response) => {
            this.props.setUserGames(response.data);
          })
          .catch((err) => {
            console.log('Error fetching user games: ', err);
          });
      })
      .catch((error) => {
        console.log('Error deleting user game: ', error);
      });
  }

  render() {
    return (
      <div style={{ fontSize: '12px' }}>
        <ListGroup>
          <ListGroupItem className="game-entry" header="Game # " active><div className="game-inner">{this.props.game.id}</div></ListGroupItem>
          <ListGroupItem className="created-entry">Sport: {this.props.game.sport}</ListGroupItem>
          <ListGroupItem className="created-entry">Start/End: {this.props.game.start}-{this.props.game.end}</ListGroupItem>
          <ListGroupItem className="created-entry">Address: {this.props.game.address}</ListGroupItem>
          <ListGroupItem className="created-entry">Max Players: {this.props.game.max}</ListGroupItem>
          <ListGroupItem className="created-entry">Type: {this.props.game.competitive ? <span>Competitive</span> : <span>Casual</span>}</ListGroupItem>
          <ListGroupItem className="created-entry">Notes: {this.props.game.notes}</ListGroupItem>
          <br />

          <ButtonToolbar>
            <Button
              className="btns"
              style={{ width: "100px" }}
              type="button"
              bsStyle="primary"
              onClick={this.onEditHandler.bind(this)}
            >Edit</Button>

            <Button
              style={{ width: "100px" }}
              type="button"
              bsStyle="danger"
              onClick={() => {this.props.setDeleteState(true); this.props.setDeleteUserState(this.props.game.id)}}
            >
              Delete </Button>

            {this.props.deleteState ?
              <Modal
                show={this.props.deleteState}
                onHide={() => { this.props.setDeleteState(false); this.props.setDeleteUserState(null)}}
               
              >
                <Modal.Header closeButton>
                  <Modal.Title>
                    Warning!
              </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Are you sure you want to delete Game # {this.props.deleteUserState}?
            </Modal.Body>
                <Modal.Footer>
                  <ButtonToolbar>
                  <Button style={{ width: "100px" }} bsStyle="danger" onClick={() => {this.props.setDeleteState(false); this.onDeleteHandler.bind(this)(this.props.deleteUserState) }}>Delete</Button>
                  <Button style={{ width: "100px" }} onClick={() => { this.props.setDeleteState(false); this.props.setDeleteUserState(null) }}>Close</Button>
                  </ButtonToolbar>
                </Modal.Footer>
              </Modal>
              : null}

          </ButtonToolbar>

        </ListGroup>
        <br />
        <br />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    edit: state.edit,
    location: state.location,
    setting: state.setting,
    user: state.user,
    deleteState: state.deleteState,
    deleteUserState: state.deleteUserState
    
  }
};

const matchDispatchToProps = dispatch => {
  return bindActionCreators({
    setEditState: setEditState,
    setGameSetting: setGameSetting,
    setOption: setOption,
    setUserGames: setUserGames,
    setLoginPage: setLoginPage,
    setDeleteState: setDeleteState,
    setDeleteUserState: setDeleteUserState
  },
    dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(GameEntry);