import {
    BUTTON_LEVEL_COMPLETED,
    BUTTON_LEVEL_REPEAT,
    TAKE_PRIZE_ALL_LEVELS_NULL,
    BEGIN_AGAIN_ALL_LETTERS_LEVELS_NULL

} from "./types";

const initialState = {
    "Б": [false, false, false, false, false, false],
    "В": [false, false, false, false, false, false],
    "Г": [false, false, false, false, false, false],
    "Д": [false, false, false, false, false, false],
    "Ж": [false, false, false, false, false, false],
    "З": [false, false, false, false, false, false],
    "К": [false, false, false, false, false, false],
    "Л": [false, false, false, false, false, false],
    "М": [false, false, false, false, false, false],
    "Н": [false, false, false, false, false, false],
    "П": [false, false, false, false, false, false],
    "Р": [false, false, false, false, false, false],
    "С": [false, false, false, false, false, false],
    "Т": [false, false, false, false, false, false],
    "Ф": [false, false, false, false, false, false],
    "Ц": [false, false, false, false, false, false],
    "Ч": [false, false, false, false, false, false],
    "Ш": [false, false, false, false, false, false],
    "Щ": [false, false, false, false, false, false],
};


const stateLevelFinal = (state = initialState, action) => {

    switch (action.type) {

        case BUTTON_LEVEL_COMPLETED:
            return action.payload

        case BUTTON_LEVEL_REPEAT:
            return action.payload

        case TAKE_PRIZE_ALL_LEVELS_NULL:
            return action.payload

        case BEGIN_AGAIN_ALL_LETTERS_LEVELS_NULL:
            return action.payload

        default:
            return state;
    }
}
export default stateLevelFinal