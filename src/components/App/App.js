import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Feeling from '../pages/Feeling/Feeling';
import Understanding from '../pages/Understanding/Understanding';
import Comments from '../pages/Comments/Comments';
import Review from '../pages/Review/Review';
import Support from '../pages/Support/Support';

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
            <Route exact path="/understanding" component={Understanding} />
            <Route exact path="/support" component={Support} />
            <Route exact path="/comments" component={Comments} />
            <Route exact path="/review" component={Review} />
          </body>
        </div>
      </Router>
    );
  }
}

export default App;
