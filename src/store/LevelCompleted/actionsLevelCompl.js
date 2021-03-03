import {
    BUTTON_CLICK,
    LEVEL_REPEAT,
    TAKE_PRIZE_NULL_ALL_BUTTON_CLICK
} from "./types";

export const changeFlagButtonClick = (arrLevelCompleted, letter, levelBlock, buttonBlocks, numberButton) => {
    //клик по кнопке со слогом помечает как true
    let arr = { ...arrLevelCompleted };
    arr[letter][levelBlock][buttonBlocks][numberButton] = true;

    return {
        type: BUTTON_CLICK,
        payload: arr
    }
}
export const nullAllFlagsLevelButtonClick = (arrLevelCompleted, letter, levelBlock) => {
    //клик по кнопке со слогом помечает как true
    let arr = { ...arrLevelCompleted };
    arr[letter][levelBlock] = [
                                    {
                                        'button_1': false,
                                        'button_2': false,
                                        'button_3': false,
                                    },
                                    {
                                        'button_1': false,
                                        'button_2': false,
                                        'button_3': false,
                                    },
                                    {
                                        'button_1': false,
                                        'button_2': false,
                                        'button_3': false,
                                    },
                                    {
                                        'button_1': false,
                                        'button_2': false,
                                        'button_3': false,
                                    },
                                    {
                                        'button_1': false,
                                        'button_2': false,
                                        'button_3': false,
                                    },
                                    {
                                        'button_1': false,
                                        'button_2': false,
                                        'button_3': false,
                                    },
                                ];

    return {
        type: LEVEL_REPEAT,
        payload: arr
    }
}
export const takePrizeNullAllFlagsButtonClick = (arrLevelCompleted, letter) => {
    //буква пройдена, приз получен
    // для возможности повторного прохождения возвращаем все флаги кликов на false

    let arr = { ...arrLevelCompleted };

    arr[letter] = [
        //LevelBlock 0
        [
            //ButtonBlocks
            {
                'button_1': false,
                'button_2': false,
                'button_3': false,
            },
            {
                'button_1': false,
                'button_2': false,
                'button_3': false,
            },
            {
                'button_1': false,
                'button_2': false,
                'button_3': false,
            },
            {
                'button_1': false,
                'button_2': false,
                'button_3': false,
            },
            {
                'button_1': false,
                'button_2': false,
                'button_3': false,
            },
            {
                'button_1': false,
                'button_2': false,
                'button_3': false,
            },
        ],
        //LevelBlock 1
        [
            //ButtonBlocks
            {
                'button_1': false,
                'button_2': false,
                'button_3': false,
            },
            {
                'button_1': false,
                'button_2': false,
                'button_3': false,
            },
            {
                'button_1': false,
                'button_2': false,
                'button_3': false,
            },
            {
                'button_1': false,
                'button_2': false,
                'button_3': false,
            },
            {
                'button_1': false,
                'button_2': false,
                'button_3': false,
            },
            {
                'button_1': false,
                'button_2': false,
                'button_3': false,
            },
        ],
        //LevelBlock 2
        [
            //ButtonBlocks
            {
                'button_1': false,
                'button_2': false,
                'button_3': false,
            },
            {
                'button_1': false,
                'button_2': false,
                'button_3': false,
            },
            {
                'button_1': false,
                'button_2': false,
                'button_3': false,
            },
            {
                'button_1': false,
                'button_2': false,
                'button_3': false,
            },
            {
                'button_1': false,
                'button_2': false,
                'button_3': false,
            },
            {
                'button_1': false,
                'button_2': false,
                'button_3': false,
            },
        ],
        //LevelBlock 3
        [
            //ButtonBlocks
            {
                'button_1': false,
                'button_2': false,
                'button_3': false,
            },
            {
                'button_1': false,
                'button_2': false,
                'button_3': false,
            },
            {
                'button_1': false,
                'button_2': false,
                'button_3': false,
            },
            {
                'button_1': false,
                'button_2': false,
                'button_3': false,
            },
            {
                'button_1': false,
                'button_2': false,
                'button_3': false,
            },
            {
                'button_1': false,
                'button_2': false,
                'button_3': false,
            },
        ],
        //LevelBlock 4
        [
            //ButtonBlocks
            {
                'button_1': false,
                'button_2': false,
                'button_3': false,
            },
            {
                'button_1': false,
                'button_2': false,
                'button_3': false,
            },
            {
                'button_1': false,
                'button_2': false,
                'button_3': false,
            },
            {
                'button_1': false,
                'button_2': false,
                'button_3': false,
            },
            {
                'button_1': false,
                'button_2': false,
                'button_3': false,
            },
            {
                'button_1': false,
                'button_2': false,
                'button_3': false,
            },
        ],
        //LevelBlock 5
        [
            //ButtonBlocks
            {
                'button_1': false,
                'button_2': false,
                'button_3': false,
            },
            {
                'button_1': false,
                'button_2': false,
                'button_3': false,
            },
            {
                'button_1': false,
                'button_2': false,
                'button_3': false,
            },
            {
                'button_1': false,
                'button_2': false,
                'button_3': false,
            },
            {
                'button_1': false,
                'button_2': false,
                'button_3': false,
            },
            {
                'button_1': false,
                'button_2': false,
                'button_3': false,
            },
        ],
    ];

    return {
        type: TAKE_PRIZE_NULL_ALL_BUTTON_CLICK,
        payload: arr
    }
}

