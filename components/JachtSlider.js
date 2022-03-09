import React from 'react'
import {ScrollTo} from "react-scroll-to";
import {useSelector} from "react-redux";
import water from "../assets/images/slides/water.webp";
import exterior from "../assets/images/slides/exterior.webp";
import boat from "../assets/images/slides/boat.webp";
import interior from "../assets/images/slides/interior.webp";
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
                    <img id="f1" src={images[1]} alt="Wnętrze siedziby firmy przepełnione jachtami w produkcji"/>
                    <img id="f2" src={images[0]} alt="Łódź żaglowa na płynąca po jeziorze"/>
                    <img id="f3" src={images[2]} alt="Transport jachtu z wykorzystaniem samochodu Dodge Ram oraz odpowiednio przystosowanej przyczepy"/>
                    <img id="f4" src={images[3]} alt="Jacht Tes 32 zadokowany w porcie"/>

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