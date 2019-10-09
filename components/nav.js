import React from 'react';
import Headroom from "react-headroom";
import Link from 'next/link';
import logoImage from '../images/logo.png';
import {Navigation} from '../styles/navigation.style'
import '../styles/navigation.module.scss'

const Nav = () => (
    <Headroom style={{backgroundColor: 'white'}}>
        <img src={logoImage} id='logoImage' className={'logo'} alt={"Logo of Jacht-Plast"}/>
        <ul className={'list'}>
            <li>
                <Link>
                    <a>O nas</a>
                </Link>
            </li>
            <li>
                <Link>
                    <a>Galeria</a>
                </Link>
            </li>
            <li>
                <Link>
                    <a>Transport</a>
                </Link>
            </li>
            <li>
                <Link>
                    <a>Kontakt</a>
                </Link>
            </li>
        </ul>
    </Headroom>
);
export default Nav