import {
    FLAG_FINAL_LETTER,
    TAKE_PRIZE_FLAG_NULL,
    BEGIN_AGAIN_ALL_LETTERS,
    LOAD_FROM_LOCAL_STORAGE_FINAL_LETTER
} from "./types";

const initialState = {
    "Б": true,
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
};


    const stateFinalLetter = (state = initialState, action) => {

    switch (action.type) {

        case FLAG_FINAL_LETTER:
            return action.payload

        case TAKE_PRIZE_FLAG_NULL:
            return action.payload

        case BEGIN_AGAIN_ALL_LETTERS:
            return action.payload

        case LOAD_FROM_LOCAL_STORAGE_FINAL_LETTER:
            return action.payload

        default:
            return state;
    }
}
export default stateFinalLetter