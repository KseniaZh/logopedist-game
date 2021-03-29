import {
    FLAG_FINAL_LETTER_WORDS,
    TAKE_PRIZE_FLAG_LETTER_WORDS_NULL,
    BEGIN_AGAIN_ALL_LETTERS_WORDS_NULL,
    LOAD_FROM_LOCAL_STORAGE_FINAL_LETTER_WORDS
} from "./types";

const initialState = {
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
    "Х": false,
    "Ц": false,
    "Ч": false,
    "Ш": false,
    "Щ": false,
};


const stateFinalLetterWords = (state = initialState, action) => {

    switch (action.type) {

        case FLAG_FINAL_LETTER_WORDS:
            return action.payload

        case TAKE_PRIZE_FLAG_LETTER_WORDS_NULL:
            return action.payload

        case BEGIN_AGAIN_ALL_LETTERS_WORDS_NULL:
            return action.payload

        case LOAD_FROM_LOCAL_STORAGE_FINAL_LETTER_WORDS:
            return action.payload

        default:
            return state;
    }
}
export default stateFinalLetterWords