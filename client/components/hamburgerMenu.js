import {elastic as Menu} from "react-burger-menu";
import React, {useContext, useEffect, useState} from "react";
import Link from "next/dist/client/link";
import NavigationContext from "./NavigationContext";
import HAMBURGER from '../assets/hamburger.png'
import DELETE from '../assets/delete.png'
import logoImage from '../assets/images/logo.png';

const Hamburger = () => {
    const [route, setRoute] = useContext(NavigationContext);
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        setRoute(window.location.pathname);
    }, []);
    return (
        <div id="outer-container">
            <Menu left
                  isOpen={isOpen}
                  className={'burger_menu'}
                  outerContainerId={"outer-container"}
                  disableAutoFocus
                  customCrossIcon={<img src={DELETE} className={'cross'} onClick={() => setIsOpen(false)}/>}
                  customBurgerIcon={<img src={HAMBURGER} className={'hamburger'} onClick={() => setIsOpen(true)}/>}>
                    <Link href={"/"}>
                        <img src={logoImage} id='logoImage' className={'hamburger_image'} alt={"Logo of Jacht-Plast"}
                             onClick={() => setRoute('/')}/>
                    </Link>
                    <Link href={"/"}>
                        <div onClick={() => {
                            setRoute('/');
                            setIsOpen(false);
                        }} className={route === '/' ? 'item pressed' : 'item'}>
                            O nas
                        </div>
                    </Link>
                    <Link href={"/production"}>
                        <div onClick={() => {
                            setRoute('/production');
                            setIsOpen(false);
                        }} className={route === '/production' ? 'item pressed' : 'item'}>
                            Produkcja
                        </div>
                    </Link>
                    <Link href={"/library"}>
                        <div onClick={() => {
                            setRoute('/library');
                            setIsOpen(false);
                        }} className={route === '/library' ? 'item pressed' : 'item'}>
                            Galeria
                        </div>
                    </Link>
                    <Link href={"/transport"}>
                        <div onClick={() => {
                            setRoute('/transport');
                            setIsOpen(false);
                        }} className={route === '/transport' ? 'item pressed' : 'item'}>
                            Transport
                        </div>
                    </Link>
                    <Link href={"/contact"}>
                        <div onClick={() => {
                            setRoute('/contact');
                            setIsOpen(false);
                        }} className={route === '/contact' ? 'item pressed' : 'item'}>
                            Kontakt
                        </div>
                    </Link>
            </Menu>
        </div>
    )
};

export default Hamburger;
