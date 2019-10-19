import React from 'react';
import {FaFacebookSquare} from "react-icons/fa";
import {FaAngleUp} from "react-icons/fa";
import {ScrollTo} from "react-scroll-to";
import Link from "next/dist/client/link";

const Footer = () => {
    return (
        <div className={"footer"}>
            <ul className="footerList">
                <li>
                    <h4 className={'header'}>Kontakt</h4>
                    Tel/fax (48) 375 67 35<br/>
                    Tel. kom. 601 256 133 <br/>
                    E-mail: jachtplast@gmail.com<br/>
                    <br/>
                    Godziny pracy:<br/>
                    Poniedziałek - Piątek<br/>
                    8:00 - 17:00
                </li>
                <li>
                    <h4 className={'header'}>Dane firmy:</h4>
                    PHUP JACHT-PLAST<br/>
                    ul. Przemysłowa 4<br/>
                    26-340 Drzewica<br/>
                    <br/>
                    NIP: 799-13-31-976<br/>
                </li>
                <li className={'sitesContainer'}>
                    <h4 className={'header'}>Strony:</h4>
                    <Link href={"/"}>
                        <div className={'sites'}>
                            O nas
                        </div>
                    </Link>
                    <Link href={"/"}>
                        <div className={'sites'}>
                            Produkcja
                        </div>
                    </Link>
                    <Link href={"/library"}>
                        <div className={'sites'}>
                            Galeria
                        </div>
                    </Link>
                    <Link href={"/transport"}>
                        <div className={'sites'}>
                            Transport
                        </div>
                    </Link>
                    <Link href={"/contact"}>
                        <div className={'sites'}>
                            Kontakt
                        </div>
                    </Link>
                </li>
                <li>
                    <h4 className={'header'}>Odwiedź nasz profil na Facebooku!</h4>
                    <li id={"fb_icon"}>
                        <a href={"https://www.facebook.com/Jacht-Plast-Zdzis%C5%82aw-Sobolewski-1328748387208685/"}
                           target={'_white'}>
                            <FaFacebookSquare/>
                        </a>
                    </li>
                </li>
            </ul>
        </div>
    )
};
export default Footer;