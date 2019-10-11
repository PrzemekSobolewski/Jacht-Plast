import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import Layout from "../components/Layout";

const Contact = () => (
    <Layout>
        <div style={{height: 1000, backgroundColor: 'gray'}}>
            <div style={{padding:4}}>
                <h1>Jacht-Plast</h1>
                <h2>Zdzisław Sobolewski</h2>

                <h3>Adres</h3>
                Ul. Przemysłowa 4<br/>
                26-340 Drzewica<br/>
                <h3>Kontakt</h3>
                Tel/fax (48) 375 67 35<br/>
                Tel. kom. 601 256 133<br/>
                <h3>Email:</h3>
                jachtplast@gmail.com<br/>
                biuro@budowairemontyjachtow.pl<br/>
            </div>
        </div>
    </Layout>
);
export default Contact