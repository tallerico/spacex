import React from 'react';
import styled from 'styled-components';
import Countdown from './countdown';

const Wrapper = styled.div`
	display: flex;
	padding: 3em;
	justify-content: center;
	text-align: center;
`;

function nextLanch(props) {
	return (
		<Wrapper>
			<Countdown launch={props.launch} />
		</Wrapper>
	);
}

export default nextLanch;
