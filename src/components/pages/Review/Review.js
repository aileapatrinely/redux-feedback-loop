import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class Review extends Component {
  postFeedback(feedback) {
    axios
      .post('/feedback', feedback)
      .then((response) => {
        console.log('Posted?');
      })
      .catch((err) => {
        console.log('Error in post', err);
        alert('Error in postFeedback');
      });
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <p>{this.props.store.feedbackReducer.feeling}</p>
        <p>{this.props.store.feedbackReducer.understanding}</p>
        <p>{this.props.store.feedbackReducer.support}</p>
        <p>{this.props.store.feedbackReducer.comments}</p>
        <button onClick={this.postFeedback(this.props.store.feedbackReducer)}>
          Submit
        </button>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(Review);
