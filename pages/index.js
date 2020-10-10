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
import { Organization } from "schema-dts";
import { helmetJsonLdProp } from "react-schemaorg";

const Home = () => {
    const switchState = useSelector(state => state.switch);

    return (
        <Layout>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Jacht Plast - Budowa i Transport Jachtów - Stocznia jachtów</title>
                <script type="application/ld+json">
                    {{ "@context": "https://schema.org",
                    "@type": "Organization",
                    "name": "Jacht Plast",
                    "legalName" : "PHUP Jacht Plast",
                    "url": "https://www.jacht-plast.pl/",
                    "logo": "https://www.jacht-plast.pl/_next/static/images/logo-d4243a7efeb7684594888ac2f4fe7d5e.png",
                    "description": "Profejsonalny transport i produkcja jachtów. Firma Jacht Plast świadczy usługi logistyczno transportowe oraz budowy jachtów łodzi żaglowych oraz motorowych",
                    "founders": [
                    {
                    "@type": "Person",
                    "name": "Zdzisław Sobolewski"
                    }],
                    "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Przemysłowa 4",
                    "addressLocality": "Drzewica",
                    "addressRegion": "PL",
                    "postalCode": "26-340",
                    "addressCountry": "Polska"
                    },
                    "contactPoint": {
                    "@type": "ContactPoint",
                    "contactType": "customer support",
                    "telephone": "601256133",
                    "email": "jachtplast@gmail.com"
                    },
                    "openingHoursSpecification": [
                        {
                          "@type": "OpeningHoursSpecification",
                          "dayOfWeek": [
                            "Monday",
                            "Tuesday",
                            "Wednesday",
                            "Thursday",
                            "Friday"
                          ],
                          "opens": "08:00",
                          "closes": "16:00"
                        }
                    ],
                    "sameAs": [ 
                    "https://www.facebook.com/Jacht-Plast-Zdzis%C5%82aw-Sobolewski-1328748387208685", 
                    ]}}
                </script>
                <script type="application/ld+json">
                    {{
                        "@context": "https://schema.org",
                        "@type": "WebSite",
                        "url": "https://www.jacht-plast.pl/",
                    }}
                </script>
                <meta name="description" content="Profejsonalny transport i produkcja jachtów. Firma Jacht Plast świadczy usługi logistyczno transportowe oraz budowy jachtów łodzi żaglowych oraz motorowych. Jacht Plast posiada wieloletnie doświadczenie w dziedzinie budowy, remotnu oraz przewozu jachtów. Świadczymy usługi dla zadowolonych klientów z całego świata. Zajmujemy się transportem po całej Polsce jak i w Europie. Firma posiada swoją siedzibę w centralnej częsci Polski. Carriage of yachts. Logistics and transport services. Carriage of boats. Yacht production. Yacht transport Poland. Boat transport Poland. Boat production Poland. Yacht production Poland. Boats Poland. Yachts in Poland. Yacht transport Europe. Boat transport Europe. Europe boat production. Yacht production Europe. Europe boats. Yachts in Europe."/>
            </Helmet>
            <JachtSlider/>
            <div className={"about_us_div"}>
                <div className={'about_us_first'}>
                    <img src={exteriorImage} className={'about_us_photo'} alt={"Building of Jacht-Plast company"}/>
                    <div>
                        {switchState.language.aboutUsFirstText}
                    </div>
                </div>
                <div className={'about_us_first'}>
                    <img src={interiorImage} className={'about_us_photo'} alt={"Production in Jacht-Plast company"}/>
                    <div>
                        {switchState.language.aboutUsSecondText}
                    </div>
                </div>
                <div className={'about_us_first'}>
                    <img src={ramImage} className={'about_us_photo'} alt={"Transport of Jacht-Plast company"}/>
                    <div>
                        {switchState.language.aboutUsThirdText}
                    </div>
                </div>
            </div>
        </Layout>
    )
};
export default Home;
