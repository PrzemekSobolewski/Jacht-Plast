import React, {useEffect, useState} from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
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
        id: 1,
        open: true,
        photo: master,
        title: 'TES 550 MASTER',
        desc: 'text 1'
    },
    {
        id: 2,
        open: false,
        photo: bt_tes,
        title: 'TES 678 BT-TES 720',
        desc: 'text 1'
    },
    {
        id: 3,
        open: false,
        photo: versus,
        title: 'TES 246 VERSUS',
        desc: 'text 1'
    },
    {
        id: 4,
        open: false,
        photo: magnam,
        title: 'TES 28 MAGNAM',
        desc: 'text 1'
    },
    {
        id: 5,
        open: false,
        photo: dreamer,
        title: 'TES 32 DREAMER',
        desc: 'text 1'
    },
    {
        id: 6,
        open: false,
        photo: dreamer_m,
        title: 'TES 32 DREAMER MOTOROWY',
        desc: 'text 2'
    },
    {
        id: 7,
        open: false,
        photo: illuminatus,
        title: 'TES 393 ILLUMINATUS',
        desc: 'text 2'
    }

];
const Production = () => {
    const [data, setData] = useState(elements);
    const [lightboxIsOpen, setlightboxIsOpen] = useState(false);
    const [number, setNumber] = useState(0);

    const openLightBox = (j) => {
        setNumber(j);
        setlightboxIsOpen(true);
        console.log(number);
    };

    const openExpand = (element) => {
        setData(data.map(i => {
                if(element.id === i.id && i.open === true) {
                    i.open = false;
                   return i;
                }
                i.open = element.id === i.id;
                return i;
            })
        );
    };
    const mapExpands = (i) => {
        return (
            <div className={'fullExpand'}>
                <div onClick={() => openExpand(i)} className={i.open ? 'expandButton openedExpand' : 'expandButton'} style={{display: 'block'}}>
                    <IoIosArrowDropright className={'fa-blink'} style={i.open ? {display: ''} : {display: 'none'}}> </IoIosArrowDropright>
                    {i.title}
                </div>
                <Expand open={i.open}
                        className={'expand'}
                        duration={1000}>
                    <div className={'boutDesc'}>{i.desc}</div>
                    <Gallery>
                        {i.photo.map(j =>{
                            console.log(j);
                            return (
                                <Images key={j}>
                                    <img className={'productionImage'} src={j} width={'300px'} height={'200px'} onClick={() => openLightBox(j)}/>
                                </Images>
                            )
                        })}
                    </Gallery>
                    <ModalGateway>
                        {lightboxIsOpen ? (
                            <Modal onClose={() => setlightboxIsOpen(false)}>
                                <Carousel
                                    currentIndex={number}
                                    views={i.photo}
                                    frameProps = {{
                                        autoSize : 'height'
                                    }}
                                    autoSize={ {
                                        width: 2000,
                                        height: 500
                                    }}
                                />
                            </Modal>
                        ) : null}
                    </ModalGateway>
                </Expand>
            </div>
        )
    };

    return (
        <Layout>
            <div className={"production"}>
                <div className={"list_div"}>
                    {data.map(mapExpands)}
                </div>
            </div>
        </Layout>
    )
};

export default Production;