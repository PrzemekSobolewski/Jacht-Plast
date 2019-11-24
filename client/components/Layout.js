import Nav from "./nav";
import React, {useEffect, useState} from "react";
import Head from "next/dist/next-server/lib/head";
import Footer from "./footer";
import '../styles/main.scss'
import {ScrollTo} from "react-scroll-to";
import {FaAngleUp} from "react-icons/fa";
import Hamburger from './hamburgerMenu'

const Layout = (props) => {
    const [width, setWidth] = useState(1200);

    useEffect(() => {
        setWidth(window.innerWidth);
    }, []);
    return (
        <>
            <div className={'container'}>
                <Head>
                    <title>Jacht-Plast</title>
                    <link rel="shortcut icon" type="image/x-icon" href='../public/icon.png'/>
                </Head>
                {
                    width > 800 ?  <Nav/> : <Hamburger/>
                }
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