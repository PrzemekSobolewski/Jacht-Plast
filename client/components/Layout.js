import Nav from "./nav";
import React, {useEffect, useState} from "react";
import Head from "next/dist/next-server/lib/head";
import Footer from "./footer";
import '../styles/main.scss'
import {ScrollTo} from "react-scroll-to";
import {FaAngleUp} from "react-icons/fa";
import Hamburger from './hamburgerMenu'
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../redux/actions/modalActions";
import Carousel, {Modal, ModalGateway} from 'react-images'

const Layout = (props) => {
    const [width, setWidth] = useState(1200);
    const [arrowUp, setArrowUp] = useState(false);
    const dispatch = useDispatch();
    const modalState = useSelector(state => state.modal);

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
            <ModalGateway>
                {modalState.isOpen && (
                    <Modal onClose={() => dispatch(actions.closeModal())}>
                        <Carousel
                            currentIndex={modalState.index}
                            views={modalState.photos}
                            frameProps = {{
                                autoSize : 'height'
                            }}
                            autoSize={ {
                                width: 2000,
                                height: 500
                            }}
                        />
                    </Modal>
                )}
            </ModalGateway>
        </>
    )
};

export default Layout;