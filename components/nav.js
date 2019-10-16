import React, {useContext} from 'react';
import Headroom from "react-headroom";
import Link from 'next/link';
import logoImage from '../assets/images/logo.png';
import NavigationContext from "./NavigationContext";

const Nav = (props) => {
    const [route, setRoute] = useContext(NavigationContext);
    return (
        <Headroom style={{backgroundColor: 'white'}}>
            <Link href={"/"}>
                <img src={logoImage} id='logoImage' className={'logo'} alt={"Logo of Jacht-Plast"}
                     onClick={() => setRoute('/')}/>
            </Link>
            <ul className={'list'}>
                <Link href={"/"}>
                    <li onClick={() => setRoute('/')} className={route === '/' ? 'pressed' : ''}>
                        O nas
                    </li>
                </Link>
                <Link href={"/galle"}>
                    <li onClick={() => setRoute('/gallery')} className={route === '/gallery' ? 'pressed' : ''}>
                        Galeria
                    </li>
                </Link>
                <Link href={"/transport"}>
                    <li onClick={() => setRoute('/transport')} className={route === '/transport' ? 'pressed' : ''}>
                        Transport
                    </li>
                </Link>
                <Link href={"/contact"}>
                    <li onClick={() => setRoute('/contact')} className={route === '/contact' ? 'pressed' : ''}>
                        Kontakt
                    </li>
                </Link>
            </ul>
        </Headroom>
    )
};

export default Nav;