import {
    LETTER_LEVEL_END,
    LOAD_FROM_LOCAL_STORAGE_LETTER_PRIZES,
    PUSH_PRIZE_LETTER
} from "./types";

const initialState = {
        "Б": [false],
        "В": [false],
        "Г": [false],
        "Д": [false],
        "Ж": [false],
        "З": [false],
        "К": [false],
        "Л": [false],
        "М": [false],
        "Н": [false],
        "П": [false],
        "Р": [false],
        "С": [false],
        "Т": [false],
        "Ф": [false],
        "Ц": [false],
        "Ч": [false],
        "Ш": [false],
        "Щ": [false],
};


    const stateLevelEnd = (state = initialState, action) => {

    switch (action.type) {

        case LETTER_LEVEL_END:
            return action.payload

        case LOAD_FROM_LOCAL_STORAGE_LETTER_PRIZES:
            return action.payload

        case PUSH_PRIZE_LETTER:
            return action.payload

        default:
            return state;
    }
}
export default stateLevelEnd