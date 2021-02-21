import {
} from "./types";

const initialState = {
    'k': {
        'block_1': 0,
        'block_2': 0,
        'block_3': 0,
        'block_4': 0,
        'block_5': 0,
        'block_6': 0,
        'levelEnd': 0
    }
            };



const stateLevelCompleted = (state = initialState, action) => {

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
export default stateLevelCompleted