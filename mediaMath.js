/*
Radhika Mattoo
MediaMath Challenge
March 2016
*/

//Express/Node setup
var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = 5000; //default port


//checks if the passed string contains or is equal to blue
function containsBlue(word){
	return word.indexOf("blue") !== -1;
}

//parses request body according to blue boolean value
function parseBody(body, wantBlue){
	var returnObj = {};
	//clear out new lines, carriage returns, punctuation, and make case insensitive
	string = Object.keys(body).toString().toLowerCase().replace(/(\r\n|\n|\r|[.,\/#!$%\^&\*;:{}=\-_`~()])/gm,"");

	//split string and parse each element as object property
	array = string.split(" ");
	array.forEach(function(word){
		//do we not want blue and the word contains it?
		if(!wantBlue && containsBlue(word)){
			return;
		}else if(word in returnObj){
			returnObj[word]++;
		}else{
			returnObj[word] = 1;
		}
	});
	return returnObj;
}

//MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: false }));
app.use(function(req, res, next) {
  var contentType = req.headers['content-type'] || '';
	mime = contentType.split(';')[0];

	if (mime !== 'application/x-www-form-urlencoded') {
		console.log("ERROR: This is not the specified binary file.");
		return next();
  }
	next();
});

//include blue
app.post('/', function(req, res){
	var toSend = parseBody(req.body, true); //keep blue
	res.status(200).send(toSend);
});

//ignore blue
app.post('/no_blue', function(req, res){
	var toSend = parseBody(req.body, false); //ignore blue
	res.status(200).send(toSend);
});

app.listen(port);
console.log("Hosting at port " + port);
