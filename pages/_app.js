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
        <Helmet>
          <meta charSet="utf-8" />
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-180598229-1"
          ></script>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=AW-409941666"
          ></script>
        </Helmet>
        <Helmet
          script={[
            {
              type: "text/javascript",
              innerHTML:
                ' window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag("js", new Date()); gtag("config", "UA-180598229-1");',
            },
          ]}
        />
        <Helmet
          script={[
            {
              type: "text/javascript",
              innerHTML:
                '  window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag("js", new Date()); gtag("config", "AW-409941666");',
            },
          ]}
        />
        <Helmet
          script={[
            {
              type: "text/javascript",
              innerHTML:
                ' gtag("event", "conversion", {"send_to": "AW-409941666/9L4cCLmYrvoBEKLtvMMB"});',
            },
          ]}
        />
        <Component {...pageProps} />
      </Provider>
    </CookiesProvider>
  );
};

export default MyApp;
