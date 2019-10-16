import React, {useEffect, useState} from 'react'
import Layout from "../components/Layout";
import Gallery from 'react-grid-gallery';

function importAll(r) {
    return r.keys().map(r);
}
const images = importAll(require.context('../assets/images/boats/', false, /\.(png|jpe?g|svg)$/));

const Library = () => {
    const [rowHeight, setRowHeight] = useState(250);
    useEffect(() => {
        if(window.innerWidth <= 800)
            setRowHeight(100);
    }, []);

    let readyImages = images.map( i => {
       return {
           src: i,
           thumbnail: i,
           thumbnailWidth: 370,
           thumbnailHeight: 200,
           customOverlay: <div className={'thumbnail'} />
       }
    });

    return (
        <Layout>
            <div className={'gallery'}>
                { images && <Gallery images={readyImages}
                         enableImageSelection={false}
                         backdropClosesModal={true}
                         imageCountSeparator={' z '}
                         showLightboxThumbnails={true}
                         rowHeight={rowHeight}
                         margin={5}
                />}
            </div>
        </Layout>
    )
};
export default Library;


