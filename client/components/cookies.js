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
                    This website or its third-party tools use cookies, which are necessary to its functioning and
                    required to achieve the purposes illustrated in the&nbsp;
                    <a href="/#" target="_blank" rel="noopener noreferrer" className={'href'}>Cookie Policy.</a>
                    &nbsp;If you want to know more or withdraw your consent to all or some of the cookies, please refer to the
                    cookie policy.
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