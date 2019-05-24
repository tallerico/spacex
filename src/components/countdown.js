import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import backgroundImg from '../img/space.jpg';
import 'moment-timezone';
const moment = require('moment');

const TimeContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	font-family: 'Major Mono Display', monospace;
	font-size: 0.8em;
	padding: 2em;
	background-image: url(${backgroundImg});
	@media (min-width: 600px) {
		font-size: 1.5em;
	}
	@media (min-width: 940px) {
		font-size: 2em;
	}
`;

const DigitContainer = styled.div`
	display: flex;
	flex-direction: column;
	border-radius: 5px;
	background-color: #fff;
	-webkit-box-shadow: 0px 0px 42px -13px rgba(255, 255, 255, 1);
	-moz-box-shadow: 0px 0px 42px -13px rgba(255, 255, 255, 1);
	box-shadow: 0px 0px 42px -13px rgba(255, 255, 255, 1);
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
		axios.get('https://api.spacexdata.com/v3/launches/next').then(function(response) {
			//getting current date and time
			const currentDate = moment().format();
			//setting launch time to the moment object
			const launchDate = moment.utc(response.data.launch_date_local);
			getDiff(currentDate, launchDate);
			setInterval(() => {
				const newCurrDate = moment().format();
				getDiff(newCurrDate, launchDate);
			}, 1000);
		});
	});

	return (
		<div>
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
		</div>
	);
};

export default countdown;
