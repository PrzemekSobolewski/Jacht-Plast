import React, { useEffect, useContext } from "react";
import { useRouter } from "next/router";
import Headroom from "react-headroom";
import logoImage from "../assets/images/logo.png";
import * as actions from "../redux/actions/switchActions";
import * as cookieActions from "../redux/actions/cookieActions";
import { useDispatch, useSelector } from "react-redux";
import Switch from "react-switch";
import POLAND from "../assets/images/poland.png";
import ENG from "../assets/images/uk.png";
import { CookiesProvider } from "react-cookie";
import CookiesModal from "./cookies";
import Cookies from "universal-cookie";

const Nav = () => {
  const dispatch = useDispatch();
  const switchState = useSelector((state) => state.switch);
  const cookieState = useSelector((state) => state.cookie);
  const cookies = new Cookies("switch");
  const router = useRouter();

  useEffect(() => {
    if (cookies.get("switch") !== undefined) {
      dispatch(cookieActions.acceptCookie());
      setSwitch(cookies.get("switch") === "true");
    }
  });

  const setSwitch = (value) => {
    if (value) {
      dispatch(actions.setPl());
    } else {
      dispatch(actions.setEng());
    }
    if (cookieState.cookieAccepted) {
      cookies.set("switch", switchState, { path: "/" });
    }
  };

  const accept = () => {
    dispatch(cookieActions.acceptCookie());
    cookies.set("switch", switchState, { path: "/" });
  };

  const close = () => {
    dispatch(cookieActions.cancelCookie());
  };

  return (
    <CookiesProvider>
      <Headroom style={{ backgroundColor: "white" }}>
        <img
          src={logoImage}
          id="logoImage"
          className={"logo"}
          alt={"Logo of Jacht-Plast"}
          onClick={() => router.push("/")}
        />
        <div className={"rightBox"}>
          <ul className={"list"}>
            <li
              onClick={() => router.push("/")}
              className={router.pathname === "/" ? "pressed" : ""}
            >
              {switchState.language.aboutUs}
            </li>
            <li
              onClick={() => router.push("/produkcja")}
              className={router.pathname === "/produkcja" ? "pressed" : ""}
            >
              {switchState.language.production}
            </li>
            <li
              onClick={() => router.push("/transport-jachtow")}
              className={router.pathname === "/transport-jachtow" ? "pressed" : ""}
            >
              {switchState.language.transport}
            </li>
            <li
              onClick={() => router.push("/kontakt")}
              className={router.pathname === "/kontakt" ? "pressed" : ""}
            >
              {switchState.language.contact}
            </li>
          </ul>
          <div className={"switchContainer"}>
            <Switch
              onChange={(value) => setSwitch(value)}
              checked={switchState.isPl}
              width={100}
              onColor={"#888"}
              checkedIcon={
                <img src={POLAND} alt={"PL"} className={"checkedSwitch"} />
              }
              uncheckedIcon={
                <img src={ENG} alt={"ENG"} className={"uncheckedSwitch"} />
              }
            />
          </div>
        </div>
      </Headroom>
      {cookieState.showCookies ? (
        <CookiesModal close={close} accept={accept} />
      ) : null}
    </CookiesProvider>
  );
};

export default Nav;
