import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'

const Home = () => (
    <div>
        <Head>
            <title>Home</title>
            <link rel='icon' href='/favicon.ico'/>
        </Head>
        <Nav/>
        <div style={{height: 1000, backgroundColor: 'gray'}}>
            Test
        </div>
    </div>
);

export default Home;
