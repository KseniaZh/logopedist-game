import {
    FLAG_FINAL_LETTER,
    TAKE_PRIZE_FLAG_NULL
} from "./types";

const initialState = {
    "Б": true,
    "В": true,
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
};


    const stateFinalLetter = (state = initialState, action) => {

    switch (action.type) {

        case FLAG_FINAL_LETTER:
            return action.payload

        case TAKE_PRIZE_FLAG_NULL:
            return action.payload

        default:
            return state;
    }
}
export default stateFinalLetter