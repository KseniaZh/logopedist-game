import {
    BUTTON_BLOCK_COMPLETED,
    BUTTON_BLOCK_LOCAL_STORAGE,
    BUTTON_BLOCK_REPEAT,
    TAKE_PRIZE_NULL_ALL_FLAGS_LETTER,
    BEGIN_AGAIN_NULL_ALL_FLAGS_ALL_LETTERS
} from "./types";

export const changeFlagButtonBlockCompleted = (stateButtonBlockFinal, letter, numberLevelBlock, numberButtonBlock) => {
    //все кнопки блока кликнуты, флаг true

    let obj = { ...stateButtonBlockFinal };

    obj[letter][numberLevelBlock][numberButtonBlock] = true;

    // localStorage.setItem('Eva_stateButtonBlockFinal', JSON.stringify(arr));
   // console.log('setItem ', JSON.stringify(arr))

    localStorage['Eva_stateButtonBlockFinal'] = JSON.stringify(obj);

    return {
        type: BUTTON_BLOCK_COMPLETED,
        payload: obj
    }
}

export const dataFromLocalStorage = () => {
    // грузим данные из localStorage
    const data = localStorage.getItem("Eva_stateButtonBlockFinal");
    const dataNew = JSON.parse(data)

    return {
        type: BUTTON_BLOCK_LOCAL_STORAGE,
        payload: dataNew
    }
}
export const nullAllFlagsButtonBlocksCompleted = (stateButtonBlockFinal, letter, numberLevelBlock) => {
    //все кнопки блока были кликнуты, но игрок хочет заново пройти уровень
    //меняем все флаги блока назад на false

   let obj = { ...stateButtonBlockFinal };

    obj[letter][numberLevelBlock] = [false, false, false, false, false, false];

    // localStorage.setItem('Eva_stateButtonBlockFinal', JSON.stringify(arr));
    // console.log('setItem ', JSON.stringify(arr))

    localStorage['Eva_stateButtonBlockFinal'] = JSON.stringify(obj);

    return {
        type: BUTTON_BLOCK_REPEAT,
        payload: obj
    }
}

export const takePrizeNullAllFlagsAllBlocksLetter = (stateButtonBlockFinal, letter) => {
    //буква пройдена, игрок получает приз, все флаги были true
    //для возможности повторного прохождения возвращаем все флаги на false

   let obj = { ...stateButtonBlockFinal };

    obj[letter] = [
                    [false, false, false, false, false, false],
                    [false, false, false, false, false, false],
                    [false, false, false, false, false, false],
                    [false, false, false, false, false, false],
                    [false, false, false, false, false, false],
                    [false, false, false, false, false, false],
                ];

    // localStorage.setItem('Eva_stateButtonBlockFinal', JSON.stringify(arr));
    // console.log('setItem ', JSON.stringify(arr))

    localStorage['Eva_stateButtonBlockFinal'] = JSON.stringify(obj);

    return {
        type: TAKE_PRIZE_NULL_ALL_FLAGS_LETTER,
        payload: obj
    }
}
export const beginAgainNullAllFlagsAllBlocksAllLetters = () => {
     //сброс всех уровней
    // все, кроме наград, возвращается к исходному состоянию

    let obj = {
        "Б": [
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
        ],
        "В": [
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
        ],
        "Г": [
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
        ],
        "Д": [
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
        ],
        "Ж": [
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
        ],
        "З": [
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
        ],
        "К": [
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
        ],
        "Л": [
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
        ],
        "М": [
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
        ],
        "Н": [
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
        ],
        "П": [
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
        ],
        "Р": [
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
        ],
        "С": [
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
        ],
        "Т": [
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
        ],
        "Ф": [
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
        ],
        "Ц": [
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
        ],
        "Ч": [
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
        ],
        "Ш": [
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
        ],
        "Щ": [
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
        ],
    };

    // localStorage.setItem('Eva_stateButtonBlockFinal', JSON.stringify(arr));
    // console.log('setItem ', JSON.stringify(arr))

    localStorage['Eva_stateButtonBlockFinal'] = JSON.stringify(obj);

    return {
        type: BEGIN_AGAIN_NULL_ALL_FLAGS_ALL_LETTERS,
        payload: obj
    }
}
