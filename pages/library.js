import React, {useEffect, useState} from 'react'
import Layout from "../components/Layout";
import Carousel, { Modal, ModalGateway } from 'react-images'


function importAll(r) {
    return r.keys().map(r);
}
const images = importAll(require.context('../assets/images/boats/', false, /\.(png|jpe?g|svg)$/));

const Library = () => {
    const [rowHeight, setRowHeight] = useState(250);
    const [lightboxIsOpen, setlightboxIsOpen] = useState(true);
    const [number, setNumber] = useState(0);
    let readyImages = images.map( i => {
        return {
            src: i,
            thumbnail: i,
            thumbnailWidth: 370,
            thumbnailHeight: 200,
            customOverlay: <div className={'thumbnail'} />
        }
    });

    useEffect(() => {
        if(window.innerWidth <= 800)
            setRowHeight(100);
    }, []);

    return (
        <Layout>
            <Gallery >
                {images.map((i) => (
                    <Images onClick={function(){setNumber(i); setlightboxIsOpen(true)}}>
                        <img className={"image"} src={i}/>
                    </Images>

                ))}
            </Gallery>
            <ModalGateway>
                {lightboxIsOpen ? (
                    <Modal onClose={setlightboxIsOpen(false)}>
                        <Carousel
                            currentIndex={number}
                            views={readyImages}/>
                    </Modal>
                ): null}
            </ModalGateway>
        </Layout>
    );


};
export default Library
const Gallery = (props) => {
    return (
      <div className={"gallery"}
          css={{
              overflow: 'hidden',
              marginLeft: -gutter,
              marginRight: -gutter,
          }}>
          {props.children}
      </div>
    );
};
const gutter = 2;
const Images = (props) => {
    return (
        <div>
            {props.children}
        </div>
    );
};


