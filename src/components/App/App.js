import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Feeling from '../pages/Feeling/Feeling';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Feedback!</h1>
            <h4>
              <i>Don't forget it!</i>
            </h4>
          </header>
          <br />
          <body>
            <Route exact path="/" component={Home} />
            <Route exact path="/feeling" component={Feeling} />
          </body>
        </div>
      </Router>
    );
  }
}

export default App;
