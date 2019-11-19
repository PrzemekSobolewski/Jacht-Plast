const bodyParser = require('body-Parser');
const express = require('express');
const nodemailer = require('nodemailer');
const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.post('/api/form', (req, res) => {
    console.log(req.body);
    const transport = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: "przemus212@gmail.com",
            pass: ""
        },
        tls: {
            rejectUnauthorized: false
        }
    });
    let name = req.body.name;
    let email = req.body.email;
    let message = req.body.message;
    let subject = req.body.subject;

    const htmlDetails = `
        <h2>Wiadomość ze strony JachtPlast</h2>
        <h3>Dane Kontatkowe</h3>
        <p>email: ${email}</p>
        <p>Imię i nazwisko: ${name}</p>
        <h3>Wiadomość</h3>
        <p>${message}</p>`;

    const mail = {
        from: email,
        to: "przemus212@gmail.com",  //Change to email address that you want to receive messages on
        replyTo: email,
        subject: subject,
        text: message,
        html: htmlDetails
    };

    console.log(mail);
    transport.sendMail(mail, (err, response) => {
        if (err) {
            console.log(err);
            res.json({
                msg: 'fail'
            })
        } else {
            res.json({
                msg: 'success'
            });
            console.log(2);
            res.render('contact')
        }
    })
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`server listening on ${PORT}`)
});



