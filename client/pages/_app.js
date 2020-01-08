import React, {useState} from "react";
import NavigationContext from '../components/NavigationContext'
import {createStore, combineReducers} from "redux";
import modalReducer from "../redux/reducers/modalReducer";
import {Provider} from "react-redux";

const rootReducer = combineReducers({
    modal: modalReducer,
});

const store = createStore(rootReducer);

const MyApp = ({Component, pageProps}) => {
    const [route, setRoute] = useState('/');
    return (
        <Provider store={store}>
            <NavigationContext.Provider value={[route, setRoute]}>
                <Component {...pageProps} />
            </NavigationContext.Provider>
        </Provider>
    );
};

export default MyApp;

