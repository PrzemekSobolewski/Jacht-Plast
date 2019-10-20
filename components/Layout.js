import Nav from "./nav";
import React from "react";
import Head from "next/dist/next-server/lib/head";
import Footer from "./footer";
import '../styles/main.scss'
import {ScrollTo} from "react-scroll-to";
import {FaAngleUp} from "react-icons/fa";

const Layout = (props) => {
    return (
        <>
            <div className={'container'}>
                <Head>
                    <title>Jacht-Plast</title>
                    <link rel="shortcut icon" type="image/x-icon" href='../public/icon.png'/>
                </Head>
                <Nav/>
                {props.children}
                <Footer/>
            </div>
            <ScrollTo>
                {({scrollTo}) => <div className={"arrow_up_layout"}
                                      onClick={() => scrollTo({x: 0, y: 0, smooth: true})}>
                    <FaAngleUp/>
                </div>}
            </ScrollTo>
        </>
    )
};

export default Layout;