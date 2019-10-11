import React, {useContext} from 'react';
import Headroom from "react-headroom";
import Link from 'next/link';
import logoImage from '../images/logo.png';
import {Navigation} from '../styles/navigation.style'
import '../styles/navigation.module.scss'
import NavigationContext from "./NavigationContext";

const Nav = (props) => {
    const [ route, setRoute ] = useContext(NavigationContext);
    return (
        <Headroom style={{backgroundColor: 'white'}}>
            <Link href={"/"}>
                <img src={logoImage} id='logoImage' className={'logo'} alt={"Logo of Jacht-Plast"} onClick={() => setRoute('/')}/>
            </Link>
            <ul className={'list'}>
                <li onClick={() => setRoute('/')} className={route === '/' ? 'pressed' : ''}>
                    <Link href={"/"}>
                        <a>O nas</a>
                    </Link>
                </li>
                <li onClick={() => setRoute('/gallery')} className={route === '/gallery' ? 'pressed' : ''}>
                    <Link href={"/gallery"}>
                        <a>Galeria</a>
                    </Link>
                </li>
                <li  onClick={() => setRoute('/transport')} className={route === '/transport' ? 'pressed' : ''}>
                    <Link href={"/transport"} >
                        <a>Transport</a>
                    </Link>
                </li>
                <li  onClick={() => setRoute('/contact')} className={route === '/contact' ? 'pressed' : ''}>
                    <Link href={"/contact"}>
                        <a>Kontakt</a>
                    </Link>
                </li>
            </ul>
        </Headroom>
    )
};

export default Nav;