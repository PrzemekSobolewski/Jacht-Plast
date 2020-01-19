import {SET_ENG, SET_PL} from "../actions/switchActions";
import TextService from "../../config/text.service";

const initialState = {
    isPl: true,
    language: TextService.textPl
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_ENG:
            return {
                ...state,
                isPl: false,
                language: TextService.textEng
            };
        case SET_PL:
            return {
                ...state,
                isPl: true,
                language: TextService.textPl
            };
        default:
            return state;
    }
};