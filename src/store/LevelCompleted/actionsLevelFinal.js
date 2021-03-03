import {
    BUTTON_LEVEL_COMPLETED,
    BUTTON_LEVEL_REPEAT,
    TAKE_PRIZE_ALL_LEVELS_NULL

} from "./types";

export const changeFlagLevelCompleted = (stateLevelFinal, letter, numberLevelBlock) => {
    //все блоки уровня/листа кликнуты, флаг true


    let arr = { ...stateLevelFinal };

    arr[letter][numberLevelBlock] = true;

    return {
        type: BUTTON_LEVEL_COMPLETED,
        payload: arr
    }
}


export const nullFlagLevelCompleted = (stateLevelFinal, letter, numberLevelBlock) => {
    //все блоки уровня/листа кликнуты, но игрок хочет повторить, флаг снова меняем на false


    let arr = { ...stateLevelFinal };

    arr[letter][numberLevelBlock] = false;

    return {
        type: BUTTON_LEVEL_REPEAT,
        payload: arr
    }
}

export const takePrizeFlagsAllLevelsNull = (stateLevelFinal, letter) => {
    //все уровни пройдены, буква закончена, игрок получил приз
    //для возможности повторного прохождения все флаги возвращаем на false


    let arr = { ...stateLevelFinal };

    arr[letter] = [false, false, false, false, false, false];

    return {
        type: TAKE_PRIZE_ALL_LEVELS_NULL,
        payload: arr
    }
}