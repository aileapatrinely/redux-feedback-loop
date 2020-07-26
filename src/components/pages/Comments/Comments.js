import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class Comments extends Component {
  state = {
    feeling: 0,
    understanding: 0,
    support: 0,
    comments: '',
  };

  handleChange = (comments) => (event) => {
    event.preventDefault();
    this.setState({
      [comments]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch({
      type: 'ADD_COMMENTS',
      payload: this.state,
    });
    this.gotoReview();
  };

  gotoReview = () => {
    this.props.history.push('/review');
  };

  render() {
    return (
      <div>
        <h1>Any comments you want to leave?</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange('comments')}
            type="Text"
            placeholder="Please type comments here."
          />
          <button type="submit">Next</button>
        </form>
      </div>
    );
  }
}

export default connect()(Comments);
