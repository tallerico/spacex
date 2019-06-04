const express = require('express');
const cors = require('cors');
const axios = require('axios');
const bodyParser = require('body-parser');
const path = require('path');
const helmet = require('helmet');
const csp = require('helmet-csp');
const uuidv4 = require('uuid/v4');
const app = express();
const port = process.env.PORT || 5000;

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// app.use(function(req, res, next) {
// 	res.locals.nonce = uuidv4();
// 	next();
// });

// app.use(
// 	csp({
// 		directives: {
// 			scriptSrc: [
// 				"'self'",
// 				(req, res) => `'nonce-${res.locals.nonce}'`, // 'nonce-614d9122-d5b0-4760-aecf-3a5d17cf0ac9'
// 			],
// 		},
// 	}),
// );

// app.use(function(req, res) {
// 	res.end(`<script nonce="${res.locals.nonce}"></script>`);
// });

app.use(express.static(path.join(__dirname, '/client/build')));

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get('/api/timetolaunch', function(req, res, next) {
	axios.get('https://api.spacexdata.com/v3/launches/next').then(response => {
		// console.log(response);
		res.send(response.data);
		res.end;
	});
});

app.get('/api/roadster', function(req, res, next) {
	axios.get(
		'https://api.spacexdata.com/v3/roadster'.then(response => {
			// console.log(response);
		}),
	);
});

app.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname, '/client/build'), 'index.html');
	res.end();
});
