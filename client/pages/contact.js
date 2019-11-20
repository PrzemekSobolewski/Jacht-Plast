import React, {useState} from 'react'
import Layout from '../components/Layout';
import axios from 'axios';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [subject, setSubject] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const instance = axios.create({
            baseURL: 'http://localhost:8080',
        });
        if (!((name.trim().length || email.trim().length || subject.trim().length) === 0)) {
            let response = await instance.post('/api/form', {
                name: name,
                email: email,
                subject: subject,
                message: message
            });
            if (response.data.msg === 'success') {
                alert('Message Sent.');
                resetForm();
            } else if (response.data.msg === 'fail') {
                alert('Message failed to send.')
            }
        } else {
            alert('Przed wysłaniem wiadomości wypełnij wszystkie pola');
        }
    };

    const resetForm = () => {
        setName('');
        setMessage('');
        setSubject('');
        setEmail('');
    };

    return (
        <Layout>
            <div className={'contact_div'}>
                <div className={'mail_data_div'}>
                    <div className={'contact_data'}>
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
                    <div className={'mail_form'}>
                        <form id='contact-form' className={'contact-form'} method='POST' role={'form'} onSubmit={handleSubmit}>
                            <input placeholder={'Imię i nazwisko'} type={'text'} name={'name'} id={'name'}
                                   value={name} onChange={e => setName(e.target.value)}/>
                            <input placeholder={'Email'} type={'text'} name={'email'} id={'email'}
                                   value={email} onChange={e => setEmail(e.target.value)}/>
                            <input placeholder={'Temat'} type={'text'} name={'subject'} id={'subject'}
                                   value={subject} onChange={e => setSubject(e.target.value)}/>
                            <textarea id={'message'} name={'message'} value={message} placeholder={'Wpisz wiadomość...'}
                                      onChange={e => setMessage(e.target.value)}/>
                            <button type='submit' className='submitButton'>Wyślij</button>
                        </form>
                    </div>
                </div>
                <div className={'map_div'}>
                    <div className='google_maps'>
                        <iframe
                            src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9945.949450330274!2d20.4618076!3d51.4492078!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x72536c3f299847fc!2sPHUP%20JACHT-PLAST!5e0!3m2!1spl!2spl!4v1571140334742!5m2!1spl!2spl'/>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Contact;
