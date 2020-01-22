import React, {useState} from "react";
import NavigationContext from '../components/NavigationContext'
import {createStore, combineReducers} from "redux";
import modalReducer from "../redux/reducers/modalReducer";
import {Provider} from "react-redux";
import switchReducer from "../redux/reducers/switchReducer";
import cookieReducer from "../redux/reducers/cookieReducer";
import {CookiesProvider} from 'react-cookie';

const rootReducer = combineReducers({
    modal: modalReducer,
    switch: switchReducer,
    cookie: cookieReducer
});

const store = createStore(rootReducer);

const MyApp = ({Component, pageProps}) => {
    const [route, setRoute] = useState('/');

    return (
        <CookiesProvider>
            <Provider store={store}>
                <NavigationContext.Provider value={[route, setRoute]}>
                    <Component {...pageProps} />
                </NavigationContext.Provider>
            </Provider>
        </CookiesProvider>
    );
};

export default MyApp;

