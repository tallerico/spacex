import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Header from './components/header/Header';
import CurrLaunch from './components/CurrLaunch/CurrLaunch';
import './App.css';

const GlobalStyles = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Roboto:300,900&display=swap');
		font-family: 'Roboto', sans-serif;
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
			<Header />
			<CurrLaunch />
			{/* <Route exact path="/" component={Header} /> */}
		</Router>
	);
}

export default App;
