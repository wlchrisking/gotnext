import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';

import { setGameSetting } from '../actions/setGameSetting';
import { setOption } from '../actions/setOption';
import { setLocation } from '../actions/setLocation';
import { setEditState } from '../actions/setEditState';
import { setUserGames } from '../actions/setUserGames';
import { Form, MenuItem, FormControl, Button, FormGroup, DropdownButton, InputGroup } from 'react-bootstrap';


class OptionCreate extends Component {
  constructor() {
    super();
    // temporary state for instant reference
    this.form = { sport: '', max: '', start: '', end: '', competitive: true, notes: '', address: '', coordinates: '', user: '' }
  }

  componentWillMount() {
    // clear fields upon creating a new game
    if (this.props.edit === false) {
      this.props.setGameSetting({ address: '', competitive: '', coordinates: '', end: '', max: '', notes: '', sport: '', start: '', user: this.props.user, token: window.localStorage.token, id: '' })
    }
  }

  componentDidUpdate() {
    // do not clear fields when setting a location while creating a new game
    if (this.props.edit === false) {
      if (this.props.setting) {
        document.getElementsByName('address')[0].value = this.props.setting.address;
        document.getElementsByName('sport')[0].value = this.props.setting.sport;
        document.getElementsByName('max')[0].value = this.props.setting.max;
        document.getElementsByName('start')[0].value = this.props.setting.start;
        document.getElementsByName('end')[0].value = this.props.setting.end;
        document.getElementsByName('end')[0]['competitive'] = this.props.setting.competitive;
        document.getElementsByName('notes')[0].value = this.props.setting.notes;
      }
    }
  }

  componentDidMount() {
    // upon mount, prefill text fields with existing data
    if (this.props.edit === true) {
      if (this.props.setting) {
        document.getElementsByName('address')[0].value = this.props.setting.address;
        document.getElementsByName('sport')[0].value = this.props.setting.sport;
        document.getElementsByName('max')[0].value = this.props.setting.max;
        document.getElementsByName('start')[0].value = this.props.setting.start;
        document.getElementsByName('end')[0].value = this.props.setting.end;
        document.getElementsByName('end')[0]['competitive'] = this.props.setting.competitive;
        document.getElementsByName('notes')[0].value = this.props.setting.notes;
      }
    }
  }

  onSubmitHandler() {
    if (this.props.edit === true) { // handling edit submission
      const payload = {
        address: document.getElementsByName('address')[0].value,
        competitive: this.props.setting.competitive,
        coordinates: this.props.location ? JSON.stringify(this.props.location) : this.props.setting.coordinates,
        end: document.getElementsByName('end')[0].value,
        max: parseInt(document.getElementsByName('max')[0].value),
        notes: document.getElementsByName('notes')[0].value,
        sport: document.getElementsByName('sport')[0].value,
        start: document.getElementsByName('start')[0].value,
        user: this.props.user,
        token: window.localStorage.token,
        id: this.props.setting.id
      }
      this.props.setGameSetting(payload); // update current game setting with payload data (user edits)
      axios.put('/api/games/update', payload) // make edit request to server
        .then((response) => {
          axios.get(`/api/games/fetch/user/${this.props.user}`) // update user games upon success
            .then((response) => {
              this.props.setUserGames(response.data);
              // clear fields
              document.getElementsByName('address')[0].value = '';
              document.getElementsByName('sport')[0].value = '';
              document.getElementsByName('max')[0].value = '';
              document.getElementsByName('start')[0].value = '';
              document.getElementsByName('end')[0].value = '';
              document.getElementsByName('notes')[0].value = '';
              this.props.setLocation(null);
              this.props.setEditState(false);
              this.props.setOption('view');
            })
            .catch(() => {
              console.log('errrrror');
            })
        })
        .catch((err) => {
          console.log('error creating game', err);
        });
    } else {
      if (this.props.location) { // handle new game submission
        const payload = this.form;
        payload['coordinates'] = this.props.location, payload['token'] = window.localStorage.token, payload['user'] = this.props.user, payload['competitive'] = this.form.competitive;
        this.props.setGameSetting(payload); // set current game setting
        axios.post('/api/games/create', payload) // send create game request to server 
          .then((response) => {
            axios.get(`/api/games/fetch/user/${this.props.user}`) // update user games
              .then((response) => {
                this.props.setUserGames(response.data);
                // clear fields
                document.getElementsByName('address')[0].value = '';
                document.getElementsByName('sport')[0].value = '';
                document.getElementsByName('max')[0].value = '';
                document.getElementsByName('start')[0].value = '';
                document.getElementsByName('end')[0].value = '';
                document.getElementsByName('notes')[0].value = '';
                this.props.setOption('view');
                this.props.setLocation(null);
                this.props.setGameSetting({});
              })
              .catch(() => {
                console.log('errrrror');
              })
          })
          .catch((err) => {
            console.log('error creating game', err);
          });
      } else {
        console.log('drop a pin!');
      }
    }
  }

  onChangeHandler(e) {
    // update temporary state to retain client selected(drop down) data
    this.form[e.target.name] = e.target.value;
    this.props.setting[e.target.name] = e.target.value;
  }

  onSelectHandler(e) {
    // update temporary state to retain client typed data
    this.form['competitive'] = e;
    this.props.setting.competitive = e;
    this.props.setGameSetting(this.props.setting);
  }

  render() {
    return (
      <div>
        {!this.props.edit ?
        <div style={{ fontSize: '14px', fontWeight: 'bold' }}>Create a Game:
        </div>
        :
        <div style={{ fontSize: '14px', fontWeight: 'bold' }}>Edit your game:
        </div>
        }
        <br />

        <Form >
          <FormGroup >
            <FormControl
              type="text"
              name="sport"
              placeholder="Sport"
              onChange={this.onChangeHandler.bind(this)}
            />
            <FormControl
              type="text"
              name="start"
              placeholder={`Start time (e.g. \"0930AM\")`}
              onChange={this.onChangeHandler.bind(this)}
            />

            <FormControl
              type="text"
              name="end"
              placeholder={`End time (e.g. \"1159PM\")`}
              onChange={this.onChangeHandler.bind(this)}
            />
            <FormControl
              type="text"
              name="address"
              placeholder="Address"
              onChange={this.onChangeHandler.bind(this)}
            />
            <FormControl
              type="text"
              name="max"
              placeholder="Max players (#)"
              onChange={this.onChangeHandler.bind(this)}
            />

            <DropdownButton
              name="drop"
              componentClass={InputGroup.Button}
              id="input-dropdown-addon"
              title='Casual/Competitive'
              
            >
              <MenuItem eventKey={false} onSelect={this.onSelectHandler.bind(this)}>Casual
            </MenuItem>
              <MenuItem eventKey={true} onSelect={this.onSelectHandler.bind(this)}>Competitive
            </MenuItem>
            </DropdownButton>


            <FormControl
              style={{ resize: 'none' }}
              componentClass="textarea"
              type="text"
              name="notes"
              placeholder="Notes"
              onChange={this.onChangeHandler.bind(this)}
            />


          </FormGroup>
        </Form>

        <div>{!this.props.edit && !this.props.location ? <div className='warn'>Please drop a pin to mark the location of the game.<br></br><br></br></div> : <div><br></br><br></br></div>}</div>

        {!this.props.edit ? <Button
          className="btns"
          block={true}
          type="button"
          bsStyle="primary"
          onClick={this.onSubmitHandler.bind(this)}
        >Create!
        </Button> : <Button
            className="btns"
            block={true}
            type="button"
            bsStyle="primary"
            onClick={this.onSubmitHandler.bind(this)}
          >Edit
        </Button>}

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    location: state.location,
    setting: state.setting,
    user: state.user,
    games: state.games,
    edit: state.edit
  }
};

const matchDispatchToProps = dispatch => {
  return bindActionCreators({
    setEditState: setEditState,
    setGameSetting: setGameSetting,
    setUserGames: setUserGames,
    setLocation: setLocation,
    setOption: setOption
  },
    dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(OptionCreate);