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

import { Modal, Alert, Popover, Col, Row, Button, Table, ListGroup, ListGroupItem, OverlayTrigger, ButtonToolbar } from 'react-bootstrap';


class GameEntry extends Component {
  constructor(prop) {
    super(prop);
    console.log('this is this.game', prop.game);

    this.form = {
      id: prop.game.id,
      sport: prop.game.sport,
      max: prop.game.max,
      start: prop.game.start,
      end: prop.game.end,
      competitive: prop.game.competitive,
      notes: prop.game.notes,
      address: prop.game.address,
      coordinates: prop.game.coordinates,
      UserId: prop.game.UserId
    }
  }

  onEditHandler() {
    this.props.setEditState(true);
    this.props.setGameSetting(this.form);
    this.props.setOption('create');
    this.props.setLoginPage('default');
  }

  onDeleteHandler() {
    axios.delete(`api/games/delete/${this.form.id}`)
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
          <ListGroupItem header="Game # " active>{this.form.id}</ListGroupItem>
          <ListGroupItem className="created-entry">Sport: {this.form.sport}</ListGroupItem>
          <ListGroupItem className="created-entry">Start/End: {this.form.start}-{this.form.end}</ListGroupItem>
          <ListGroupItem className="created-entry">Address: {this.form.address}</ListGroupItem>
          <ListGroupItem className="created-entry">Max Players: {this.form.max}</ListGroupItem>
          <ListGroupItem className="created-entry">Type: {this.form.competitive ? <span>Competitive</span> : <span>Casual</span>}</ListGroupItem>
          <ListGroupItem className="created-entry">Notes: {this.form.notes}</ListGroupItem>

          <br />

          <ButtonToolbar>
            <Button
              style={{ width: "100px" }}
              type="button"
              bsStyle="primary"
              onClick={this.onEditHandler.bind(this)}
            >Edit</Button>

            <Button
              style={{ width: "100px" }}
              type="button"
              bsStyle="danger"
              onClick={() => { this.props.setDeleteState(true) }}
            >
              Delete </Button>

            {this.props.deleteState ?
              <Modal
                show={this.props.deleteState}
                onHide={() => { !this.props.setDeleteState(false) }}
               
              >
                <Modal.Header closeButton>
                  <Modal.Title>
                    Warning!
              </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Are you sure you want to delete Game # {this.form.id}?
            </Modal.Body>
                <Modal.Footer>
                  <ButtonToolbar>
                  <Button style={{ width: "100px" }} bsStyle="danger" onClick={() => { this.props.setDeleteState(false); this.onDeleteHandler() }}>Delete</Button>
                  <Button style={{ width: "100px" }} onClick={() => { this.props.setDeleteState(false) }}>Close</Button>
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
    deleteState: state.deleteState
  }
};

const matchDispatchToProps = dispatch => {
  return bindActionCreators({
    setEditState: setEditState,
    setGameSetting: setGameSetting,
    setOption: setOption,
    setUserGames: setUserGames,
    setLoginPage: setLoginPage,
    setDeleteState: setDeleteState
  },
    dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(GameEntry);