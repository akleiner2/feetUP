var express 	= require('express');
var app 		= express();
var mongoose 	= require('mongoose');
var morgan 		= require('morgan');
var bodyParser 	= require('body-parser');

var database = require('./config/database');
mongoose.connect(database.url);

var env = process.env.NODE_ENV || 'development';
if ('development' == env){
	app.use(morgan('dev'));
}

app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

require('./app/routes/index.js')(app);

app.listen(3000);
console.log("App is running on port 3000");
