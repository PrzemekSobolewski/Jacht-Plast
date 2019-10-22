import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import Layout from "../components/Layout";
import ReactContactForm from 'react-mail-form';

const Contact = () => (
    <Layout>
        <div className={"contact_div"}>
            <div className={"mail_data_div"}>
                <div className={"contact_data"} style={{padding:4}}>
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
                    <input placeholder={"Email"} type={"text"} name={"email"} className={""}/>
                    <input placeholder={"Temat"} type={"text"} name={"topic"} className={""}/>
                    <textarea placeholder={"Wiadomość"} className={"message"}>

                        </textarea>
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
export default Contact