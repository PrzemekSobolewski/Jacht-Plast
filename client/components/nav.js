import React, {useEffect, useContext} from 'react';
import {useRouter} from 'next/router';
import Headroom from "react-headroom";
import logoImage from '../assets/images/logo.png';
import * as actions from "../redux/actions/switchActions";
import * as cookieActions from "../redux/actions/cookieActions"
import {useDispatch, useSelector} from "react-redux";
import Switch from "react-switch";
import POLAND from "../assets/images/poland.png";
import ENG from "../assets/images/uk.png";
import {useCookies, CookiesProvider} from 'react-cookie';
import CookiesModal from '../components/cookies';

const Nav = (props) => {
    const dispatch = useDispatch();
    const switchState = useSelector(state => state.switch);
    const cookieState = useSelector(state => state.cookie);
    const [cookies, setCookie] = useCookies(['switch']);
    const router = useRouter();

    useEffect(() => {
        if (cookies.switch !== undefined) {
            dispatch(cookieActions.acceptCookie());
            setSwitch(cookies.switch === "true")
        }
    });

    const setSwitch = (value) => {
        if (value) {
            dispatch(actions.setPl())
        } else {
            dispatch(actions.setEng())
        }
        if (cookieState.cookieAccepted) {
            setCookie('switch', switchState, {path: '/'});
        }
    };

    const accept = () => {
        dispatch(cookieActions.acceptCookie());
        setCookie('switch', switchState, {path: '/'});
    };

    const close = () => {
        dispatch(cookieActions.cancelCookie());
    };

    return (
        <CookiesProvider>
            <Headroom style={{backgroundColor: 'white'}}>
                <img src={logoImage} id='logoImage' className={'logo'} alt={"Logo of Jacht-Plast"}
                     onClick={() => router.push("/")}/>
                <div className={'rightBox'}>
                    <ul className={'list'}>
                        <li onClick={() => router.push("/")} className={router.pathname === '/' ? 'pressed' : ''}>
                            {switchState.language.aboutUs}
                        </li>
                        <li onClick={() => router.push("/production")} className={router.pathname === '/production' ? 'pressed' : ''}>
                            {switchState.language.production}
                        </li>
                        <li onClick={() => router.push("/transport")} className={router.pathname === '/transport' ? 'pressed' : ''}>
                            {switchState.language.transport}
                        </li>
                        <li onClick={() => router.push("/contact")} className={router.pathname === '/contact' ? 'pressed' : ''}>
                            {switchState.language.contact}
                        </li>
                    </ul>
                    <div className={'switchContainer'}>
                        <Switch onChange={(value) => setSwitch(value)}
                                checked={switchState.isPl}
                                width={100}
                                onColor={'#888'}
                                checkedIcon={<img src={POLAND} alt={"PL"} className={'checkedSwitch'}/>}
                                uncheckedIcon={<img src={ENG} alt={"ENG"} className={'uncheckedSwitch'}/>}
                        />
                    </div>
                </div>
            </Headroom>
            {cookieState.showCookies ? <CookiesModal close={close} accept={accept}/> : null}
        </CookiesProvider>
    )
};

export default Nav;