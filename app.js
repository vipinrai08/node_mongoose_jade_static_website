var express = require('express');
var app = express();
var path = require('path');
var router = express.Router();
var _path = __dirname + '/views/';
var mongo = require('mongodb');
// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/Touche', { useNewUrlParser: true });
// var db = mongoose.connection;

app.use(express.static(path.join(__dirname, 'public'), { maxAge: 31557600000 }));

// View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

router.use(function(req, res, next) {
	console.log('/' + req.method);
	next();
});
/**
 * Controllers (route handlers).
//  */
 var homeController = require('./controllers/home');
 app.get('/', homeController.index);
app.use('/', router);

app.listen(3000, function() {
	console.log('Live at Port 3000');
});