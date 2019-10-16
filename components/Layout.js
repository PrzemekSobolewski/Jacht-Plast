import Nav from "./nav";
import React from "react";
import Head from "next/dist/next-server/lib/head";
import Footer from "./footer";
import '../styles/main.scss'

const Layout = (props) => {
    return (
        <div className={'container'}>
            <Head>
                <title>Jacht-Plast</title>
                <link rel='icon' href='../assets/images/logo.png'/>
            </Head>
            <Nav/>
            {props.children}
            <Footer/>
        </div>
    )
};

export default Layout;