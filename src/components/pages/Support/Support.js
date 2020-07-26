import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class Support extends Component {
  state = {
    feeling: 0,
    understanding: 0,
    support: 0,
    comments: '',
  };

  handleChange = (support) => (event) => {
    event.preventDefault();
    this.setState({
      [support]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch({
      type: 'ADD_SUPPORT',
      payload: this.state,
    });
    this.gotoComments();
  };

  gotoComments = () => {
    this.props.history.push('/comments');
  };

  render() {
    return (
      <div>
        <h1>How well are you being supported?</h1>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange('support')} type="number" />
          <button type="submit">Next</button>
        </form>
      </div>
    );
  }
}

export default connect()(Support);
