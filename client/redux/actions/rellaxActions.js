import {CLOSE_MODAL, LOAD_DATA_MODAL, OPEN_MODAL, SET_NUMBER_MODAL} from "./modalActions";

export const NOT_MOVE = "NOT_MOVE";
export const MOVE = "MOVE";
export const MOVE_FAST = "MOVE_FAST";
export const MOVE_WITH_MANY_PIC = "MOVE_WITH_MANY_PIC";

export const notMove = () => ({
    type: NOT_MOVE
});

export const move = () => ({
    type: MOVE

});

export const moveFast = () => ({
    type: MOVE_FAST

});

export const moveWithManyPic = () => ({
    type: MOVE_WITH_MANY_PIC
});