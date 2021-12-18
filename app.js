var express = require('express');
var app = express();
var path = require('path');
var router = express.Router();
var _path = __dirname + '/views/';
var mongo = require('mongodb');
// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/Touche', { useNewUrlParser: true });
// var db = mongoose.connection;
var nodemailer = require('nodemailer');
var bodyParser = require('body-parser');

const port = process.env.PORT || 5000

app.use(express.static(path.join(__dirname, 'public'), { maxAge: 31557600000 }));

// View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

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

app.post('/contact', async (req, res) => {
console.log('here', req.body)

    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'reply.vipinrai@gmail.com',
            pass: '7275286872'
        }
    });

    var mailOptions = {
        from: 'kshatriya Dharm Sansad <kdskashi19@gmail.com>',
        to: "kdskashi19@gmail.com",
        subject: 'Enquiry', // Subject line
        text: `Please login using this password`, // plain text body
        html: `<b>Please find the below enquiry details by ${req.body.name} <br> Email : ${req.body.email} <br> Phone Number : ${req.body.phone_number} <br> Message : ${req.body.message}</b>` // html body
    };
    transporter.sendMail(mailOptions, function(error, info) {
        if (info) {
            res.render('home', {
                layout: false
            });
        } else {
			console.log('I m here',error)
            res.render('home', {
                layout: false
            });
        }
    });
})

app.listen(port, function() {
	console.log(`Live at Port ${port}`);
});