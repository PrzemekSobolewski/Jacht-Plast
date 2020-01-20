import React from 'react';
import {FaFacebookSquare} from "react-icons/fa";
import Link from "next/dist/client/link";
import {useSelector} from "react-redux";

const Footer = () => {
    const switchState = useSelector(state => state.switch);
    return (
        <div className={"footer"}>
            <ul className="footerList">
                <li>
                    <h4 className={'header'}>{switchState.language.footer_contact}</h4>
                    <div dangerouslySetInnerHTML={{__html: switchState.language.footer_contact_data}}/>
                </li>
                <li>
                    <h4 className={'header'}>{switchState.language.footer_data}</h4>
                    <div dangerouslySetInnerHTML={{__html: switchState.language.footer_data_data}}/>
                </li>
                <li className={'sitesContainer'}>
                    <h4 className={'header'}>{switchState.language.footer_pages}</h4>
                    <Link href={"/"}>
                        <div className={'sites'}>
                            {switchState.language.about_us}
                        </div>
                    </Link>
                    <Link href={"/production"}>
                        <div className={'sites'}>
                            {switchState.language.production}
                        </div>
                    </Link>
                    <Link href={"/transport"}>
                        <div className={'sites'}>
                            {switchState.language.transport}
                        </div>
                    </Link>
                    <Link href={"/contact"}>
                        <div className={'sites'}>
                            {switchState.language.contact}
                        </div>
                    </Link>
                </li>
                <li>
                    <h4 className={'header'}>{switchState.language.footer_invite}</h4>
                    <div id={"fb_icon"}>
                        <a href={"https://www.facebook.com/Jacht-Plast-Zdzis%C5%82aw-Sobolewski-1328748387208685/"}
                           target={'_white'}>
                            <FaFacebookSquare/>
                        </a>
                    </div>
                </li>
            </ul>
        </div>
    )
};
export default Footer;