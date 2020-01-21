import React, {useEffect, useContext, useMemo, useState} from 'react';
import Headroom from "react-headroom";
import Link from 'next/link';
import logoImage from '../assets/images/logo.png';
import NavigationContext from "./NavigationContext";
import * as actions from "../redux/actions/switchActions";
import * as cookie from  "../redux/actions/cookieActions";
import {useDispatch, useSelector} from "react-redux";
import Switch from "react-switch";
import POLAND from "../assets/images/poland.png";
import ENG from "../assets/images/uk.png";
import TextService from "../config/text.service";
import {CookiesProvider, useCookies} from 'react-cookie';
import Cookies from '../components/cookies';

const Nav = (props) => {
    const [route, setRoute] = useContext(NavigationContext);
    const dispatch = useDispatch();
    const switchState = useSelector(state => state.switch);
    const cookieState = useSelector(state => state.cookie);
    const [cookies, setCookie] = useCookies(['switch']);

    useEffect(() => {
        setRoute(window.location.pathname);
    }, []);

    const setSwitch = (value) => {
        if (value) {
            dispatch(actions.setPl())
        } else {
            dispatch(actions.setEng())
        }
    };

    useEffect(() => {
        if(cookies.switch !== undefined) {
            cookieState.showCookies = false;
            cookieState.cookieAccepted = true;

        }
    });

    const accept = () => {
        setCookie('switch', switchState, {path: '/'});
        dispatch(cookie.acceptCookie());
    };

    const close = () => {
        dispatch(cookie.cancelCookie());
    };

    return (
        <>
            <Headroom style={{backgroundColor: 'white'}}>
                <Link href={"/"}>
                    <img src={logoImage} id='logoImage' className={'logo'} alt={"Logo of Jacht-Plast"}
                         onClick={() => setRoute('/')}/>
                </Link>
                <div className={'rightBox'}>
                    <ul className={'list'}>
                        <Link href={"/"}>
                            <li onClick={() => setRoute('/')} className={route === '/' ? 'pressed' : ''}>
                                {switchState.language.about_us}
                            </li>
                        </Link>
                        <Link href={"/production"}>
                            <li onClick={() => setRoute('/production')} className={route === '/production' ? 'pressed' : ''}>
                                {switchState.language.production}
                            </li>
                        </Link>
                        <Link href={"/transport"}>
                            <li onClick={() => setRoute('/transport')} className={route === '/transport' ? 'pressed' : ''}>
                                {switchState.language.transport}
                            </li>
                        </Link>
                        <Link href={"/contact"}>
                            <li onClick={() => setRoute('/contact')} className={route === '/contact' ? 'pressed' : ''}>
                                {switchState.language.contact}
                            </li>
                        </Link>
                    </ul>
                    <div className={'switchContainer'}>
                        <Switch onChange={(value) => setSwitch(value)}
                                checked={switchState.isPl}
                                width={100}
                                onColor={'#888'}
                                checkedIcon={<img src={POLAND} alt={"pl"} className={'checkedSwitch'}/>}
                                uncheckedIcon={<img src={ENG} alt={"ENG"} className={'uncheckedSwitch'}/>}
                        />
                    </div>
                </div>
            </Headroom>
            <CookiesProvider>
                {cookieState.showCookies ? <Cookies close={close} accept={accept}/> : null}
            </CookiesProvider>
        </>
    )
};

export default Nav;