import React, {useEffect, useState} from 'react'
import Layout from "../components/Layout";
import Expand from "react-expand-animated";
import Images from '../components/Images';
import Carousel, {Modal, ModalGateway} from 'react-images';
import Gallery from "../components/Gallery";
import {IoIosArrowDropright} from "react-icons/io";

function importAll(r) {
    return r.keys().map(r);
}

const bt_tes = importAll(require.context('../assets/images/production/bt_tes/', false, /\.(png|jpe?g|svg)$/));
const dreamer = importAll(require.context('../assets/images/production/dreamer/', false, /\.(png|jpe?g|svg)$/));
const dreamer_m = importAll(require.context('../assets/images/production/dreamer_m/', false, /\.(png|jpe?g|svg)$/));
const illuminatus = importAll(require.context('../assets/images/production/illuminatis/', false, /\.(png|jpe?g|svg)$/));
const master = importAll(require.context('../assets/images/production/master/', false, /\.(png|jpe?g|svg)$/));
const magnam = importAll(require.context('../assets/images/production/magnam/', false, /\.(png|jpe?g|svg)$/));
const versus = importAll(require.context('../assets/images/production/versus/', false, /\.(png|jpe?g|svg)$/));

const elements = [
    {
        id: 0,
        open: true,
        photos: master,
        title: 'TES 550 MASTER',
        desc: 'text 1'
    },
    {
        id: 1,
        open: false,
        photos: bt_tes,
        title: 'TES 678 BT-TES 720',
        desc: 'text 1'
    },
    {
        id: 2,
        open: false,
        photos: versus,
        title: 'TES 246 VERSUS',
        desc: 'text 1'
    },
    {
        id: 3,
        open: false,
        photos: magnam,
        title: 'TES 28 MAGNAM',
        desc: 'text 1'
    },
    {
        id: 4,
        open: false,
        photos: dreamer,
        title: 'TES 32 DREAMER',
        desc: 'text 1'
    },
    {
        id: 5,
        open: false,
        photos: dreamer_m,
        title: 'TES 32 DREAMER MOTOROWY',
        desc: 'text 2'
    },
    {
        id: 6,
        open: false,
        photos: illuminatus,
        title: 'TES 393 ILLUMINATUS',
        desc: 'text 2'
    }

];
const Production = () => {
    const [data, setData] = useState(elements);
    const [lightboxIsOpen, setlightboxIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [pickedOne, setPickedOne] = useState(data[0]);

    const openLightBox = (index) => {
        setCurrentIndex(index);
        setlightboxIsOpen(true);
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
                <div onClick={() => openExpand(item)}
                     className={item.open ? 'expandButton openedExpand' : 'expandButton'} style={{display: 'block'}}>
                    <IoIosArrowDropright className={'fa-blink'} style={item.open ? {display: ''} : {display: 'none'}}/>
                    {item.title}
                </div>
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
            <div className={"production"}>
                <div className={"list_div"}>
                    {data.map(mapExpands)}
                </div>
                <div className={"details"}>
                    <div className={'boutDesc'}>{pickedOne.desc}</div>
                    <Gallery>
                        {pickedOne.photos.map(mapToImage)}
                    </Gallery>
                    <ModalGateway>
                        {lightboxIsOpen && (
                            <Modal onClose={() => setlightboxIsOpen(false)}>
                                <Carousel
                                    currentIndex={currentIndex}
                                    views={pickedOne.photos}
                                    frameProps={{
                                        autoSize: 'height'
                                    }}
                                    autoSize={{
                                        width: 2000,
                                        height: 500
                                    }}
                                />
                            </Modal>
                        )}
                    </ModalGateway>
                </div>
            </div>
        </Layout>
    )
};

export default Production;