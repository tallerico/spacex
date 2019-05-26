import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Dexie from 'dexie';
import Home from './components/Home';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';

class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<CssBaseline>
						<Route exact path="/" component={Home} />
					</CssBaseline>
				</div>
			</Router>
		);
	}
}

export default App;
