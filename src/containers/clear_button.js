import React, {Component} from 'react';
import { connect } from 'react-redux';
import { clearList } from '../actions/index';
import {bindActionCreators} from 'redux';

class ClearButton extends Component {
  constructor(props) {
    super(props);

    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick() {
    this.props.clearList();
  }

  render() {
    return (
      <div className="wrapper">
        <button
        id="clear-button"
        className="btn btn-default"
        onClick={this.onButtonClick} >
          Clear
        </button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({clearList: clearList}, dispatch);
}

export default connect(null, mapDispatchToProps)(ClearButton);
