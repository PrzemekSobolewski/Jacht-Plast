import {CLOSE_MODAL, LOAD_DATA_MODAL, OPEN_MODAL, SET_NUMBER_MODAL} from "../actions/modalActions";

const initialState = {
    isOpen: false,
    photos: null,
    index: 0,
};

export default (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case OPEN_MODAL:
            return {
                ...state,
                isOpen: true
            };
        case LOAD_DATA_MODAL:
            return {
                ...state,
                photos: action.payload
            };
        case SET_NUMBER_MODAL:
            return {
                ...state,
                index: action.payload
            };
        case CLOSE_MODAL:
            return {
                ...state,
                isOpen: false,
                index: 0
            };
        default:
            return state;
    }
};