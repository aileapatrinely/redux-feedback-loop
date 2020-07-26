import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class Review extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>{this.props.store.feedbackReducer.map(feedback)}</li>
        </ul>
        <button>Submit</button>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(Review);
