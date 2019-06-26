import React from 'react';
import styled from 'styled-components';
import image from './rocket.png';

const Container = styled.div`
	padding: 1em;
	background-image: url(${image});
	background-repeat: no-repeat;
	background-size: cover;
	height: 75vh;
`;

function CurrLaunch() {
	return <Container />;
}

export default CurrLaunch;
