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
        <h2>Feelings:</h2>
        <h3>{this.props.store.feedbackReducer.feeling}</h3>
        <h2>Understanding:</h2>
        <h3>{this.props.store.feedbackReducer.understanding}</h3>
        <h2>Support:</h2>
        <h3>{this.props.store.feedbackReducer.support}</h3>
        <h2>Comments:</h2>
        <h3>{this.props.store.feedbackReducer.comments}</h3>
        <button onClick={this.postFeedback(this.props.store.feedbackReducer)}>
          Submit
        </button>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(Review);
