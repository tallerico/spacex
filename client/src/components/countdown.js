import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import backgroundImg from '../img/space.jpg';
import 'moment-timezone';
const moment = require('moment');

const Container = styled.div`
	display: flex;
	flex-direction: column;
	padding: 2em;
	background-image: url(${backgroundImg});
	font-family: 'Press Start 2P', cursive;
	color: white;
	font-size: 0.9em;
	justify-content: center;
	text-align: center;
	& span {
		margin-bottom: 20px;
	}
	@media (min-width: 600px) {
		font-size: 1.5em;
	}
	@media (min-width: 940px) {
		font-size: 2em;
	}
`;

const TimeContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	color: black;
`;

const DigitContainer = styled.div`
	display: flex;
	flex-direction: column;
	border-radius: 5px;
	background-color: #fff;
	-webkit-box-shadow: 0px 0px 42px -13px rgba(0, 129, 235, 1);
	-moz-box-shadow: 0px 0px 42px -13px rgba(0, 129, 235, 1);
	box-shadow: 0px 0px 42px -13px rgba(0, 129, 235, 1);
	padding: 0.5em;
	margin-right: 10px;
	&:last-child {
		margin: 0;
	}
`;

const countdown = props => {
	const [days, setDays] = useState('00');
	const [hours, setHours] = useState('00');
	const [minutes, setMinutes] = useState('00');
	const [seconds, setSeconds] = useState('00');

	//gets difference between 2 dates using moment
	function getDiff(currDate, targetDate) {
		const diff = targetDate.diff(currDate);
		const diffDuration = moment.duration(diff);
		//setting state with data for next launch
		setDays(diffDuration.days());
		setHours(diffDuration.hours());
		setMinutes(diffDuration.minutes());
		setSeconds(diffDuration.seconds());
	}

	useEffect(() => {
		//getting current date and time
		const currentDate = moment().format();
		let launchDate;

		axios
			.get('http://localhost:5000/timetolaunch')
			.then(function(response) {
				//setting launch time to the moment object
				launchDate = moment.utc(response.data.launch_date_local);
				getDiff(currentDate, launchDate);
			})
			.then(() => {
				setInterval(() => {
					const newCurrDate = moment().format();
					getDiff(newCurrDate, launchDate);
				}, 1000);
			});
	});

	return (
		<Container>
			<span>Time To Next SpaceX Launch</span>
			<TimeContainer>
				<DigitContainer>
					<div>Days</div>
					<div>{days < 10 ? `0${days}` : `${days}`}</div>
				</DigitContainer>

				<DigitContainer>
					<div>Hours</div>
					<div>{hours < 10 ? `0${hours}` : `${hours}`}</div>
				</DigitContainer>

				<DigitContainer>
					<div>Minutes</div>
					<div>{minutes < 10 ? `0${minutes}` : `${minutes}`}</div>
				</DigitContainer>

				<DigitContainer>
					<div>Seconds</div>
					<div>{seconds < 10 ? `0${seconds}` : `${seconds}`}</div>
				</DigitContainer>
				{/* <h1>
					{days < 10 ? `0${days}` : `${days}`}:{hours < 10 ? `0${hours}` : `${hours}`}:
					{minutes < 10 ? `0${minutes}` : `${minutes}`}:
					{seconds < 10 ? `0${seconds}` : `${seconds}`}
				</h1> */}
			</TimeContainer>
		</Container>
	);
};

export default countdown;
