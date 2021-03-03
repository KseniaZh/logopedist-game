import {
    LEVEL_WORD_COMPLETED,
    LEVEL_WORD_REPEAT,
} from "./types";

export const changeFlagLevelWordCompleted = (stateLevelWordFinal, letter, numberWordBlock) => {
    //все блоки уровня/листа кликнуты, флаг true


    let arr = { ...stateLevelWordFinal };

    arr[letter][numberWordBlock] = true;

    return {
        type: LEVEL_WORD_COMPLETED,
        payload: arr
    }
}
export const nullFlagLevelWordCompleted = (stateLevelWordFinal, letter, numberWordBlock) => {
    //игрок хочет пройти уровень заново, флаг false


    let arr = { ...stateLevelWordFinal };

    arr[letter][numberWordBlock] = false;

    return {
        type: LEVEL_WORD_REPEAT,
        payload: arr
    }
}

