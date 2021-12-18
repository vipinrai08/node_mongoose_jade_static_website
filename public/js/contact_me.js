
var nodemailer = require('nodemailer');

app.post('/', async (req, res) => {
    console.log('here')
    console.log(req.body)
        var transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'developer05000',
                pass: 'Aussie@12345'
            }
        });
    
        var mailOptions = {
            from: 'Cars DB <vipin.techindustan@gmail.com>',
            to: "reply.vipinrai@gmail.com",
            subject: 'Forgotten Password', // Subject line
            text: `Please login using this password  ${password}`, // plain text body
            html: `<b>Please login using this password <p style ="color : "red"> ${password}</p></b>` // html body
        };
        transporter.sendMail(mailOptions, function(error, info) {
            if (info) {
                res.render('partials/contact', {
                    layout: false
                });
            } else {
                res.render('partials/contact', {
                    layout: false
                });
            }
        });
    })