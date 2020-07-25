import React, { Component } from 'react';
import axios from 'axios';

class Understanding extends Component {
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
        <input onChange={this.handleChange()} type="number" />
        <button onClick={this.handleClick()}>Next</button>
      </div>
    );
  }
}

export default Understanding;
