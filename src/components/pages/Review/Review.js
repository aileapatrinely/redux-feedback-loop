import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class Review extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <p>Review!</p>
        <button>Submit</button>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(Review);
