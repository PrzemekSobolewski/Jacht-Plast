import React from 'react'
import Layout from "../components/Layout";
import {Parallax} from "react-parallax";
import YACHT from '../assets/images/slider-jachty-2-2560x12002.png'
import {ScrollTo} from "react-scroll-to";
import logoImage from "../assets/images/logo.png";

const Home = () => (
    <Layout>
        <Parallax bgImage={YACHT} strength={600} bgImageStyle={'bg'}>
            <div className={'bgContainer'}>
                <div className={'bgText'}>JACHT-PLAST</div>
                <ScrollTo>
                    {({scrollTo}) => <div className={'bgButtonContainer'}
                                          onClick={() => scrollTo({x: 0, y: 700, smooth: true})}>
                        <div className={'bgButton2'}>
                            Czytaj dalej
                        </div>
                        <div className={'bgButton'}>
                            Czytaj dalej
                        </div>
                    </div>}
                </ScrollTo>
            </div>
        </Parallax>
        <div className={"about_us_div"}>
            <div className={'about_us_first'}>
                <div>
                    Firma "JACHT – PLAST” zajmuje się budową jachtów żaglowych i motorowych.
                    Jachty przez nas wykonane charakteryzują się ciekawą zabudową
                    wnętrza, zapewniają komfort i wygodę. Do każdego projektu podchodzimy indywidualnie,
                    tworząc dzięki temu jednostki będące dumą naszą jak i ich właścicieli.
                    Możemy się poszczycić blisko 20-letnim doświadczeniem w branży. Daje nam to wiedzę, którą chętnie dzielimy się z klientem.
                    Nasze łodzie spełniają wymagane standardy jakości i bezpieczeństwa.
                </div>
                <img src={logoImage} className={'about_us_logo'} alt={"Logo of Jacht-Plast"}/>
            </div>
            <div className={'about_us_first'}>
                <img src={logoImage} className={'about_us_photo'} alt={"Logo of Jacht-Plast"}/>
                <div>
                    Posiadamy również wieloletnie doświadczenie w produkcji laminatów poliestrowo – szklanych. Nasze wyroby
                    produkowane są z wysokiej jakości materiałów, co zapewnia im trwałość w użytkowaniu. Współpracujemy z wieloma dostawcami,
                    zapewniając naszym klientom wybór urządzeń wyposażenia jachtu.
                    Dzięki zdobytemu doświadczeniu w produkcji laminatów, realizujemy również zlecenia na dowolny rodzaj
                    wyrobów laminatowych.
                    Duże możliwości produkcyjne oraz niezaprzeczalna kompetentność pracowników, dają gwarancję solidnego wykonania
                    wyrobu.
                </div>
            </div>
            <div className={'about_us_first'}>
                <div>
                    Nie tylko zajmujemy się produkcją, ale również zapewniamy serwis wykonanych łodzi.
                    Dodatkowo świadczymy usługi napraw i remontów używanego sprzętu pływającego.
                </div>
                <img src={logoImage} className={'about_us_photo'} alt={"Logo of Jacht-Plast"}/>
            </div>
        </div>
    </Layout>
);

export default Home;
