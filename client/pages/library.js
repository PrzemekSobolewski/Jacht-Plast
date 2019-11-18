import React, {useEffect, useState} from 'react'
import Layout from "../components/Layout";
import Carousel, {Modal, ModalGateway} from 'react-images'
import Images from '../components/Images'
import Gallery from '../components/Gallery'

function importAll(r) {
    return r.keys().map(r);
}

const images = importAll(require.context('../assets/images/boats/', false, /\.(png|jpe?g|svg)$/));

const Library = () => {
    const [lightboxIsOpen, setlightboxIsOpen] = useState(false);
    const [number, setNumber] = useState(0);
    let readyImages = images.map(i => {
        return {
            src: i
        }
    });

    const openLightBox = (j) => {
        setNumber(j);
        setlightboxIsOpen(true)
        console.log(number);
    };

    const mapToImage = (i, j) => {
        return (
            <Images key={j}>
                <img className={"image"} src={i} onClick={() => openLightBox(j)}/>
            </Images>)
    };
    return (
        <Layout>
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
            </div>
        </Layout>
    );


};
export default Library


