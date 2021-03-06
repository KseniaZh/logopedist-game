import {
    LEVEL_WORD_COMPLETED,
    LEVEL_WORD_REPEAT,
    TAKE_PRIZE_ALL_LEVELS_WORD_NULL,
    BEGIN_AGAIN_ALL_LEVELS_ALL_LETTERS_WORDS_NULL,
    LOAD_FROM_LOCAL_STORAGE_LEVEL_WORD_COMPLETED
} from "./types";

export const changeFlagLevelWordCompleted = (stateLevelWordFinal, letter, numberWordBlock) => {
    //все блоки уровня/листа кликнуты, флаг true


    let obj = { ...stateLevelWordFinal };

    obj[letter][numberWordBlock] = true;

    localStorage[`${JSON.parse(localStorage['player'])}_finalLevelWords`] = JSON.stringify(obj);

    return {
        type: LEVEL_WORD_COMPLETED,
        payload: obj
    }
}
export const nullFlagLevelWordCompleted = (stateLevelWordFinal, letter, numberWordBlock) => {
    //игрок хочет пройти уровень заново, флаг false


    let obj = { ...stateLevelWordFinal };

    obj[letter][numberWordBlock] = false;

    localStorage[`${JSON.parse(localStorage['player'])}_finalLevelWords`] = JSON.stringify(obj);

    return {
        type: LEVEL_WORD_REPEAT,
        payload: obj
    }
}
export const takePrizeAllFlagsLevelsWordsNull = (stateLevelWordFinal, letter) => {
    //игрок полностью прошел букву и получил приз, все флаги true
    // для возможности повторного прохождения возвращаем к исходному все флаги = false
    //[false, false, false, ],

    let obj = { ...stateLevelWordFinal };

    obj[letter] = obj[letter].map(flag => {
        return flag = false
    })

    localStorage[`${JSON.parse(localStorage['player'])}_finalLevelWords`] = JSON.stringify(obj);

    return {
        type: TAKE_PRIZE_ALL_LEVELS_WORD_NULL,
        payload: obj
    }
}

export const beginAgainAllLevelsWordsNull = () => {
 //сброс всех уровней. Все, кроме наград, возвращается к исходному состоянию

    let obj = {
        "Б": [false, false, false,],
        "В": [false, false, false,],
        "Г": [false, false, false,],
        "Д": [false, false, false,],
        "Ж": [false, false, false,],
        "З": [false, false, false,],
        "К": [false, false, false, false,],
        "Л": [false, false, false,],
        "М": [false, false, false,],
        "Н": [false, false, false,],
        "П": [false, false, false,],
        "Р": [false, false, false,],
        "С": [false, false, false,],
        "Т": [false, false, false,],
        "Ф": [false, false, false,],
        "Ц": [false, false, false,],
        "Ч": [false, false, false,],
        "Ш": [false, false, false,],
        "Щ": [false, false, false,],
    };

    localStorage[`${JSON.parse(localStorage['player'])}_finalLevelWords`] = JSON.stringify(obj);

    return {
        type: BEGIN_AGAIN_ALL_LEVELS_ALL_LETTERS_WORDS_NULL,
        payload: obj
    }
}

export const loadLocalStorageLevelWordsCompleted = (data) => {
    //при входе в игру загружаем из localStorage 

    return {
        type: LOAD_FROM_LOCAL_STORAGE_LEVEL_WORD_COMPLETED,
        payload: data
    }
}
