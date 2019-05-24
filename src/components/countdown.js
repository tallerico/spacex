import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import 'moment-timezone';
const moment = require('moment');

const countdown = props => {
	const [days, setDays] = useState();
	const [hours, setHours] = useState();
	const [minutes, setMinutes] = useState();
	const [seconds, setSeconds] = useState();

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
			setTimeout(() => {
				const newCurrDate = moment().format();
				getDiff(newCurrDate, launchDate);
			}, 1000);
		});
	});

	return (
		<div>
			<h1>
				{days}:{hours}:{minutes}:{seconds}
			</h1>
		</div>
	);
};

export default countdown;
