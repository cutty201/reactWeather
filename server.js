// Dependencies:
var express = require('express');
var cors = require('cors');
var axios = require('axios');

// Express:
var app = express();

// Middelware:
app.use(function (req, res, next) {
	if (req.headers['x-forwarded-proto'] === 'https') {
		res.redirect('http://' + req.hostname + req.url);
	} else {
		next();
	}
});
app.use(express.static('public'));
app.use('/', cors());

// Config Variables:
const PORT = process.env.PORT || 3000;
const API_KEY = process.env.API_KEY;

// OpenWeatherMap API URL
const OPEN_WEATHER_MAP_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&units=metric`;

// API:
app.get('/forecast/:location', function(req, res) {
	var location = req.params.location;
  var encodedLocation = encodeURIComponent(location);
  var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

  axios.get(requestUrl)
    .then(function (res) {
			res.json(res);
    })
    .catch(function (err) {
      res.status(500).send(err);
    });
});

// Starting server:
app.listen(PORT, function (err) {
	if(err) {
		console.log(err);
	} else {
		console.log('Listening on PORT: ' + PORT);
	}
});
