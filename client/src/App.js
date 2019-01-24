import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';

import Grid from './component/grid';
import AddEmployee from './component/employee/add';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          Hello
        <Grid />
          <Route exact path="/add" component={AddEmployee} />
        </div>
      </Router>
    );
  }
}

export default App;
