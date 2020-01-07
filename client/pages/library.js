import React, {useState} from 'react'
import Layout from "../components/Layout";
import Carousel, {Modal, ModalGateway} from 'react-images'
import Images from '../components/Images'
import Gallery from '../components/Gallery'

function importAll(r) {
    return r.keys().map(r);
}

const images = importAll(require.context('../assets/images/boats/', false, /\.(png|jpe?g|svg)$/));

const Library = () => {
    const [lightBoxIsOpen, setlightBoxIsOpen] = useState(false);
    const [number, setNumber] = useState(0);
    let readyImages = images.map(i => {
        return {
            src: i
        }
    });

    const openLightBox = (j) => {
        setNumber(j);
        setlightBoxIsOpen(true);
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
                    {lightBoxIsOpen ? (
                        <Modal onClose={() => setlightBoxIsOpen(false)}>
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


