const bodyParser = require('body-parser');
const express = require('express');
const nodemailer = require('nodemailer');
const app = express();

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "https://www.jacht-plast.pl"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.post('/api/form', (req, res) => {
    const transport = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        auth: {
            user: "przemus212@gmail.com",
            pass: "..."
        },
        secureConnection: 'false',
        tls: {
            ciphers: 'SSLv3',
            rejectUnauthorized: false
        }
    });

    let {name, email, message, subject} = req.body;

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

    transport.sendMail(mail, (err, response) => {
        if (err) {
            res.json({msg: 'fail'})
        } else {
            res.json({msg: 'success'});
        }
    })
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`server listening on ${PORT}`)
});



