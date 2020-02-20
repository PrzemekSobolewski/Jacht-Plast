import React, {useState} from "react";
import NavigationContext from '../components/NavigationContext'
import {createStore, combineReducers} from "redux";
import modalReducer from "../redux/reducers/modalReducer";
import {Provider} from "react-redux";
import switchReducer from "../redux/reducers/switchReducer";
import cookieReducer from "../redux/reducers/cookieReducer";
import {CookiesProvider} from 'react-cookie';
import {Helmet} from "react-helmet";
import rellaxReducer from "../redux/reducers/rellaxReducer";

const rootReducer = combineReducers({
    modal: modalReducer,
    switch: switchReducer,
    cookie: cookieReducer,
    rellax: rellaxReducer
});

const store = createStore(rootReducer);

const MyApp = ({Component, pageProps}) => {
    const [route, setRoute] = useState('/');

    return (
        <CookiesProvider>
            <Provider store={store}>
                <Helmet htmlAttributes={{ lang : 'en' }}/>
                <NavigationContext.Provider value={[route, setRoute]}>
                    <Component {...pageProps} />
                </NavigationContext.Provider>
            </Provider>
        </CookiesProvider>
    );
};

export default MyApp;

