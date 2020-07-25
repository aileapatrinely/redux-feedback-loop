import React, { Component } from 'react';
import axios from 'axios';

class Understanding extends Component {
  addFeelings = (feedback) => {
    this.setState({
      feedback: { ...this.state.feedback, feedback },
    });
  };

  handleChange = () => {
    console.log('Handling it.');
  };

  handleClick = () => {
    console.log(`I SAID I'M HANDLING IT!`);
  };

  render() {
    return (
      <div>
        <h1>How well are you understanding the content?</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange()}
            type="number"
            value={this.props.state.feedback.understanding}
          />
          <button type="submit">Next</button>
        </form>
      </div>
    );
  }
}

export default Understanding;
