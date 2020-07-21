import Nav from "./nav";
import React, {useEffect, useState} from "react";
import Head from "next/dist/next-server/lib/head";
import Footer from "./footer";
import '../styles/main.scss'
import Hamburger from './hamburgerMenu'
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../redux/actions/modalActions";
import Carousel, {Modal, ModalGateway} from 'react-images'

const Layout = (props) => {
    const [width, setWidth] = useState(1200);
    const dispatch = useDispatch();
    const modalState = useSelector(state => state.modal);

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
            <ModalGateway>
                {modalState.isOpen && (
                    <Modal onClose={() => dispatch(actions.closeModal())}>
                        <Carousel
                            currentIndex={modalState.index}
                            views={modalState.photos}
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