import React from 'react'
import Layout from "../components/Layout";
import {Parallax} from "react-parallax";
import YACHT from '../assets/images/slider-jachty-2-2560x12002.png'
import {ScrollTo} from "react-scroll-to";
import logoImage from "../assets/images/logo.png";
import {useSelector} from "react-redux";

const Home = () => {
    const switchState = useSelector(state => state.switch);

    return (
        <Layout>
            <Parallax bgImage={YACHT} strength={600} bgImageStyle={'bg'}>
                <div className={'bgContainer'}>
                    <div className={'bgText'}>JACHT-PLAST</div>
                    <ScrollTo>
                        {({scrollTo}) => <div className={'bgButtonContainer'}
                                              onClick={() => scrollTo({x: 0, y: 700, smooth: true})}>
                            <div className={'bgButton2'}>
                                {switchState.language.aboutUsButton}
                            </div>
                            <div className={'bgButton'}>
                                {switchState.language.aboutUsButton}
                            </div>
                        </div>}
                    </ScrollTo>
                </div>
            </Parallax>
            <div className={"about_us_div"}>
                <div className={'about_us_first'}>
                    <div>
                        {switchState.language.aboutUsFirstText}
                    </div>
                    <img src={logoImage} className={'about_us_logo'} alt={"Logo of Jacht-Plast"}/>
                </div>
                <div className={'about_us_first'}>
                    <img src={logoImage} className={'about_us_photo'} alt={"Logo of Jacht-Plast"}/>
                    <div>
                        {switchState.language.aboutUsSecondText}
                    </div>
                </div>
                <div className={'about_us_first'}>
                    <div>
                        {switchState.language.aboutUsThirdText}
                    </div>
                    <img src={logoImage} className={'about_us_photo'} alt={"Logo of Jacht-Plast"}/>
                </div>
            </div>
        </Layout>
    )
};
export default Home;
