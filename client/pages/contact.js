import React, {useState} from 'react'
import Layout from '../components/Layout';
import axios from 'axios';
import {BounceLoader} from 'react-spinners';
import {css} from '@emotion/core';
import {useSelector} from "react-redux";

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [subject, setSubject] = useState('');
    const [loading, setLoading] = useState(true);
    const switchState = useSelector(state => state.switch);

    const hideLoading = () => {
        setLoading(false);
    };

    const spinnerStyle = css`
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        display: block;
        margin: auto;
    `;

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
            alert(switchState.language.alert);
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
                <h2>{switchState.language.contactHeader}</h2>
                <div className={'contact_content'}>
                    <div className={'contact_data'} dangerouslySetInnerHTML={{__html: switchState.language.contactText}}/>

                    <form id='contact-form' className={'contact_form'} method='POST' role={'form'}
                          onSubmit={handleSubmit}>
                        <input placeholder={switchState.language.formName} type={'text'} name={'name'} id={'name'}
                               value={name} onChange={e => setName(e.target.value)}/>
                        <input placeholder={'Email'} type={'text'} name={'email'} id={'email'}
                               value={email} onChange={e => setEmail(e.target.value)}/>
                        <input placeholder={switchState.language.formTopic} type={'text'} name={'subject'} id={'subject'}
                               value={subject} onChange={e => setSubject(e.target.value)}/>
                        <textarea id={'message'} name={'message'} value={message} placeholder={switchState.language.formMessage}
                                  onChange={e => setMessage(e.target.value)}/>
                        <button type='submit' className='submitButton'>{switchState.language.formSend}</button>
                    </form>
                </div>
                <div className={'map_div'}>
                    {loading ?
                        (<BounceLoader
                            css={spinnerStyle}
                            className={"spinner"}
                            sizeUnit={"px"}
                            size={100}
                            color={'#3f89a2'}
                            loading={true}
                        />) : null
                    }
                    <div className='google_maps'>
                        <iframe
                            src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9945.949450330274!2d20.4618076!3d51.4492078!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x72536c3f299847fc!2sPHUP%20JACHT-PLAST!5e0!3m2!1spl!2spl!4v1571140334742!5m2!1spl!2spl'
                            onLoad={hideLoading}
                        />
                    </div>

                </div>
            </div>
        </Layout>
    );
};

export default Contact;
