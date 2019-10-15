import React from 'react';
import { FaFacebookSquare } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";

const Footer = () => {
    return(
        <div className={"footer"}>
            <ul className="footerList">
                <li>
                    <h3>Kontakt</h3>
                    Tel/fax (48) 375 67 35<br/>
                    Tel. kom. 601 256 133 <br/>
                </li>
                <li>
                    <h3>Dane firmy:</h3>
                    PHUP JACHT-PLAST<br/>
                    ul. Przemysłowa 4<br/>
                    26-340 Drzewica<br/>
                </li>
                <li>
                    <h4>Odwiedź nasz profil na portalu Facebook!</h4>
                    <li id={"fb_icon"}>
                        <a href={"https://www.facebook.com/Jacht-Plast-Zdzis%C5%82aw-Sobolewski-1328748387208685/"}>
                            <FaFacebookSquare/>
                        </a>
                    </li>
                </li>
                <li id={"arrow_up"} onClick={() => window.scroll(0,0)}>
                    <span><FaAngleUp/></span>
                </li>
            </ul>
        </div>
    )
};
export default Footer;