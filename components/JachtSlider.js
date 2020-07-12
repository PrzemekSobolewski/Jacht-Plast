import React from 'react'
import {ScrollTo} from "react-scroll-to";
import {useSelector} from "react-redux";
import water from "../assets/images/slides/water.jpg";
import exterior from "../assets/images/slides/exterior.jpg";
import boat from "../assets/images/slides/boat.jpg";
import interior from "../assets/images/slides/interior.jpg";
const JachtSlider = () => {
    const switchState = useSelector(state => state.switch);
    const images = [
        water,
        interior,
        exterior,
        boat
    ];
    
    return (
        <div>
            <div className={'bgContainer2'}>
                <div className="fadein">
                    <img id="f1" src={images[1]}/>
                    <img id="f2" src={images[0]}/>
                    <img id="f3" src={images[2]}/>
                    <img id="f4" src={images[3]}/>

                </div>
                <ScrollTo>
                    {({scrollTo}) => 
                    <div className={'bgButtonContainer'} onClick={() => scrollTo({x: 0, y: 700, smooth: true})}>
                        <div className={'bgButton2'}>
                            {switchState.language.aboutUsButton}
                        </div>
                        <div className={'bgButton'}>
                            {switchState.language.aboutUsButton}
                        </div>
                    </div>}
                </ScrollTo>
            </div>
        </div>
    )
}

export default JachtSlider;