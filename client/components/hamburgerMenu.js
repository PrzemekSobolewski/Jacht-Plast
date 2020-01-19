import {elastic as Menu} from "react-burger-menu";
import React, {useContext, useEffect, useState} from "react";
import Link from "next/dist/client/link";
import NavigationContext from "./NavigationContext";
import HAMBURGER from '../assets/hamburger.png'
import DELETE from '../assets/delete.png'
import logoImage from '../assets/images/logo.png';
import Switch from "react-switch";
import POLAND from "../assets/images/poland.png";
import ENG from "../assets/images/uk.png";
import {useDispatch, useSelector} from "react-redux";
import * as actions from "../redux/actions/switchActions";

const Hamburger = () => {
    const [route, setRoute] = useContext(NavigationContext);
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();
    const switchState = useSelector(state => state.switch);

    const setSwitch = (value) => {
        if (value) {
            dispatch(actions.setPl())
        } else {
            dispatch(actions.setEng())
        }
    };

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
                <div className={'switchContainerMobile'}>
                    <Switch onChange={(value) => setSwitch(value)}
                            checked={switchState.isPl}
                            width={100}
                            onColor={'#888'}
                            checkedIcon={<img src={POLAND} alt={"pl"} className={'checkedSwitch'}/>}
                            uncheckedIcon={<img src={ENG} alt={"ENG"} className={'uncheckedSwitch'}/>}
                    />
                </div>
            </Menu>
        </div>
    )
};

export default Hamburger;
