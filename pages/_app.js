import React from "react";
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

const rootReducer = combineReducers({
  contactMail: contactReducer,
  modal: modalReducer,
  switch: switchReducer,
  cookie: cookieReducer,
});

const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

const MyApp = ({ Component, pageProps }) => {
  return (
    <CookiesProvider>
      <Provider store={store}>
        <Head>
          <link rel="shortcut icon" href={icon} />
        </Head>
        <Helmet htmlAttributes={{ lang: "pl-PL" }} />
        <GTMContainer />
        <Component {...pageProps} />
      </Provider>
    </CookiesProvider>
  );
};

export default MyApp;
