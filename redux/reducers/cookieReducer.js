import { ACCEPT_COOKIE, CANCEL_COOKIE } from "../actions/cookieActions";

const initialState = {
  cookieAccepted: false,
  showCookies: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACCEPT_COOKIE:
      return {
        ...state,
        cookieAccepted: true,
        showCookies: false,
      };
    case CANCEL_COOKIE:
      return {
        ...state,
        cookieAccepted: false,
        showCookies: false,
      };
    default:
      return state;
  }
};
