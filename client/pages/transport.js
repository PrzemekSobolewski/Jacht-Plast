import React, {useEffect, useState} from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import Expand from "react-expand-animated"
import Layout from "../components/Layout";
import Carousel, {Modal, ModalGateway} from 'react-images'
import Images from '../components/Images'
import Gallery from '../components/Gallery'
import {IoIosArrowDropdown, IoIosCheckmark} from "react-icons/io";
import Fade from 'react-reveal/Fade'

function importAll(r) {
    return r.keys().map(r);
}

const images = importAll(require.context('../assets/images/transport/', false, /\.(png|jpe?g|svg)$/));

const Transport = () => {
    const [lightboxIsOpen, setlightboxIsOpen] = useState(false);
    const [number, setNumber] = useState(0);
    const [open, setOpen] = useState(false)

    let readyImages = images.map(i => {
        return {
            src: i
        }
    });

    const openLightBox = (j) => {
        setNumber(j);
        setlightboxIsOpen(true);
        console.log(number);
    };

    const mapToImage = (i, j) => {
        console.log(j);
        return (
            <Images key={j}>
                <img className={"image"} src={i} onClick={() => openLightBox(j)}/>
            </Images>)
    };
    return (
        <Layout>
            <div className={"transportText"}>
                <div style={{textAlign: 'center'}}><h2>P.H.U.P. "JACHT-PLAST"</h2></div>
                <Fade> <ul className={'transportList'}>
                    <li><IoIosCheckmark className={'checkmark'}/>Świadczymy usługi z zakresu krajowego i międzynarodowego transportu towarów</li>
                    <li><IoIosCheckmark className={'checkmark'}/>Zapewniamy w pełni profesjonalny i ubezpieczony transport jachtów żaglowych i łodzi motorowych
                        oraz pojazdów
                    </li>
                    <li><IoIosCheckmark className={'checkmark'}/>Dysponujemy samochodami dostosowanymi do przewozu jednostek do 12 m długości i masie 8 ton oraz
                        mniejszych, poniżej 3,5 tony
                    </li>
                    <li><IoIosCheckmark className={'checkmark'}/>Posiadamy wymagane w transporcie drogowym zezwolenia i ubezpieczenia ładunku</li>
                    <li><IoIosCheckmark className={'checkmark'}/>Ustalamy indywidualne ceny, w zależności od zakresu uaługi oraz odpowiadamy na zadawane mailem
                        lub telefonicznie pytania
                    </li>
                </ul></Fade>
                <div className={'underList'}><h3>Nasza firma posiada wieloletnie doświadczenie w budowie i
                    naprawie jachtów żaglowych i motorowych, co daje nam wiedzę o potrzebach klientów zainteresowanych
                    transportem swoich jednostek.<br/>
                    <br/>
                    Kliknij poniżej żeby zobaczyć galerię!</h3></div>

            </div>
            <div className={"transportLine"}>
                <span onClick={() => setOpen(!open)} className={!open ? "transportIcon" : 'transportIconActive'}>
                    <IoIosArrowDropdown/>
                </span>

            </div>
            <Expand open={open}
                    className={'transportExpand'}
                    duration={500}>
                <div className={'gallery'}>
                    <Gallery>
                        {images.map(mapToImage)}
                    </Gallery>
                    <ModalGateway>
                        {lightboxIsOpen ? (
                            <Modal onClose={() => setlightboxIsOpen(false)}>
                                <Carousel
                                    currentIndex={number}
                                    views={readyImages}
                                    frameProps={{
                                        autoSize: 'height'
                                    }}
                                    autoSize={{
                                        width: 2000,
                                        height: 500
                                    }}
                                />
                            </Modal>
                        ) : null}
                    </ModalGateway>
                </div>
            </Expand>
        </Layout>
    )
};
export default Transport