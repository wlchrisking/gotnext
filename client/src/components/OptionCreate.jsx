import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'; 
import axios from 'axios';

import {setGameSetting} from '../actions/setGameSetting';
import {setLocation} from '../actions/setLocation';
import {setEditState} from '../actions/setEditState';

class OptionCreate extends Component {
  constructor() {
    super();
    this.form = {
      sport: '',
      max: '',
      start: '',
      end: '',
      competitive: true,
      notes: '',
      address: '',
      coordinates: '',
      user: ''
    }
  }

  componentDidMount() {
    if (this.props.setting) {
      var frm = document.getElementsByName('address');
      frm[0].value=this.props.setting.address;
      console.log('this is setting', this.props.setting);
      var frm = document.getElementsByName('sport');
      frm[0].value=this.props.setting.sport;
      var frm = document.getElementsByName('max');
      frm[0].value=this.props.setting.max;
      var frm = document.getElementsByName('start');
      frm[0].value=this.props.setting.start;
      var frm = document.getElementsByName('end');
      frm[0].value=this.props.setting.end;
      var frm = document.getElementsByName('competitive');
      frm[0].value=this.props.setting.competitive;
      var frm = document.getElementsByName('notes');
      frm[0].value=this.props.setting.notes;
    }
  }
  
  onSubmitHandler() {
    console.log('click!');
    console.log('props', this.props.setting);
    if (this.props.edit === true) {
      console.log('true edit');
      console.log('editting!!!!');
      const payload = {
        address: document.getElementsByName('address')[0].value,
        competitive: document.getElementsByName('competitive')[0].value === 'true' ? true : false,
        coordinates: this.props.location ? this.props.location : this.props.setting.coordinates,
        end: document.getElementsByName('end')[0].value,
        max: parseInt(document.getElementsByName('max')[0].value),
        notes: document.getElementsByName('notes')[0].value,
        sport: document.getElementsByName('sport')[0].value,
        start: document.getElementsByName('start')[0].value,
        user: this.props.user,
        token: window.localStorage.token,
        id: this.props.setting.id
      }
      this.props.setGameSetting(payload);
      console.log('PAYYYYYLOAAAADDDD!!!!', payload);
      axios.put('/api/games/update', payload)
        .then( (response) => {
          console.log('this is updated props.setting', this.props.setting)
          console.log('successfully editted game', response);
          var frm = document.getElementsByName('address');
          frm[0].value='';
          var frm = document.getElementsByName('sport');
          frm[0].value='';
          var frm = document.getElementsByName('max');
          frm[0].value='';
          var frm = document.getElementsByName('start');
          frm[0].value='';
          var frm = document.getElementsByName('end');
          frm[0].value='';
          var frm = document.getElementsByName('competitive');
          frm[0].value=false;
          var frm = document.getElementsByName('notes');
          frm[0].value='';
          this.props.setLocation(null);
          console.log('this is location', this.props.location);
          this.props.setGameSetting(null);
          this.props.setEditState(false);
        })
        .catch( (err) => {
          console.log('error creating game', err);
        });
    } else {
      console.log('false edit');
      if (this.props.location) {
        const payload = this.form;
        payload['coordinates'] = this.props.location;
        payload['token'] = window.localStorage.token;
        payload['user'] = this.props.user;
        this.props.setGameSetting(payload);
        axios.post('/api/games/create', payload)
          .then( (response) => {
            console.log('this is props.setting', this.props.setting)
            console.log('successfully created game', response);
          })
          .catch( (err) => {
            console.log('error creating game', err);
          });
          var frm = document.getElementsByName('address');
          frm[0].value='';
          var frm = document.getElementsByName('sport');
          frm[0].value='';
          var frm = document.getElementsByName('max');
          frm[0].value='';
          var frm = document.getElementsByName('start');
          frm[0].value='';
          var frm = document.getElementsByName('end');
          frm[0].value='';
          var frm = document.getElementsByName('competitive');
          frm[0].value=false;
          var frm = document.getElementsByName('notes');
          frm[0].value='';
          this.props.setLocation(null);
          console.log('this is location', this.props.location);
          this.props.setGameSetting(null);
      } else {
        console.log('drop a pin!');
        }
      }
    }

  onChangeHandler(e) {
    this.form[e.target.name] = e.target.value;
    console.log(e.target.name, ', ', e.target.value, ' ... ', this.form[e.target.name]);
  }

  render() {
    return(
      <div>
        <h6>Please Fill Out Game Details</h6>
        Address:<input name="address" onChange={this.onChangeHandler.bind(this)}></input>
        <br/>
        Sport:<input name="sport" onChange={this.onChangeHandler.bind(this)}></input>
        <br/>
        Max Participants:<input name="max" onChange={this.onChangeHandler.bind(this)}></input>
        <br/>
        Start Time:<input name="start" onChange={this.onChangeHandler.bind(this)}></input>
        <br/>
        End Time:<input name="end" onChange={this.onChangeHandler.bind(this)}></input>
        <br/>
        Casual/Nightmare Mode:<select name="competitive" onChange={this.onChangeHandler.bind(this)}>
          <option value="false">Casual</option>
          <option value="true">NIGHTMAREMODE</option>
        </select>
        <br/>
        Notes:<textarea name="notes" rows="5" cols="35" onChange={this.onChangeHandler.bind(this)}></textarea>
        <br/>
        <button onClick={this.onSubmitHandler.bind(this)}>SUBMIT!</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    location: state.location,
    setting: state.setting,
    user: state.user,
    edit: state.edit
  }
};

const matchDispatchToProps = dispatch => {
  return bindActionCreators({
    setEditState:setEditState,
    setGameSetting:setGameSetting,
    setLocation:setLocation
    }, 
    dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(OptionCreate);