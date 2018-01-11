import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'; 
import axios from 'axios';

import {setGameSetting} from '../actions/setGameSetting';
import {setLocation} from '../actions/setLocation';

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
    if (this.props.edit === false) {
      if (this.props.location) {
        const payload = this.form;
        payload['coordinates'] = this.props.location;
        payload['token'] = window.localStorage.token;
        payload['user'] = this.props.user;
        console.log('this is payload!', payload);
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
      } else {
        console.log('drop a pin!');
      }
    } else {
      console.log('editting!!!!');
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
    user: state.user   
  }
};

const matchDispatchToProps = dispatch => {
  return bindActionCreators({
    setGameSetting:setGameSetting,
    setLocation:setLocation
    }, 
    dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(OptionCreate);