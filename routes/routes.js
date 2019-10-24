let express = require('express');
let router = express.Router();
let nodemailer = require('nodemailer');
let creds = require('../config/node_config');

router.post('/send', (req, res, next) => {
    let email = req.body.email;
    let message = req.body.message;
    let subject = req.body.subject;

    let mail = {
        from: email,
        to: 'przemus212@gmail.com',  //Change to email address that you want to receive messages on
        subject: subject,
        text: message
    };

    transporter.sendMail(mail, (err, data) => {
        if (err) {
            res.json({
                msg: 'fail'
            })
        } else {
            res.json({
                msg: 'success'
            })
        }
    })
});

module.exports = router;
let transport = {
    host: 'smtp.gmail.com',
    auth: {
        user: creds.USER,
        pass: creds.PASS
    }
};

let transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Server is ready to take messages');
    }
});
