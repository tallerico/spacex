import React, { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';
import axios from 'axios';
import 'moment-timezone';
import ButtonDark from './ButtonDark';
const moment = require('moment');

const Container = styled.div`
	display: flex;
	flex-direction: column;
	padding: 2em;
	background-color: #050404
	font-family: 'Roboto', sans-serif;
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
	margin-bottom: 30px;
`;

const DigitContainer = styled.div`
	display: flex;
	flex-direction: column;
	border-radius: 5px;
	border: 2px solid #605c5e;
	padding: 0.5em;
	margin-right: 10px;
	&:last-child {
		margin: 0;
	}
`;

const ParagraphConatiner = styled.div`
	border-top: 2px solid #f1b102;
	text-align: left;
	padding: 2em;
`;

//loader for detail info
const loader = <Loader type="Puff" color="#00BFFF" height="100" width="100" />;

const countdown = props => {
	const [days, setDays] = useState('0');
	const [hours, setHours] = useState('0');
	const [minutes, setMinutes] = useState('0');
	const [seconds, setSeconds] = useState('0');
	const [details, setDetails] = useState(loader);

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
		const currentDate = moment().format();
		const fetchData = async () => {
			const result = await axios.get('http://localhost:5000/timetolaunch');
			console.log(result);
			const launchDate = moment.utc(result.data.launch_date_local);
			setDetails(result.data.details);
			getDiff(currentDate, launchDate);
			setInterval(() => {
				const newCurrDate = moment().format();
				getDiff(newCurrDate, launchDate);
			}, 1000);
		};

		fetchData();
	}, []);

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
			</TimeContainer>
			<ParagraphConatiner>{details}</ParagraphConatiner>
		</Container>
	);
};

export default countdown;
