import {
    BUTTON_LEVEL_COMPLETED,

} from "./types";

export const changeFlagLevelCompleted = (stateLevelFinal, letter, numberLevelBlock) => {
    //все блоки уровня/листа кликнуты, флаг true


    let arr = stateLevelFinal;

    arr[letter][numberLevelBlock] = true;

    return {
        type: BUTTON_LEVEL_COMPLETED,
        payload: arr
    }
}

