import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class Understanding extends Component {
  state = 0;

  handleChange = (understanding) => (event) => {
    event.preventDefault();
    this.setState({
      [understanding]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch({
      type: 'ADD_UNDERSTANDING',
      payload: this.state,
    });
    this.gotoSupport();
  };

  gotoSupport = () => {
    this.props.history.push('/support');
  };

  render() {
    return (
      <div>
        <h1>How well are you understanding the content?</h1>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange('understanding')} type="number" />
          <button type="submit">Next</button>
        </form>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(Understanding);
