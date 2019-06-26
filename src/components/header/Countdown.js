import React, { useState, useEffect, Fragment } from 'react';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';
import DigitContainer from './DigitContainer';
import axios from 'axios';
import 'moment-timezone';
const moment = require('moment');

const Wrapper = styled.div`
	display: flex;
	justify-content: start;
	font-size: 3em;
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
			const result = await axios.get('https://api.spacexdata.com/v3/launches/next');
			setDetails(result.data.details);

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
		<Fragment>
			<h1>TIME TO LAUNCH</h1>
			<Wrapper>
				{days < 10 ? `0${days}` : `${days}`}:{hours < 10 ? `0${hours}` : `${hours}`}:
				{minutes < 10 ? `0${minutes}` : `${minutes}`}:{seconds < 10 ? `0${seconds}` : `${seconds}`}
			</Wrapper>
		</Fragment>
	);
};

export default countdown;
