import Nav from "./nav";
import React, {useEffect, useState, useRef} from "react";
import Head from "next/dist/next-server/lib/head";
import Footer from "./footer";
import '../styles/main.scss'
import {ScrollTo} from "react-scroll-to";
import {FaAngleUp} from "react-icons/fa";
import Hamburger from './hamburgerMenu'

const Layout = (props) => {
    const [width, setWidth] = useState(1200);
    const [arrowUp, setArrowUp] = useState(false);

    const arrowElement = (scrollTo) => {
        return arrowUp ?
            (
                <div className={"arrow_up_layout_active"}
                     onClick={() => {
                         scrollTo({x: 0, y: 0, smooth: true});
                         setArrowUp(false);
                     }}>
                    <FaAngleUp/>
                </div>
            )
            :
            (
                <div className={"arrow_up_layout"}
                     onClick={() => {
                         scrollTo({x: 0, y: 1500, smooth: true});
                         setArrowUp(true);
                     }}>
                    <FaAngleUp/>
                </div>
            )
    };
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
                    width > 1100 ? <Nav/> : <Hamburger/>
                }
                {props.children}
                <Footer/>
            </div>
            <ScrollTo>
                {({scrollTo}) => arrowElement(scrollTo)}
            </ScrollTo>
        </>
    )
};

export default Layout;