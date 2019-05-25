import React, { Component } from 'react';
import Dexie from 'dexie';
import MainHeader from './components/MainHeader';
import Navigation from './components/Navigation';
import CssBaseline from '@material-ui/core/CssBaseline';
import Countdown from './components/countdown';
import './App.css';

class App extends Component {
	render() {
		return (
			<div>
				<CssBaseline>
					<Navigation />

					<Countdown />
				</CssBaseline>
			</div>
		);
	}
}

export default App;
