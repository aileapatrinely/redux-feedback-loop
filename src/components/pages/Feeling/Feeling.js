import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class Feeling extends Component {
  state = 0;

  handleChange = (feeling) => (event) => {
    event.preventDefault();
    this.setState({
      [feeling]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch({
      type: 'ADD_FEELINGS',
      payload: this.state,
    });
    this.gotoUnderstanding();
  };

  gotoUnderstanding = () => {
    this.props.history.push('/understanding');
  };

  render() {
    return (
      <div>
        <h1>How are you feeling today?</h1>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange('feeling')} type="number" />
          <button type="submit">Next</button>
        </form>
      </div>
    );
  }
}

export default connect()(Feeling);
