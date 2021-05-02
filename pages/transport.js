import React, {useEffect, useState} from 'react'
import Expand from "react-expand-animated"
import Layout from "../components/Layout";
import Images from '../components/Images'
import Gallery from '../components/Gallery'
import {IoIosArrowDropdown, IoIosCheckmark} from "react-icons/io";
import Fade from 'react-reveal/Fade'
import * as actions from "../redux/actions/modalActions";
import {useDispatch, useSelector} from "react-redux";
import {Helmet} from "react-helmet";
import headerImageSrc from "../assets/images/slides/transport_header.jpg";
import headerImageSecondSrc from "../assets/images/slides/transport_header_second.jpg";
function importAll(r) {
    return r.keys().map(r);
}

const images = importAll(require.context('../assets/images/transport/', false, /\.(png|jpe?g|svg)$/));

const Transport = () => {
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const switchState = useSelector(state => state.switch);

    useEffect(() => {
        let readyImages = images.map(image => {
            return {
                src: image
            }
        });
        dispatch(actions.loadDataModal(readyImages));
    }, []);

    const openLightBox = (index) => {
        dispatch(actions.setNumberModal(index));
        dispatch(actions.openModal());
    };

    const mapToImage = (image, index) => {
        return (
            <Images key={index}>
                <img className={"image"} src={image} onClick={() => openLightBox(index)} alt={"Image of transport " + index}/>
            </Images>)
    };
    return (
        <Layout>
            <Helmet>
                <script async src="https://www.googletagmanager.com/gtag/js?id=UA-180598229-1"></script>
                <script async src="https://www.googletagmanager.com/gtag/js?id=AW-409941666"></script>
            </Helmet>
            <Helmet
                 script={[{ 
                    type: 'text/javascript', 
                    innerHTML: ' window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag("js", new Date()); gtag("config", "UA-180598229-1");' 
                  }]} 
            />
             <Helmet
                  script={[{ 
                    type: 'text/javascript', 
                    innerHTML: '  window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag("js", new Date()); gtag("config", "AW-409941666");' 
                  }]} 
            />
                  <Helmet
                  script={[{ 
                    type: 'text/javascript', 
                    innerHTML: ' gtag("event", "conversion", {"send_to": "AW-409941666/9L4cCLmYrvoBEKLtvMMB"});'
                  }]} 
            />
            <Helmet>
                <meta charSet="utf-8" />
                <title>Kompleksowe usługi transportu łodzi | Jacht Plast</title>
                <meta name="description" content="Transport łodzi motorowych i żaglowych w profesjonalnym podejściu do klienta. Niskie ceny transportu. Przewóz jachtów w Polsce i Europie."/>
            </Helmet>
            <div className={"transportText"}>
                
                    
                <div className="c-banner-text" style={{textAlign: 'center'}}><h1>{switchState.language.transportHeader}</h1></div>
                
                <div className='c-header-banner'>
                    <img src={headerImageSrc}/>
                    <img src={headerImageSecondSrc}/>
                </div>
                <Fade>
                    <ul className={'transportList'}>
                        <li><IoIosCheckmark className={'checkmark'} alt={"Icon checkmark"}/>
                            {switchState.language.transportListOne}
                        </li>
                        <li><IoIosCheckmark className={'checkmark'} alt={"Icon checkmark"}/>
                            {switchState.language.transportListTwo}
                        </li>
                        <li><IoIosCheckmark className={'checkmark'} alt={"Icon checkmark"}/>
                            {switchState.language.transportListThree}
                        </li>
                        <li><IoIosCheckmark className={'checkmark'} alt={"Icon checkmark"}/>
                            {switchState.language.transportListFour}
                        </li>
                        <li><IoIosCheckmark className={'checkmark'} alt={"Icon checkmark"}/>
                            {switchState.language.transportListFive}
                        </li>
                    </ul>
                </Fade>
                <div className={'underList'} dangerouslySetInnerHTML={{__html: switchState.language.transportText}}/>

            </div>
            <div className={"transportLine"}>
                <span onClick={() => setOpen(!open)} className={!open ? "transportIcon" : 'transportIconActive'}>
                    <IoIosArrowDropdown/>
                </span>

            </div>
            <Expand open={open}
                    className={'transportExpand'}
                    duration={500}>
                <div className={'transport-gallery'}>
                    <Gallery>
                        {images.map(mapToImage)}
                    </Gallery>
                </div>
            </Expand>
        </Layout>
    )
};
export default Transport