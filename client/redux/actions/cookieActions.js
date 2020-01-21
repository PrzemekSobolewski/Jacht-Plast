export const OPEN_COOKIE = 'OPEN_COOKIE';
export const ACCEPT_COOKIE = 'ACCEPT_COOKIE';
export const CLOSE_COOKIE = 'CLOSE_COOKIE';
export const CANCEL_COOKIE = 'CANCEL_COOKIE';

export const acceptCookie = () => ({
    type: ACCEPT_COOKIE,
});
export const closeCookie = () => ({
    type: CLOSE_COOKIE,
});
export const cancelCookie = () => ({
    type: CANCEL_COOKIE,
});
