import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class Home extends Component {
  gotoFeeling = () => {
    this.props.history.push('/feeling');
  };

  render() {
    return (
      <div>
        <button onClick={this.gotoFeeling}>Start Feedback!</button>
      </div>
    );
  }
}

export default Home;
