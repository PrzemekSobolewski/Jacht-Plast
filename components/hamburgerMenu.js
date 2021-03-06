import {elastic as Menu} from "react-burger-menu";
import React, {useState} from "react";
import {useRouter} from 'next/router';
import HAMBURGER from '../assets/hamburger.png'
import DELETE from '../assets/delete.png'
import logoImage from '../assets/images/logo.png';
import Switch from "react-switch";
import POLAND from "../assets/images/poland.png";
import ENG from "../assets/images/uk.png";
import {useDispatch, useSelector} from "react-redux";
import * as actions from "../redux/actions/switchActions";

const Hamburger = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();
    const switchState = useSelector(state => state.switch);
    const router = useRouter();

    const setSwitch = (value) => {
        if (value) {
            dispatch(actions.setPl())
        } else {
            dispatch(actions.setEng())
        }
    };

    return (
        <div id="outer-container">
            <div>
                <img src={logoImage}  className={'mobile-logo'} alt={"Logo of Jacht-Plast"} onClick={() => router.push("/")}/>
            </div>
            <Menu left
                  isOpen={isOpen}
                  className={'burger_menu'}
                  outerContainerId={"outer-container"}
                  disableAutoFocus
                  customCrossIcon={<img src={DELETE} className={'cross'} onClick={() => setIsOpen(false)}/>}
                  customBurgerIcon={<img src={HAMBURGER} className={'hamburger'} onClick={() => setIsOpen(true)}/>}>
                <img src={logoImage} id='logoImage' className={'hamburger_image'} alt={"Logo of Jacht-Plast"}
                     onClick={() => router.push("/")}/>
                <div onClick={() => {
                    setIsOpen(false);
                    router.push("/");
                }} className={router.pathname === '/' ? 'item pressed' : 'item'}>
                    {switchState.language.aboutUs}
                </div>
                <div onClick={() => {
                    setIsOpen(false);
                    router.push("/production");
                }} className={router.pathname === '/production' ? 'item pressed' : 'item'}>
                    {switchState.language.production}
                </div>
                <div onClick={() => {
                    setIsOpen(false);
                    router.push("/transport");
                }} className={router.pathname === '/transport' ? 'item pressed' : 'item'}>
                    {switchState.language.transport}
                </div>
                <div onClick={() => {
                    setIsOpen(false);
                    router.push("/contact");
                }} className={router.pathname === '/contact' ? 'item pressed' : 'item'}>
                    {switchState.language.contact}
                </div>
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
