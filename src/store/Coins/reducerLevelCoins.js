import {
} from "./types";

const initialState = {
    letterBlocks: [`❤`, '❀', '✭', '☀', '♚', '♛']
 };



const stateLevelCoins = (state = initialState, action) => {

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
export default stateLevelCoins