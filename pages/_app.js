import React from "react";
import {createStore, combineReducers} from "redux";
import modalReducer from "../redux/reducers/modalReducer";
import {Provider} from "react-redux";
import switchReducer from "../redux/reducers/switchReducer";
import cookieReducer from "../redux/reducers/cookieReducer";
import {CookiesProvider} from 'react-cookie';
import {Helmet} from "react-helmet";
import Head from 'next/head';
import icon from '../public/icon.png'

const rootReducer = combineReducers({
    modal: modalReducer,
    switch: switchReducer,
    cookie: cookieReducer,
});

const store = createStore(rootReducer);

const MyApp = ({Component, pageProps}) => {
    return (
        <CookiesProvider>
            <Provider store={store}>
                <Head>
                    <link rel="shortcut icon" href={icon}/>
                </Head>
                <Helmet htmlAttributes={{lang: 'pl'}}/>
                <Component {...pageProps} />
            </Provider>
        </CookiesProvider>
    );
};

export default MyApp;

