export const ACCEPT_COOKIE = 'ACCEPT_COOKIE';
export const CANCEL_COOKIE = 'CANCEL_COOKIE';

export const acceptCookie = () => ({
    type: ACCEPT_COOKIE,
});

export const cancelCookie = () => ({
    type: CANCEL_COOKIE,
});
