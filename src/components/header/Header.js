import React from 'react';
import styled from 'styled-components';
import Countdown from './Countdown';

const Container = styled.div`
	background-color: #020303;
	padding: 1em;
`;

function Header() {
	return (
		<Container>
			<Countdown />
		</Container>
	);
}

export default Header;
