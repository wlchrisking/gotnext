import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'; 

class OptionView extends Component {

  // oncomponentdidmount
  // // query for user created games
  // // // dynamically render games into optionviewentry component
  // // // // 
  render() {
    return(
      <div>
        --- OptionView Component Here ---
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    
  }
};

export default connect(mapStateToProps)(OptionView);