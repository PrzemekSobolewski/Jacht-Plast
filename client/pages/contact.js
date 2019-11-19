import React from 'react'
import Layout from "../components/Layout";
import axios from 'axios';

const Contact = () => {

    let handleSubmit = async (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        const subject = document.getElementById('subject').value;

        const instance = axios.create({
            baseURL:"http://localhost:8080",
        });
        if(!((name.trim().length || email.trim().length || subject.trim().length) === 0)) {
            instance.post('/api/form', {
                name: name,
                email: email,
                subject: subject,
                message: message
            }).then((response) => {
                if (response.data.msg === 'success') {
                    alert("Message Sent.");
                    resetForm();
                } else if (response.data.msg === 'fail') {
                    alert("Message failed to send.")
                }
            })
        }else {
            alert("Przed wysłaniem wiadomości wypełnij wszystkie pola");
        }
    };

    function resetForm(){
        document.getElementById('contact-form').reset();
    }

    return(
        <Layout>
            <div className={"contact_div"}>
                <div className={"mail_data_div"}>
                    <div className={"contact_data"} style={{padding: 4}}>
                        <h1>Jacht-Plast</h1>
                        <h2>Zdzisław Sobolewski</h2>

                        <h3>Adres:</h3>
                        Ul. Przemysłowa 4<br/>
                        26-340 Drzewica<br/>
                        <h3>Kontakt:</h3>
                        Tel/fax (48) 375 67 35<br/>
                        Tel. kom. 601 256 133<br/>
                        <h3>Email:</h3>
                        jachtplast@gmail.com<br/>
                    </div>
                    <div className={"mail_form"}>
                        <form id="contact-form" method="POST" role={'form'} onSubmit={handleSubmit}>
                            <input placeholder={"Imię i nazwisko"} type={"text"} name={"name"} id={'name'} className={""}/>
                            <input placeholder={"Email"} type={"text"} name={"email"} id={'email'} className={""}/>
                            <input placeholder={"Temat"} type={"text"} name={"subject"} id={'subject'} className={""}/>
                            <textarea defaultValue={"Wiadomość"} className={"message"} id={'message'} name={"message"}/>
                            <button type="submit" className="submitButton">Wyślij</button>
                        </form>
                    </div>
                </div>
                <div className={"map_div"}>
                    <div className="google_maps">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9945.949450330274!2d20.4618076!3d51.4492078!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x72536c3f299847fc!2sPHUP%20JACHT-PLAST!5e0!3m2!1spl!2spl!4v1571140334742!5m2!1spl!2spl"/>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Contact;
