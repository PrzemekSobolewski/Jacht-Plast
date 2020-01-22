import React, {useEffect, useState} from 'react'
import Expand from "react-expand-animated"
import Layout from "../components/Layout";
import Images from '../components/Images'
import Gallery from '../components/Gallery'
import {IoIosArrowDropdown, IoIosCheckmark} from "react-icons/io";
import Fade from 'react-reveal/Fade'
import * as actions from "../redux/actions/modalActions";
import {useDispatch, useSelector} from "react-redux";

function importAll(r) {
    return r.keys().map(r);
}

const images = importAll(require.context('../assets/images/transport/', false, /\.(png|jpe?g|svg)$/));

const Transport = () => {
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const switchState = useSelector(state => state.switch);

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

    const mapToImage = (i, j) => {
        return (
            <Images key={j}>
                <img className={"image"} src={i} onClick={() => openLightBox(j)}/>
            </Images>)
    };
    return (
        <Layout>
            <div className={"transportText"}>
                <div style={{textAlign: 'center'}}><h2>P.H.U.P. "JACHT-PLAST"</h2></div>
                <Fade>
                    <ul className={'transportList'}>
                        <li><IoIosCheckmark className={'checkmark'}/>
                            {switchState.language.transportListOne}
                        </li>
                        <li><IoIosCheckmark className={'checkmark'}/>
                            {switchState.language.transportListTwo}
                        </li>
                        <li><IoIosCheckmark className={'checkmark'}/>
                            {switchState.language.transportListThree}
                        </li>
                        <li><IoIosCheckmark className={'checkmark'}/>
                            {switchState.language.transportListFour}
                        </li>
                        <li><IoIosCheckmark className={'checkmark'}/>
                            {switchState.language.transportListFive}
                        </li>
                    </ul>
                </Fade>
                <div className={'underList'} dangerouslySetInnerHTML={{__html: switchState.language.transport_text}}/>

            </div>
            <div className={"transportLine"}>
                <span onClick={() => setOpen(!open)} className={!open ? "transportIcon" : 'transportIconActive'}>
                    <IoIosArrowDropdown/>
                </span>

            </div>
            <Expand open={open}
                    className={'transportExpand'}
                    duration={500}>
                <div className={'gallery'}>
                    <Gallery>
                        {images.map(mapToImage)}
                    </Gallery>
                </div>
            </Expand>
        </Layout>
    )
};
export default Transport