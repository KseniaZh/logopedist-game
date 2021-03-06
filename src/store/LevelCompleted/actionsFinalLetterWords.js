import {
    FLAG_FINAL_LETTER_WORDS,
    TAKE_PRIZE_FLAG_LETTER_WORDS_NULL,
    BEGIN_AGAIN_ALL_LETTERS_WORDS_NULL,
    LOAD_FROM_LOCAL_STORAGE_FINAL_LETTER_WORDS

} from "./types";

export const finalLetterWords = (stateFinalLetterWords, letter) => {
    //все уровни пройдены, флаг true

    let obj = { ...stateFinalLetterWords };

    obj[letter] = true;

    localStorage[`${JSON.parse(localStorage['player'])}_finalLetterWords`] = JSON.stringify(obj);

    return {
        type: FLAG_FINAL_LETTER_WORDS,
        payload: obj
    }
}
export const takePrizeFlagFinalWordsNull = (stateFinalLetterWords, letter) => {
    //буква пройдена, игрок получает приз
    // для возможности повторного прохождения буквы возвращаемся к исходному обнулению
    // флаг меняем на false

    let obj = { ...stateFinalLetterWords };

    obj[letter] = false;

    localStorage[`${JSON.parse(localStorage['player'])}_finalLetterWords`] = JSON.stringify(obj);

    return {
        type: TAKE_PRIZE_FLAG_LETTER_WORDS_NULL,
        payload: obj
    }
}

export const beginAgainAllFlagsFinalLetterWordsNull = () => {
        //сброс всех уровней. Все, кроме наград, возвращается к исходному состоянию


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

    localStorage[`${JSON.parse(localStorage['player'])}_finalLetterWords`] = JSON.stringify(obj);

    return {
        type: BEGIN_AGAIN_ALL_LETTERS_WORDS_NULL,
        payload: obj
    }
}

export const loadLocalStorageFinalLetterWords = (data) => {
    //при входе в игру загружаем из localStorage 

    return {
        type: LOAD_FROM_LOCAL_STORAGE_FINAL_LETTER_WORDS,
        payload: data
    }
}
