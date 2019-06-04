import React, { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';
import DigitContainer from './count_components/DigitContainer';
import axios from 'axios';
import 'moment-timezone';
import ButtonDark from './ButtonDark';
const moment = require('moment');

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
`;

//loader for detail info
const loader = <Loader type="Puff" color="#00BFFF" height="100" width="100" />;

const countdown = props => {
	const [days, setDays] = useState('0');
	const [hours, setHours] = useState('0');
	const [minutes, setMinutes] = useState('0');
	const [seconds, setSeconds] = useState('0');

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
			const result = await axios.get('/api/timetolaunch');
			console.log(result);
			const launchDate = moment.utc(result.data.launch_date_local);
			getDiff(currentDate, launchDate);
			setInterval(() => {
				const newCurrDate = moment().format();
				getDiff(newCurrDate, launchDate);
			}, 1000);
		};

		fetchData();
	}, []);

	return (
		<div>
			<h1>Time To Next SpaceX Launch</h1>
			<Wrapper>
				<DigitContainer type="Days" num={days} />
				<DigitContainer type="Hours" num={hours} />
				<DigitContainer type="Minutes" num={minutes} />
				<DigitContainer type="Seconds" num={seconds} />
			</Wrapper>
		</div>
	);
};

export default countdown;
