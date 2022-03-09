import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();
  const switchState = useSelector((state) => state.switch);

  return (
    <div className={"footer"}>
      <ul className="footerList">
        <li>
          <h4 className={"header"}>{switchState.language.footerContact}</h4>
          <div
            dangerouslySetInnerHTML={{
              __html: switchState.language.footerContactData,
            }}
          />
        </li>
        <li>
          <h4 className={"header"}>{switchState.language.footerData}</h4>
          <div
            dangerouslySetInnerHTML={{
              __html: switchState.language.footerDataData,
            }}
          />
        </li>
        <li className={"sitesContainer"}>
          <h4 className={"header"}>{switchState.language.footerPages}</h4>
          <div className={"sites"} onClick={() => router.push("/")}>
            {switchState.language.aboutUs}
          </div>
          <div className={"sites"} onClick={() => router.push("/production")}>
            {switchState.language.production}
          </div>
          <div className={"sites"} onClick={() => router.push("/transport")}>
            {switchState.language.transport}
          </div>
          <div className={"sites"} onClick={() => router.push("/contact")}>
            {switchState.language.contact}
          </div>
        </li>
        <li>
          <h4 className={"header"}>{switchState.language.footerInvite}</h4>
          <div id={"fb_icon"}>
            <a
              href={
                "https://www.facebook.com/Jacht-Plast-Zdzis%C5%82aw-Sobolewski-1328748387208685/"
              }
              target={"_white"}
            >
              <FaFacebookSquare />
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
};
export default Footer;
