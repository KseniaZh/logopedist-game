import {
    FLAG_FINAL_LETTER,
    TAKE_PRIZE_FLAG_NULL

} from "./types";

export const finalLetter = (stateFinalLetter, letter) => {
    //все уровни пройдены, флаг true

    let obj = { ...stateFinalLetter };

    obj[letter] = true;

    return {
        type: FLAG_FINAL_LETTER,
        payload: obj
    }
}
export const takePrizeFlagFinalLetterNull = (stateFinalLetter, letter) => {
    //все уровни пройдены, флаг был true, игрок получает приз, 
    //после чего все достижения по букве обнуляются для возможности повторног прохождения
    // флаг снова меняем на false

    let obj = { ...stateFinalLetter };

    obj[letter] = false;

    return {
        type: TAKE_PRIZE_FLAG_NULL,
        payload: obj
    }
}

