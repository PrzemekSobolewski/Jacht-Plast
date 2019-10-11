import Nav from "./nav";
import React from "react";
import Head from "next/dist/next-server/lib/head";

const Layout = (props) => {
    return (
        <div>
            <Head>
                <title>Jacht-Plast</title>
                <link rel='icon' href='/favicon.ico'/>
            </Head>
            <Nav/>
            {props.children}
        </div>
    )
};

export default Layout;