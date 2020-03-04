export const OPEN_MODAL = "OPEN_MODAL";
export const LOAD_DATA_MODAL = "LOAD_DATA_MODAL";
export const SET_NUMBER_MODAL = "SET_NUMBER_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";

export const openModal = () => ({
    type: OPEN_MODAL,
});

export const loadDataModal = payload => ({
    type: LOAD_DATA_MODAL,
    payload: payload,
});

export const setNumberModal = payload => ({
    type: SET_NUMBER_MODAL,
    payload: payload,
});

export const closeModal = () => ({
    type: CLOSE_MODAL
});