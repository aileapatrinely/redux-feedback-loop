import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class Feeling extends Component {
  state = {
    feedback: {
      feeling: 0,
      understanding: 0,
      support: 0,
      comments: '',
    },
  };

  handleChange = (feeling) => (event) => {
    event.preventDefault();
    this.setState({
      feedback: { [feeling]: event.target.value },
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch({
      type: 'ADD_FEELINGS',
      payload: this.state.feedback,
    });
    this.gotoUnderstanding();
    this.props.addFeelings(this.props.feedback);
  };

  gotoUnderstanding = () => {
    this.props.history.push('/understanding');
  };

  render() {
    return (
      <div>
        <h1>How are you feeling today?</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange()}
            type="number"
            value={this.state.feedback.feeling}
          />
          <button type="submit">Next</button>
        </form>
      </div>
    );
  }
}

export default connect()(Feeling);
