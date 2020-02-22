import React from 'react';
import {MdCancel} from 'react-icons/md';
import Fab from '@material-ui/core/Fab';

const CookiesModal = (props) => {
    return (
        <div className={'containerCookies'}>
            <div className={'content'}>
                <MdCancel className={'cancel'} onClick={() => props.close()}/>
                <div className={'title'}>
                    Cookies Policy
                </div>
                <div className={'body'}>
                    This site use cookies and other tracking technologies to improve your browsing experience on our website and to show you personalized content.
                    By browsing our website, you consent to use of cookies.
                </div>
                <div className={'buttonContainer'}>
                    <Fab variant="extended" color="primary" className={'button'} onClick={() => props.accept()}>
                        ACCEPT
                    </Fab>
                    <Fab variant="extended" color="primary" className={'button'} onClick={() => props.close()}>
                        CANCEL
                    </Fab>
                </div>
            </div>
        </div>
    )
};

export default CookiesModal;