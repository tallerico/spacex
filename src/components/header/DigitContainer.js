import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	margin-right: 20px;
`;

const NameWrap = styled.div`
	font-size: 1rem;
`;

const DigitWrap = styled.div`
	font-size: 1.5rem;
`;

function digitContainer(props) {
	return (
		<Wrapper>
			<NameWrap>{props.type}</NameWrap>
			<DigitWrap>{props.num < 10 ? `0${props.num}` : `${props.num}`}</DigitWrap>
		</Wrapper>
	);
}

export default digitContainer;
