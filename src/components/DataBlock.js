import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
	background-color: #4d4c4b;
	-webkit-box-shadow: 0px 0px 19px 1px rgba(0, 0, 0, 0.58);
	-moz-box-shadow: 0px 0px 19px 1px rgba(0, 0, 0, 0.58);
	box-shadow: 0px 0px 19px 1px rgba(0, 0, 0, 0.58);
	padding: 1.5em;
`;

function dataBlock() {
	return <Card />;
}

export default dataBlock;
