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
import JachtSlider from '../components/JachtSlider';

const Home = () => {
    const switchState = useSelector(state => state.switch);

    return (
        <Layout>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Jacht Plast - Budowa i Transport Jachtów</title>
                <meta name="description" content="Przewóz jachtów. Transport jachtów. Usługi logistyczno transportowe. Przewóz łodzi. Przewóz jachtów. Produkcja jachtów. Budowa jachtów. Stocznia jachtów. Jachty żaglowe. Jachty motorowe. Jachty centralna Polska. Remont jachtów. Odnowa jachtu. Konserwacja jachtów. Odnowa łodzi. Konserwacja łodzi.
                Budowa jachtów. Zabudowy łodzi. Jachty żaglowe. Łodzie żaglowe. Łodzie motorowe.
                Transport jachtów Polska. Transport łodzi Polska. Produkcja łodzi Polska. Produkcja jachtów Polska. Łodzie Polska. Jachty w Polsce.
                Transport jachtów Europa. Transport łodzi Europa. Produkcja łodzi Europa. Produkcja jachtów Europa. Łodzie Europa. Jachty w Europie.
                Carriage of yachts. Yacht transport. Logistics and transport services. Carriage of boats. Carriage of yachts. Yacht production. Yacht construction. Yacht Shipyard. Sail yachts. Motor yachts. Central Poland yachts. Yacht repair. Yacht renewal. Yacht maintenance. Boat restoration. Boat maintenance.
                Yacht construction. Boat development. Sail yachts. Sailing boats. Motor boats.
                Yacht transport Poland. Boat transport Poland. Boat production Poland. Yacht production Poland. Boats Poland. Yachts in Poland.
                Yacht transport Europe. Boat transport Europe. Europe boat production. Yacht production Europe. Europe boats. Yachts in Europe.
                Jacht Plast zajmuje się budową jachtów, wyrobami laminotowymi oraz wykonuje trasnsport łodzi. Świadczymy usługi dla zadowolonych klientów z całego świata.
                Jacht Plast posiada wieloletnie doświadczenie w dziedzinie budowy, remotnu oraz przewozu jachtów. Firma posiada swoją siedzibę w centralnej częsci Polski. 
                "/>
            </Helmet>
            <JachtSlider/>
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
