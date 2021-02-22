import {
    BUTTON_CLICK,

} from "./types";

export const changeFlagButtonClick = (arrLevelCompleted, letter, levelBlock, buttonBlocks, numberButton) => {
    //клик по кнопке со слогом помечает как true
    let arr = arrLevelCompleted;
    arr[letter][levelBlock][buttonBlocks][numberButton] = true;

    return {
        type: BUTTON_CLICK,
        payload: arr
    }
}

