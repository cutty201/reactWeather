// Dependencies:
var express = require('express');

// Express:
var app = express();

// Middelware:
app.use(express.static('public'));

// Port:
var PORT = 3000;

// Starting server:
app.listen(PORT, function(err) {
	if(err) {
		console.log(err);
	} else {
		console.log('Listening on PORT: ' + PORT);
	}
});
