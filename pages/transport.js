import React, {useEffect, useState} from 'react'
import Expand from "react-expand-animated"
import Layout from "../components/Layout";
import Images from '../components/Images'
import Gallery from '../components/Gallery'
import {IoIosArrowDropdown, IoIosCheckmark} from "react-icons/io";
import Fade from 'react-reveal/Fade'
import * as actions from "../redux/actions/modalActions";
import {useDispatch, useSelector} from "react-redux";
import {Helmet} from "react-helmet";

function importAll(r) {
    return r.keys().map(r);
}

const images = importAll(require.context('../assets/images/transport/', false, /\.(png|jpe?g|svg)$/));

const Transport = () => {
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const switchState = useSelector(state => state.switch);

    useEffect(() => {
        let readyImages = images.map(image => {
            return {
                src: image
            }
        });
        dispatch(actions.loadDataModal(readyImages));
    }, []);

    const openLightBox = (index) => {
        dispatch(actions.setNumberModal(index));
        dispatch(actions.openModal());
    };

    const mapToImage = (image, index) => {
        return (
            <Images key={index}>
                <img className={"image"} src={image} onClick={() => openLightBox(index)} alt={"Image of transport " + index}/>
            </Images>)
    };
    return (
        <Layout>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Transport Jachtów - Jacht Plast</title>
                <meta name="description" content="  Transport jachtów Polska. Transport łodzi Polska. Produkcja łodzi Polska. Produkcja jachtów Polska. Łodzie Polska. Jachty w Polsce.
                Transport jachtów Europa. Transport łodzi Europa. Produkcja łodzi Europa. Produkcja jachtów Europa. Łodzie Europa. Jachty w Europie.
                Przewóz jachtów. Transport jachtów. Usługi logistyczno transportowe. Przewóz łodzi. Przewóz jachtów. Produkcja jachtów. Budowa jachtów. Stocznia jachtów. Jachty żaglowe. Jachty motorowe. Jachty centralna Polska. Remont jachtów. Odnowa jachtu. Konserwacja jachtów. Odnowa łodzi. Konserwacja łodzi.

                
                Yacht transport Poland. Boat transport Poland. Boat production Poland. Yacht production Poland. Boats Poland. Yachts in Poland.
                Yacht transport Europe. Boat transport Europe. Europe boat production. Yacht production Europe. Europe boats. Yachts in Europe.
                Carriage of yachts. Yacht transport. Logistics and transport services. Carriage of boats. Carriage of yachts. Yacht production. Yacht construction. Yacht Shipyard. Sail yachts. Motor yachts. Central Poland yachts. Yacht repair. Yacht renewal. Yacht maintenance. Boat restoration. Boat maintenance.
                Jacht Plast zajmuje się transportem na terenie całej Europy. Od wielu lat świadczymy usługi logistyczne.
                Zapewniamy bezpieczny trasport łodzi żaglowych oraz łodzi motorowych. Firma Jacht-Plast przewozi jachty po całej Europie. Jesteśmy na bierząco jeśli chodzi o 
                wszelkie przepisy prawne dotyczące transportu jachtów. Poniżej przedstawiamy informacje oraz przegląd usług.
                
                "/>
            </Helmet>
            <div className={"transportText"}>
                <div style={{textAlign: 'center'}}><h2>P.H.U.P. "JACHT-PLAST"</h2></div>
                <Fade>
                    <ul className={'transportList'}>
                        <li><IoIosCheckmark className={'checkmark'} alt={"Icon checkmark"}/>
                            {switchState.language.transportListOne}
                        </li>
                        <li><IoIosCheckmark className={'checkmark'} alt={"Icon checkmark"}/>
                            {switchState.language.transportListTwo}
                        </li>
                        <li><IoIosCheckmark className={'checkmark'} alt={"Icon checkmark"}/>
                            {switchState.language.transportListThree}
                        </li>
                        <li><IoIosCheckmark className={'checkmark'} alt={"Icon checkmark"}/>
                            {switchState.language.transportListFour}
                        </li>
                        <li><IoIosCheckmark className={'checkmark'} alt={"Icon checkmark"}/>
                            {switchState.language.transportListFive}
                        </li>
                    </ul>
                </Fade>
                <div className={'underList'} dangerouslySetInnerHTML={{__html: switchState.language.transportText}}/>

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
                </div>
            </Expand>
        </Layout>
    )
};
export default Transport