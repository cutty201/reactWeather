// Dependencies:
var express = require('express');

// Express:
var app = express();

// Middelware:
app.use(function (req, res, next) {
	if (req.headers['x-forwarded-proto'] === 'http') {
		next();
	} else {
		res.redirect('http://' + req.hostname + req.url);
	}
});
app.use(express.static('public'));

// Port:
const PORT = process.env.PORT || 3000;

// Starting server:
app.listen(PORT, function (err) {
	if(err) {
		console.log(err);
	} else {
		console.log('Listening on PORT: ' + PORT);
	}
});
