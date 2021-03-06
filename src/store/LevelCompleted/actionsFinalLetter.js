import {
    FLAG_FINAL_LETTER,
    TAKE_PRIZE_FLAG_NULL,
    BEGIN_AGAIN_ALL_LETTERS,
    LOAD_FROM_LOCAL_STORAGE_FINAL_LETTER

} from "./types";

export const finalLetter = (stateFinalLetter, letter) => {
    //все уровни пройдены, флаг true

    let obj = { ...stateFinalLetter };

    obj[letter] = true;

    localStorage[`${JSON.parse(localStorage['player'])}__finalLetter`] = JSON.stringify(obj);

    return {
        type: FLAG_FINAL_LETTER,
        payload: obj
    }
}
export const takePrizeFlagFinalLetterNull = (stateFinalLetter, letter) => {
    //все уровни пройдены, флаг был true, игрок переходит в магазин для выбора приза, 
    //после чего все достижения по букве обнуляются для возможности повторног прохождения
    // флаг снова меняем на false

    let obj = { ...stateFinalLetter };

    obj[letter] = false;

    localStorage[`${JSON.parse(localStorage['player'])}__finalLetter`] = JSON.stringify(obj);

    return {
        type: TAKE_PRIZE_FLAG_NULL,
        payload: obj
    }
}

export const beginAgainAllFlagsFinalLetterNull = () => {
    //сброс всех уровней
    // все, кроме наград, возвращается к исходному состоянию

    let obj = {
        "Б": false,
        "В": false,
        "Г": false,
        "Д": false,
        "Ж": false,
        "З": false,
        "К": false,
        "Л": false,
        "М": false,
        "Н": false,
        "П": false,
        "Р": false,
        "С": false,
        "Т": false,
        "Ф": false,
        "Ц": false,
        "Ч": false,
        "Ш": false,
        "Щ": false,
    };

    localStorage[`${JSON.parse(localStorage['player'])}__finalLetter`] = JSON.stringify(obj);

    return {
        type: BEGIN_AGAIN_ALL_LETTERS,
        payload: obj
    }
}

export const loadLocalStorageFinalLetter = (data) => {
  //при входе в игру загружаем из localStorage 

    return {
        type: LOAD_FROM_LOCAL_STORAGE_FINAL_LETTER,
        payload: data
    }
}

