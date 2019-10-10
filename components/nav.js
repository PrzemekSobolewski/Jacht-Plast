import React from 'react';
import Headroom from "react-headroom";
import Link from 'next/link';
import logoImage from '../images/logo.png';
import {Navigation} from '../styles/navigation.style'
import '../styles/navigation.module.scss'

const Nav = () => (
    <Headroom style={{backgroundColor: 'white'}}>
        <Link href={"/"}>
            <img src={logoImage} id='logoImage' className={'logo'} alt={"Logo of Jacht-Plast"}/>
        </Link>
        <ul className={'list'}>
            <li>
                <Link href={"/about_us"}>
                    <a>O nas</a>
                </Link>
            </li>
            <li>
                <Link href={"/gallery"}>
                    <a>Galeria</a>
                </Link>
            </li>
            <li>
                <Link href={"/transport"}>
                    <a>Transport</a>
                </Link>
            </li>
            <li>
                <Link href={"/contact"}>
                    <a>Kontakt</a>
                </Link>
            </li>
        </ul>
    </Headroom>
);
export default Nav