import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Home from './components/Home';
import './App.css';

const GlobalStyles = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap');
		font-family: 'Roboto Mono', monospace;
		background-color: #303030;
		color: white;
	}
	
	h1 {
		font-size: 1rem;
		@media (min-width: 400px) {
					font-size: 1.3rem;
		}
		@media (min-width: 600px) {
			font-size: 1.6rem;
		}
	}
`;

function App() {
	return (
		<Router>
			<GlobalStyles />
			<Route exact path="/" component={Home} />
		</Router>
	);
}

export default App;
