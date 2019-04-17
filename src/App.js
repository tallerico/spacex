import React, { Component } from 'react'
import MainHeader from './components/MainHeader'
import Navigation from './components/Navigation'
import './App.css'

class App extends Component {
	render() {
		return (
			<div>
				<Navigation />
				<MainHeader />
			</div>
		)
	}
}

export default App
