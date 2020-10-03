import React, {useEffect, useState} from 'react'
import Layout from "../components/Layout";
import Images from '../components/Images';
import Gallery from "../components/Gallery";
import {IoIosArrowDropright} from "react-icons/io";
import {useDispatch, useSelector} from "react-redux";
import * as actions from "../redux/actions/modalActions";

import radius from "../assets/images/production/img/corner.svg";
import {Helmet} from "react-helmet";
import {Parallax, ParallaxProvider} from "react-scroll-parallax";

function importAll(r) {
    return r.keys().map(r);
}

const bt_tes = importAll(require.context('../assets/images/production/bt_tes/', false, /\.(png|jpe?g|svg)$/));
const dreamer = importAll(require.context('../assets/images/production/dreamer/', false, /\.(png|jpe?g|svg)$/));
const illuminatus = importAll(require.context('../assets/images/production/illuminatis/', false, /\.(png|jpe?g|svg)$/));
const master = importAll(require.context('../assets/images/production/master/', false, /\.(png|jpe?g|svg)$/));
const magnam = importAll(require.context('../assets/images/production/magnam/', false, /\.(png|jpe?g|svg)$/));
const versus = importAll(require.context('../assets/images/production/versus/', false, /\.(png|jpe?g|svg)$/));
const navighator = importAll(require.context('../assets/images/production/navighator/', false, /\.(png|jpe?g|svg)$/));
const diffrent = importAll(require.context('../assets/images/production/diffrent/', false, /\.(png|jpe?g|svg)$/));
const elements = [
    {
        id: 0,
        open: true,
        photos: navighator,
        title: 'NAVIGATHOR 30',
        alt: 'Jednostka NAVIGATHOR 30'
    },
    {
        id: 1,
        open: false,
        photos: illuminatus,
        title: 'TES 393 ILLUMINATUS',
        alt: 'Jednostka TES 393 ILLUMINATUS'
    },
    {
        id: 2,
        open: false,
        photos: dreamer,
        title: 'TES 32 DREAMER',
        alt: 'Jednostka TES 32 DREAMER'
    },
    {
        id: 3,
        open: false,
        photos: magnam,
        title: 'TES 28 MAGNAM',
        alt: 'Jednostka TES 28 MAGNAM'
    },
    {
        id: 4,
        open: false,
        photos: versus,
        title: 'TES 246 VERSUS',
        alt: 'Jednostka TES 246 VERSUS'
    },
    {
        id: 5,
        open: false,
        photos: bt_tes,
        title: 'TES 678 BT-TES 720',
        alt: 'Jednostki TES 678 oraz BT-TES 720'
    },
    {
        id: 6,
        open: false,
        photos: master,
        title: 'TES 550 MASTER',
        alt: 'Jednostka TES 550 MASTER'
    },
    {
        id: 7,
        open: false,
        photos: diffrent,
        title: false,
        alt: 'Inne modele jak i jednostki'
    }
];

const Production = () => {
    const [data, setData] = useState(elements);
    const [pickedOne, setPickedOne] = useState(data[0]);
    const [width, setWidth] = useState(1200);
    const switchState = useSelector(state => state.switch);
    const dispatch = useDispatch();

    useEffect(() => {
        setWidth(window.innerWidth);
    }, []);

    useEffect(() => {
        setData(data.map(item => {
            if (item.id === 0) {
                item.open = true;
                return item;
            }
            item.open = false;
            return item;
        }))
    }, []);

    useEffect(() => {
        let readyImages = pickedOne.photos.map(i => {
            return {
                src: i
            }
        });
        dispatch(actions.loadDataModal(readyImages));
    }, [pickedOne]);

    const openLightBox = (index) => {
        dispatch(actions.setNumberModal(index));
        dispatch(actions.openModal());
    };

    const openExpand = async (element) => {
        data[pickedOne.id].open = false;
        data[element.id].open = true;
        await setPickedOne(element);
        setData(data);
    };

    const changeParallax = () => {
        if (width > 350 && width <= 513 || (width > 600 && width < 1166)) {
            return <Parallax
                className={"list_div"}
                y={[-40, 65]}
            >
                {data.map(mapExpands)}
            </Parallax>;
        }
        else if ((width >= 1166 && width <= 1300) || width <= 350) {
            return <Parallax
                className={"list_div"}
                y={[-15.5, 25]}

            >
                {data.map(mapExpands)}
            </Parallax>;
        }
        else if ((width > 1300) || (width > 513 && width <= 600)) {
            return <Parallax
                className={"list_div"}
                y={[0, 0]}

            >
                {data.map(mapExpands)}
            </Parallax>;
        }
    };


    const mapExpands = (item) => {
        return (
            <div className={'fullExpand'} key={item.id}>
                <span className={'upper_radius'}><img src={radius}
                                                      className={item.open ? 'active' : ''}
                                                      alt={"upper image"}/> </span>
                <div onClick={() => openExpand(item)}
                     className={item.open ? 'expandButton openedExpand' : 'expandButton'} style={{display: 'block'}}>
                    <IoIosArrowDropright className={'fa-blink'} style={item.open ? {display: ''} : {display: 'none'}}/>
                    {item.title ? item.title : switchState.language.productionModels}
                </div>
                <span className={'bottom_radius'}><img src={radius}
                                                       className={item.open ? 'active' : ''}
                                                       alt={"lower image"}/> </span>
            </div>
        )
    };

    const mapToImage = (photo, index) => {
        return (
            <Images key={index}>
                <img className={"productionImage"} src={photo}
                     onClick={() => openLightBox(index)} alt={"Image of production. " + index}/>
            </Images>
        )
    };

    return (
        <ParallaxProvider>
            <Layout>
                <Helmet>
                    <meta charSet="utf-8"/>
                    <title>Produkcja Jachtów - Jacht Plast</title>
                    <meta name="description"
                          content="Budowa jachtów. Transport jachtów. Produkcja jachtów. Zabudowy łodzi. Jachty żaglowe. Łodzie żaglowe. Łodzie motorowe.
                        Transport jachtów Polska. Transport łodzi Polska. Produkcja łodzi Polska. Produkcja jachtów Polska. Łodzie Polska. Jachty w Polsce.
                        Transport jachtów Europa. Transport łodzi Europa. Produkcja łodzi Europa. Produkcja jachtów Europa. Łodzie Europa. Jachty w Europie.
                
                        Yacht construction. Yacht transport. Yacht production. Boat development. Sail yachts. Sailing boats. Motor boats.
                        Yacht transport Poland. Boat transport Poland. Boat production Poland. Yacht production Poland. Boats Poland. Yachts in Poland.
                        Yacht transport Europe. Boat transport Europe. Europe boat production. Yacht production Europe. Europe boats. Yachts in Europe.
                        Jacht Plast produkuje od wielu lat towary najwyższej jakości dla kientów z całego świata. Strona zawiera galerię budowanych jednostek w naszej firmie.
                        Stocznia Jacht Plast buduje łodzie motorowe oraz łodzie żaglowe. Łodzie są wykonywane z wysokiej jakości komponentów. Każdy projekt wykonywany jest z jak największą dokładnością oraz dbałością o szczegóły.
                        Przewóz jachtów. Transport jachtów. Usługi logistyczno transportowe. Przewóz łodzi. Przewóz jachtów. Produkcja jachtów. Budowa jachtów. Stocznia jachtów. Jachty żaglowe. Jachty motorowe. Jachty centralna Polska. Remont jachtów. Odnowa jachtu. Konserwacja jachtów. Odnowa łodzi. Konserwacja łodzi."/>
                </Helmet>
                <div className={"production"}>
                    {changeParallax()}
                    <div className={"details"}>
                        <div className={'galleryProd'}>
                            <Gallery>
                                {pickedOne.photos.map(mapToImage)}
                            </Gallery>
                        </div>
                    </div>
                </div>
            </Layout>
        </ParallaxProvider>
    )
};

export default Production;