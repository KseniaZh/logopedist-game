import {
    LETTER_LEVEL_END
} from "./types";

const initialState = {
    'letter': {
    "Б": false,
    "В": false,
    "Г": false,
    "Д": false,
    "Ж": false,
    "З": false,
    "К": false,
    "Л": false,
    "М": false,
    "Н": false,
    "П": false,
    "Р": false,
    "С": false,
    "Т": false,
    "Ф": false,
    "Ц": false,
    "Ч": false,
    "Ш": false,
    "Щ": false,
    },
    'word': {
        "Б": false,
        "В": false,
        "Г": false,
        "Д": false,
        "Ж": false,
        "З": false,
        "К": false,
        "Л": false,
        "М": false,
        "Н": false,
        "П": false,
        "Р": false,
        "С": false,
        "Т": false,
        "Ф": false,
        "Ц": false,
        "Ч": false,
        "Ш": false,
        "Щ": false,
    },
};


    const stateLevelEnd = (state = initialState, action) => {

    switch (action.type) {

        case LETTER_LEVEL_END:
            return action.payload

        default:
            return state;
    }
}
export default stateLevelEnd