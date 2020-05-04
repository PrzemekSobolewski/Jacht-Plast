import axios from "axios/index";

export const SENDING_MAIL = 'SENDING_MAIL';
export const SEND_SUCCESS = 'SEND_SUCCESS';
export const SEND_ERROR = 'SEND_ERROR';
export const RESET_STATE = 'RESET_STATE';

export const sendingMail = () => ({
    type: SENDING_MAIL,
});

export const handleSendingSuccess = () => ({
    type: SEND_SUCCESS,
});

export const handleSendingError = () => ({
    type: SEND_ERROR,
});

export const resetState = () => ({
    type: RESET_STATE,
});


export const sendMail = (body) => async dispatch => {
    dispatch(sendingMail());

    const instance = axios.create({
        baseURL: 'https://cocky-wilson-df27de.netlify.app',
    });

    let response = await instance.post('/.netlify/functions/api/form', {
        name: body.name,
        email: body.email,
        subject: body.subject,
        message: body.message
    });
    console.log(response);
    if (response.status === 200) {
        console.log(response.data.msg);
        dispatch(handleSendingSuccess());

    } else if (response.status >= 400) {
        dispatch(handleSendingError());
    }

    setTimeout(() => dispatch(resetState()), 2000);

};