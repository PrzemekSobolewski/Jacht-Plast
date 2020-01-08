import React, {useEffect} from 'react'
import Layout from "../components/Layout";
import Images from '../components/Images'
import Gallery from '../components/Gallery'
import {useDispatch} from "react-redux";
import * as actions from "../redux/actions/modalActions";

function importAll(r) {
    return r.keys().map(r);
}

const images = importAll(require.context('../assets/images/boats/', false, /\.(png|jpe?g|svg)$/));

const Library = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        let readyImages = images.map(i => {
            return {
                src: i
            }
        });
        dispatch(actions.loadDataModal(readyImages));
    }, []);

    const openLightBox = (index) => {
        dispatch(actions.setNumberModal(index));
        dispatch(actions.openModal());
    };

    const mapToImage = (photo, index) => {
        return (
            <Images key={index}>
                <img className={"image"} src={photo} onClick={() => openLightBox(index)}/>
            </Images>)
    };
    return (
        <Layout>
            <div className={'gallery'}>
                <Gallery>
                    {images.map(mapToImage)}
                </Gallery>
            </div>
        </Layout>
    );


};
export default Library


