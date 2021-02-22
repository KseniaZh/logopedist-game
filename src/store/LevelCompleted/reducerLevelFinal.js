import {
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

        //case FLAG_OPEN_COMPARE_WINDOW:
        //    return {
        //        ...state,
        //        flagOpenCompareWindow: action.payload
        //    };
        default:
            return state;
    }
}
export default stateLevelFinal