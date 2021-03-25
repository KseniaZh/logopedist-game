import {
    LETTER_LEVEL_END,
    LOAD_FROM_LOCAL_STORAGE_LETTER_PRIZES,
    PUSH_PRIZE_LETTER
} from "./types";

export const flagLevelLetterEnd = (stateLevelEnd, letter) => {
    //все уровни пройдены, флаг true

    let obj = { ...stateLevelEnd };

    obj[letter][0] = true;

    localStorage[`${JSON.parse(localStorage['player'])}_letterPrizes`] = JSON.stringify(obj);

    return {
        type: LETTER_LEVEL_END,
        payload: obj
    }
}
export const loadLocalStorageLetterPrizes = (data) => {
    //при входе в игру загружаем из localStorage 

    return {
        type: LOAD_FROM_LOCAL_STORAGE_LETTER_PRIZES,
        payload: data
    }
}

export const pushPrizeLetter = (letterPrizeProgress, letter, nameTypeImages, numberImage) => {
    //добавляем приз в побежденную букву 

    let obj = { ...letterPrizeProgress };
    let img = [nameTypeImages, numberImage];

    obj[letter][0] = true;

    obj[letter].push(img);

    localStorage[`${JSON.parse(localStorage['player'])}_letterPrizes`] = JSON.stringify(obj);

    return {
        type: PUSH_PRIZE_LETTER,
        payload: obj
    }
}

