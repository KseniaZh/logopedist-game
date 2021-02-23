import {
    FLAG_FINAL_LETTER,

} from "./types";

export const finalLetter = (stateFinalLetter, letter) => {
    //все уровни пройдены, флаг true

    let obj = stateFinalLetter;

    obj[letter] = true;

    return {
        type: FLAG_FINAL_LETTER,
        payload: obj
    }
}

