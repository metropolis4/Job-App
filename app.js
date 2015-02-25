var express = require('express');
var bodyParser = require('body-parser');
var indexControllers = require('./controllers/index.js');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/MyCompany');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

app.get('/', indexControllers.index);

// displays a list of applicants
app.get('/applicants', indexControllers.showApplicants);

// creates and applicant
app.post('/applicant', indexControllers.newApp);
app.post('/delete', indexControllers.delete);


var server = app.listen(8441, function() {
	console.log('Express server listening on port ' + server.address().port);
});
