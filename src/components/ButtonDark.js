import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
	border-radius: 100px;
	border: solid 2px #a5db4e;
	background-color: rgba(0, 0, 0, 0);
	padding: 0.8em;
	color: white;
	transition: 0.5s;
	font-size: 0.8em;
	&:hover {
		border: solid 2px #605c5e;
		background-color: rgb(165, 219, 78);
	}
`;

function buttonDark(props) {
	return <Button onClick={props.onClick}>{props.name}</Button>;
}
export default buttonDark;
