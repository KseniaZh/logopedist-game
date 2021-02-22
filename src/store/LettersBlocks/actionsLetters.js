import {
    LETTERS_SELECT,

} from "./types";

export const selectingLetter = (data) => {
    //выбор буквы для автоматизации в слогах 

    return {
        type: LETTERS_SELECT,
        payload: data
    }
};

