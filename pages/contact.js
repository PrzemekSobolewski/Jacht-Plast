import React, {useState} from 'react'
import Layout from '../components/Layout';
import axios from 'axios';
import {BounceLoader} from 'react-spinners';
import {css} from '@emotion/core';
import {useSelector} from "react-redux";
import {Helmet} from "react-helmet";
import MessageResult from "../components/MessageResult"

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [subject, setSubject] = useState('');
    const [loading, setLoading] = useState(true);
    const [sendingResult, setSendingResult] = useState(null);
    const [buttonDisabled, setButtonDisabled] = useState(false)
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
        lockButton();
        e.preventDefault();
        const instance = axios.create({
            baseURL: 'https://cocky-wilson-df27de.netlify.com',
        });
        if (!((name.trim().length || email.trim().length || subject.trim().length) === 0)) {
            let response = await instance.post('/.netlify/functions/api/form', {
                name: name,
                email: email,
                subject: subject,
                message: message
            });
            if (response.data.msg === 'success') {
                setSendingResult("success");
                resetForm();

            } else if (response.data.msg === 'fail') {
                setSendingResult("error");
                setTimeout((unlockButton()), 1000)
            }
        } else {
            alert(switchState.language.alert);
            setTimeout((unlockButton()), 1000)
        }
    };

    const resetForm = () => {
        setName('');
        setMessage('');
        setSubject('');
        setEmail('');
    };

    function lockButton () {
        setButtonDisabled(true);
    }

    function unlockButton() {
        setButtonDisabled(false);

    }

    return (
        <Layout>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Kontakt - Jacht Plast</title>
                <meta name="description" content="Prosimy o kontakt z Jacht Plast telefonicznie lub drogą elektroniczną."/>
            </Helmet>
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
                        <div>
                            <button type='submit' disabled={buttonDisabled} className='submitButton'>{switchState.language.formSend}</button>
                            <MessageResult result={sendingResult}/>
                        </div>
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
                        <iframe title={"Jacht-Plast Google Maps Localization"}
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
