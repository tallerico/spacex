const express = require('express');
const cors = require('cors');
const axios = require('axios');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get('/timetolaunch', function(req, res, next) {
	axios.get('https://api.spacexdata.com/v3/launches/next').then(response => {
		console.log(response);
		res.send(response.data);
		res.end;
	});
});

app.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname, '/client/build/index.html'));
});
