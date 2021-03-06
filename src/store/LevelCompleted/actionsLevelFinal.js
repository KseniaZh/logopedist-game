import {
    BUTTON_LEVEL_COMPLETED,
    BUTTON_LEVEL_REPEAT,
    TAKE_PRIZE_ALL_LEVELS_NULL,
    BEGIN_AGAIN_ALL_LETTERS_LEVELS_NULL,
    LOAD_FROM_LOCAL_STORAGE_FINAL_LEVEL

} from "./types";

export const changeFlagLevelCompleted = (stateLevelFinal, letter, numberLevelBlock) => {
    //все блоки уровня/листа кликнуты, флаг true


    let arr = { ...stateLevelFinal };

    arr[letter][numberLevelBlock] = true;

    localStorage[`${JSON.parse(localStorage['player'])}_finalLevel`] = JSON.stringify(arr);

    return {
        type: BUTTON_LEVEL_COMPLETED,
        payload: arr
    }
}


export const nullFlagLevelCompleted = (stateLevelFinal, letter, numberLevelBlock) => {
    //все блоки уровня/листа кликнуты, но игрок хочет повторить, флаг снова меняем на false


    let arr = { ...stateLevelFinal };

    arr[letter][numberLevelBlock] = false;

    localStorage[`${JSON.parse(localStorage['player'])}_finalLevel`] = JSON.stringify(arr);

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

    localStorage[`${JSON.parse(localStorage['player'])}_finalLevel`] = JSON.stringify(arr);

    return {
        type: TAKE_PRIZE_ALL_LEVELS_NULL,
        payload: arr
    }
}

export const beginAgainAllFlagsAllLevelsNull = () => {
    //сброс всех уровней
    // все, кроме наград, возвращается к исходному состоянию

    let arr = {
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

    localStorage[`${JSON.parse(localStorage['player'])}_finalLevel`] = JSON.stringify(arr);

    return {
        type: BEGIN_AGAIN_ALL_LETTERS_LEVELS_NULL,
        payload: arr
    }
}
    export const loadLocalStorageFinalLevels = (data) => {
        //при входе в игру загружаем из localStorage 

        return {
            type: LOAD_FROM_LOCAL_STORAGE_FINAL_LEVEL,
            payload: data
        }
    }