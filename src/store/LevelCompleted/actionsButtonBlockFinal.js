import {
    BUTTON_BLOCK_COMPLETED,
    BUTTON_BLOCK_LOCAL_STORAGE,
    BUTTON_BLOCK_REPEAT,
    TAKE_PRIZE_NULL_ALL_FLAGS_LETTER
} from "./types";

export const changeFlagButtonBlockCompleted = (stateButtonBlockFinal, letter, numberLevelBlock, numberButtonBlock) => {
    //все кнопки блока кликнуты, флаг true

    let arr = new Array();
    arr = { ...stateButtonBlockFinal };

    arr[letter][numberLevelBlock][numberButtonBlock] = true;

    // localStorage.setItem('Eva_stateButtonBlockFinal', JSON.stringify(arr));
   // console.log('setItem ', JSON.stringify(arr))

    localStorage['Eva_stateButtonBlockFinal'] = JSON.stringify(arr);

    return {
        type: BUTTON_BLOCK_COMPLETED,
        payload: arr
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

    let arr = new Array();
    arr = { ...stateButtonBlockFinal };

    arr[letter][numberLevelBlock] = [false, false, false, false, false, false];

    // localStorage.setItem('Eva_stateButtonBlockFinal', JSON.stringify(arr));
    // console.log('setItem ', JSON.stringify(arr))

    localStorage['Eva_stateButtonBlockFinal'] = JSON.stringify(arr);

    return {
        type: BUTTON_BLOCK_REPEAT,
        payload: arr
    }
}

export const takePrizeNullAllFlagsAllBlocksLetter = (stateButtonBlockFinal, letter) => {
    //буква пройдена, игрок получает приз, все флаги были true
    //для возможности повторного прохождения возвращаем все флаги на false

    let arr = new Array();
    arr = { ...stateButtonBlockFinal };

    arr[letter] = [
                    [false, false, false, false, false, false],
                    [false, false, false, false, false, false],
                    [false, false, false, false, false, false],
                    [false, false, false, false, false, false],
                    [false, false, false, false, false, false],
                    [false, false, false, false, false, false],
                ];

    // localStorage.setItem('Eva_stateButtonBlockFinal', JSON.stringify(arr));
    // console.log('setItem ', JSON.stringify(arr))

    localStorage['Eva_stateButtonBlockFinal'] = JSON.stringify(arr);

    return {
        type: TAKE_PRIZE_NULL_ALL_FLAGS_LETTER,
        payload: arr
    }
}

