import {NOT_MOVE, MOVE, MOVE_FAST, MOVE_WITH_MANY_PIC} from "../actions/rellaxActions";

const initialState = {
    speed: 0
};

export default (state = initialState, action) => {
    switch (action.type) {
        case NOT_MOVE:
            return {
                ...state,
                speed: 0
            };
        case MOVE:
            return {
                speed: -2
            };
        case MOVE_FAST:
            return {
                speed: -10
            };
        case MOVE_WITH_MANY_PIC:
            return {
                speed: -15
            };
        default:
            return state;
    }
};