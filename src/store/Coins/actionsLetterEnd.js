import {
    LETTER_LEVEL_END,

} from "./types";

export const flagLevelLetterEnd = (type, stateLevelEnd, letter) => {
    //все уровни пройдены, флаг true

    let obj = { ...stateLevelEnd };

    obj[type][letter] = true;

    return {
        type: LETTER_LEVEL_END,
        payload: obj
    }
}

