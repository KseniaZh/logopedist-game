import {
    BUTTON_BLOCK_COMPLETED,

} from "./types";

export const changeFlagButtonBlockCompleted = (stateButtonBlockFinal, letter, numberLevelBlock, numberButtonBlock) => {
    //все кнопки блока кликнуты, флаг true

    let arr = stateButtonBlockFinal;

    arr[letter][numberLevelBlock][numberButtonBlock] = true;

    return {
        type: BUTTON_BLOCK_COMPLETED,
        payload: arr
    }
}

