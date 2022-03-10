import React, {useState, useEffect } from "react";
import dynamic from 'next/dynamic';
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import modalReducer from "../redux/reducers/modalReducer";
import { Provider } from "react-redux";
import switchReducer from "../redux/reducers/switchReducer";
import cookieReducer from "../redux/reducers/cookieReducer";
import contactReducer from "../redux/reducers/contactReducer";
import { CookiesProvider } from "react-cookie";
import { Helmet } from "react-helmet";
import Head from "next/head";
import icon from "../public/icon.png";
import thunk from "redux-thunk";
import { GTMContainer } from "../components/GTM";
const Hamburger = dynamic(() => import("../components/hamburgerMenu"));
const Footer = dynamic(() => import("../components/footer"));
const Nav = dynamic(() => import("../components/nav"));

const rootReducer = combineReducers({
  contactMail: contactReducer,
  modal: modalReducer,
  switch: switchReducer,
  cookie: cookieReducer,
});

const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

const MyApp = ({ Component, pageProps }) => {

  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <CookiesProvider>
      <Provider store={store}>
        <Head>
          <title>Jacht-Plast</title>
          <link rel="shortcut icon" href={icon} />
        </Head>
        <Helmet htmlAttributes={{ lang: "pl-PL" }} />
        <GTMContainer />
        <div className={"container"}>
          {width > 1100 ? <Nav /> : <Hamburger />}
        </div>
        <Component {...pageProps} />
        <div className={"container"}>
        <Footer />
        </div>
      </Provider>
    </CookiesProvider>
  );
};

export default MyApp;
