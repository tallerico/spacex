import React from 'react';
import styled from 'styled-components';
import Countdown from './countdown';

const Wrapper = styled.div`
	display: flex;
	padding: 3em;
	justify-content: center;
	text-align: center;
`;

function nextLanch() {
	return (
		<Wrapper>
			<Countdown />
		</Wrapper>
	);
}

export default nextLanch;
