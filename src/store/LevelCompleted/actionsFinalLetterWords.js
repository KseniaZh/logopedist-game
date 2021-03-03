import {
    FLAG_FINAL_LETTER_WORDS,

} from "./types";

export const finalLetterWords = (stateFinalLetterWords, letter) => {
    //все уровни пройдены, флаг true

    let obj = { ...stateFinalLetterWords };

    obj[letter] = true;

    return {
        type: FLAG_FINAL_LETTER_WORDS,
        payload: obj
    }
}

