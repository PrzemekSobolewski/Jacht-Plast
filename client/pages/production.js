import React, {useEffect, useState} from 'react'
import Layout from "../components/Layout";
import Images from '../components/Images';
import Gallery from "../components/Gallery";
import {IoIosArrowDropright} from "react-icons/io";
import {useDispatch, useSelector} from "react-redux";
import * as actions from "../redux/actions/modalActions";
import bottom_radius from "../assets/images/production/img/bottom_radius.png";
import upper_radius from "../assets/images/production/img/upper_radius.png";
import {Helmet} from "react-helmet";

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
        title: 'NAVIGATHOR 30'
    },
    {
        id: 1,
        open: false,
        photos: illuminatus,
        title: 'TES 393 ILLUMINATUS'
    },
    {
        id: 2,
        open: false,
        photos: dreamer,
        title: 'TES 32 DREAMER'
    },
    {
        id: 3,
        open: false,
        photos: magnam,
        title: 'TES 28 MAGNAM'
    },
    {
        id: 4,
        open: false,
        photos: versus,
        title: 'TES 246 VERSUS'
    },
    {
        id: 5,
        open: false,
        photos: bt_tes,
        title: 'TES 678 BT-TES 720'
    },
    {
        id: 6,
        open: false,
        photos: master,
        title: 'TES 550 MASTER'
    },
    {
        id: 7,
        open: false,
        photos: diffrent,
        title: false
    }


];
const Production = () => {
    const [data, setData] = useState(elements);
    const [pickedOne, setPickedOne] = useState(data[0]);
    const switchState = useSelector(state => state.switch);
    const dispatch = useDispatch();

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

    const openExpand = (element) => {
        data[pickedOne.id].open = false;
        data[element.id].open = true;
        setPickedOne(element);
        setData(data);
    };

    const mapExpands = (item) => {
        return (
            <div className={'fullExpand'}>
                <span className={'upper_radius'}><img src={item.open ? upper_radius : ''} style={item.open ? {display: ''} : {display: 'none'}}/> </span>
                <div onClick={() => openExpand(item)}
                     className={item.open ? 'expandButton openedExpand' : 'expandButton'} style={{display: 'block'}}>
                    <IoIosArrowDropright className={'fa-blink'} style={item.open ? {display: ''} : {display: 'none'}}/>
                    {item.title ? item.title : switchState.language.productionModels}
                </div>
                <span className={'bottom_radius'}><img src={item.open ? bottom_radius : ''} style={item.open ? {display: 'block'} : {display: 'none'}}/> </span>
            </div>
        )
    };

    const mapToImage = (photo, index) => {
        return (
            <Images key={index}>
                <img className={"productionImage"} src={photo} width={'300px'} height={'200px'}
                     onClick={() => openLightBox(index)}/>
            </Images>
        )
    };

    return (
        <Layout>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Produkcja - Jacht Plast</title>
                <meta name="description" content="Jacht plast produkuje od wielu lat towary najwyższej jakości dla kientów z całego świata. Strona zawiera galerie budowanych jednostek."/>
            </Helmet>
            <div className={"production"}>
                <div className={"list_div"}>
                    {data.map(mapExpands)}
                </div>
                <div className={"details"}>
                    <div className={'galleryProd'}>
                        <Gallery>
                            {pickedOne.photos.map(mapToImage)}
                        </Gallery>
                    </div>
                </div>
            </div>
        </Layout>
    )
};

export default Production;