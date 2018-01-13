import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import OptionSearch from './OptionSearch.jsx'
import OptionCreate from './OptionCreate.jsx'
import OptionView from './OptionView.jsx'

class Option extends Component {
  render() {
    if (this.props.option === '') {
      return (
        <div>
        </div>
      )
    }

    if (this.props.option === 'search') {
      return (
        <div>
          <div style={{ fontSize: '14px', fontWeight: 'bold' }}>All Available Games:
        </div>
          <br />
          <OptionSearch />
        </div>
      )
    }

    if (this.props.option === 'create') {
      return (
        <div>
          <OptionCreate />
        </div>
      )
    }

    if (this.props.option === 'view') {
      return (
        <div>
          <OptionView />
        </div>
      )
    }

  }
}

const mapStateToProps = state => {
  return {
    option: state.option
  }
};

export default connect(mapStateToProps)(Option);