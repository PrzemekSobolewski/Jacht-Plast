import React from 'react'
import Layout from "../components/Layout";
import PropTypes from 'prop-types';
import Gallery from 'react-grid-gallery';
import Zdj1 from "../assets/images/boats/zdj1.jpg";
import Zdj2 from "../assets/images/boats/zdj2.jpg";
import Zdj3 from "../assets/images/boats/zdj3.jpg";
import Zdj4 from "../assets/images/boats/zdj4.jpg";
import Zdj5 from "../assets/images/boats/zdj5.jpg";
import Zdj6 from "../assets/images/boats/zdj6.jpg";
import Zdj7 from "../assets/images/boats/zdj7.jpg";
import Zdj8 from "../assets/images/boats/zdj8.jpg";
const Galle = () => (
    <Layout>
        <div style={{height: 1000, backgroundColor: 'gray'}}>
            <Gallery images={IMAGES}/>
        </div>
    </Layout>
);
export default Galle;

const IMAGES =
    [
        {
            src: Zdj1,
            thumbnail: Zdj1,
            thumbnailWidth: 320,
            thumbnailHeight: 174
        },
        {
            src:Zdj2,
            thumbnail:Zdj2,
            thumbnailWidth: 320,
            thumbnailHeight: 212
        },
        {
            src:Zdj3,
            thumbnail:Zdj3,
            thumbnailWidth: 320,
            thumbnailHeight: 212
        },
        {
            src:Zdj4,
            thumbnail:Zdj4,
            thumbnailWidth:320,
            thumbnailHeight:212
        },
        {
            src:Zdj5,
            thumbnail:Zdj5,
            thumbnailWidth: 320,
            thumbnailHeight: 213
        },
        {
            src:Zdj6,
            thumbnail:Zdj6,
            thumbnailWidth: 320,
            thumbnailHeight: 183
        },
        {
            src:Zdj7,
            thumbnail:Zdj7,
            thumbnailWidth: 240,
            thumbnailHeight: 320
        },
        {
            src:Zdj8,
            thumbnail:Zdj8,
            thumbnailWidth: 320,
            thumbnailHeight: 190
        },
    ];



