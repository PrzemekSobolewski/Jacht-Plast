import {NOT_MOVE, MOVE, MOVE_FAST, MOVE_WITH_MANY_PIC} from "../actions/parallaxActions";

const initialState = {
    yOffset: [0, 0]
};

export default (state = initialState, action) => {
    switch (action.type) {
        case NOT_MOVE:
            return {
                ...state,
                yOffset: [0, 0]
            };
        case MOVE:
            return {
                yOffset: [-10, 20]
            };
        case MOVE_FAST:
            return {
                yOffset: [-20, 40]
            };
        case MOVE_WITH_MANY_PIC:
            return {
                yOffset: [-50, 100]
            };
        default:
            return state;
    }
};