import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';

import Grid from './component/grid';
import AddEmployee from './component/employee/add';

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Router>
					<div className="App">
						<h1 className="text-center">Hello</h1>
						<Route exact path="/add" component={AddEmployee} />
						<Route exact path="/list" component={Grid} />
					</div>
				</Router>
			</Provider>
		);
	}
}

export default App;
