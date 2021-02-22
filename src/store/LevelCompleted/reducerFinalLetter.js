import {
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
    "Ц": false,
    "Ч": false,
    "Ш": false,
    "Щ": false,
};


    const stateFinalLetter = (state = initialState, action) => {

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
export default stateFinalLetter