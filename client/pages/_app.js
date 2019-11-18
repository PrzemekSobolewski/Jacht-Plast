import React, {useState} from "react";
import NavigationContext from '../components/NavigationContext'

const MyApp = ({ Component, pageProps }) => {
    const [route, setRoute] = useState('/');
    return (
        <NavigationContext.Provider value={[route, setRoute]}>
             <Component {...pageProps} />
        </NavigationContext.Provider>
    );
};

export default MyApp;

