import React from 'react'
import Layout from "../components/Layout";
import {Parallax} from "react-parallax";
import YACHT from '../assets/images/slider-jachty-2-2560x12002.png'
import {ScrollTo} from "react-scroll-to";
import exteriorImage from "../assets/images/about_us/hala_out.jpg"
import interiorImage from "../assets/images/about_us/hala_in.jpg"
import ramImage from "../assets/images/about_us/ram.jpg"
import {useSelector} from "react-redux";
import {Helmet} from "react-helmet";

const Home = () => {
    const switchState = useSelector(state => state.switch);

    return (
        <Layout>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Strona Główna - Jacht Plast</title>
                <meta name="description" content="Jacht Plast zajmuje się budową jachtów, wyrobami laminotowymi oraz trasnsportem. Świadczymy usługi dla zadowolonych klientów z całego świata."/>
            </Helmet>
            <Parallax bgImage={YACHT} strength={600}>
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
                    <img src={exteriorImage} className={'about_us_photo'} alt={"Image of Jacht-Plast"}/>
                    <div>
                        {switchState.language.aboutUsFirstText}
                    </div>
                </div>
                <div className={'about_us_first'}>
                    <img src={interiorImage} className={'about_us_photo'} alt={"Image of Jacht-Plast"}/>
                    <div>
                        {switchState.language.aboutUsSecondText}
                    </div>
                </div>
                <div className={'about_us_first'}>
                    <img src={ramImage} className={'about_us_photo'} alt={"Image of Jacht-Plast"}/>
                    <div>
                        {switchState.language.aboutUsThirdText}
                    </div>
                </div>
            </div>
        </Layout>
    )
};
export default Home;
