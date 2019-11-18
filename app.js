const bodyParser = require("body-Parser");
const express = require("express")
const nodemailer = require("nodemailer");
const app = express();
const creds = require("node_config")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.post('/api/form', (req, res) => {
    console.log(req.body)
   /const transport = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: creds.USER,
            pass: creds.PASS
        }
    });
    let email = req.body.email;
    let message = req.body.message;
    let subject = req.body.subject;

    const mail = {
        from: email,
        to: creds.USER,  //Change to email address that you want to receive messages on
        subject: subject,
        text: message
    };

    transport.sendMail(mail, (err, response) => {
        if (err) {
            res.json({
                msg: 'fail'
            })
        } else {
            res.json({
                msg: 'success'
            })
            res.render('contact')
        }
    })
});
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`server listening on ${PORT}`)
})



