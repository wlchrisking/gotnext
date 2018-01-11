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
            <h4>GameID:</h4>{JSON.stringify(this.props.game.id)}
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
  }
};


export default connect(mapStateToProps)(OptionSearchEntry);