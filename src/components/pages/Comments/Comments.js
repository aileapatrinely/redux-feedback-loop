import React, { Component } from 'react';
import axios from 'axios';

class Comments extends Component {
  handleChange = () => {
    console.log('Handling it.');
  };

  handleClick = () => {
    console.log(`I SAID I'M HANDLING IT!`);
  };

  render() {
    return (
      <div>
        <h1>Any comments you want to leave?</h1>
        <input
          onChange={this.handleChange()}
          type="Text"
          placeholder="Please type comments here."
        />
        <button onClick={this.handleClick()}>Next</button>
      </div>
    );
  }
}

export default Comments;
