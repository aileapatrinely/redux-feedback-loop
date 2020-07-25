import React, { Component } from 'react';
import axios from 'axios';

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
    this.setState({
      feedback: {
        [feeling]: event.target.value,
      },
    });
  };

  handleClick = () => {
    console.log(`I SAID I'M HANDLING IT!`);
  };

  render() {
    return (
      <div>
        <h1>How are you feeling today?</h1>
        <input onChange={this.handleChange()} type="number" />
        <button onClick={this.handleClick()}>Next</button>
      </div>
    );
  }
}

export default Feeling;
