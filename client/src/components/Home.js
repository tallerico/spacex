import React, { useState, useEffect } from 'react';
import NextLaunch from './NextLaunch';
import Card from './DataBlock';
import Section from './Section';
import axios from 'axios';

function home() {
	const [launchData, setLaunchData] = useState();

	useEffect(() => {
		const fetchData = async () => {
			const result = await axios.get('/api/timetolaunch');
			setLaunchData(result.data);
			console.log(result);
		};

		fetchData();
	}, []);
	return (
		<div>
			<NextLaunch launch={launchData} />
			<Section>
				<Card>
					<p>Hello</p>
				</Card>
			</Section>
		</div>
	);
}

export default home;
