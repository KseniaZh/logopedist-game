﻿import {
    LEVEL_WORD_COMPLETED,
    LEVEL_WORD_REPEAT,
} from "./types";

const initialState = {
    "Б": [false, false, false,],
    "В": [false, false, false,],
    "Г": [false, false, false,],
    "Д": [false, false, false,],
    "Ж": [false, false, false,],
    "З": [false, false, false,],
    "К": [false, false, false, false,],
    "Л": [false, false, false,],
    "М": [false, false, false, ],
    "Н": [false, false, false, ],
    "П": [false, false, false, ],
    "Р": [false, false, false, ],
    "С": [false, false, false, ],
    "Т": [false, false, false, ],
    "Ф": [false, false, false, ],
    "Ц": [false, false, false, ],
    "Ч": [false, false, false, ],
    "Ш": [false, false, false, ],
    "Щ": [false, false, false, ],
};


const stateLevelWordsFinal = (state = initialState, action) => {

    switch (action.type) {

        case  LEVEL_WORD_COMPLETED:
            return action.payload

        case LEVEL_WORD_REPEAT:
            return action.payload

        default:
            return state;
    }
}
export default stateLevelWordsFinal