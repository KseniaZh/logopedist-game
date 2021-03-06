import {
    BUTTON_CLICK,
    LEVEL_REPEAT,
    TAKE_PRIZE_NULL_ALL_BUTTON_CLICK,
    BEGIN_AGAIN_ALL_NULL,
    LOAD_FROM_LOCAL_STORAGE_BUTTON_CLICK
} from "./types";

export const changeFlagButtonClick = (arrLevelCompleted, letter, levelBlock, buttonBlocks, numberButton) => {
    //клик по кнопке со слогом помечает как true
    let obj = { ...arrLevelCompleted };
    obj[letter][levelBlock][buttonBlocks][numberButton] = true;

    localStorage[`${JSON.parse(localStorage['player'])}_buttonClickBlockLevel`] = JSON.stringify(obj);

    return {
        type: BUTTON_CLICK,
        payload: obj
    }
}
export const nullAllFlagsLevelButtonClick = (arrLevelCompleted, letter, levelBlock) => {
    //клик по кнопке со слогом помечает как true
    let obj = { ...arrLevelCompleted };
    obj[letter][levelBlock] = [
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

    localStorage[`${JSON.parse(localStorage['player'])}_buttonClickBlockLevel`] = JSON.stringify(obj);

    return {
        type: LEVEL_REPEAT,
        payload: obj
    }
}
export const takePrizeNullAllFlagsButtonClick = (arrLevelCompleted, letter) => {
    //буква пройдена, приз получен
    // для возможности повторного прохождения возвращаем все флаги кликов на false

    let obj = { ...arrLevelCompleted };

    obj[letter] = [
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

    localStorage[`${JSON.parse(localStorage['player'])}_buttonClickBlockLevel`] = JSON.stringify(obj);

    return {
        type: TAKE_PRIZE_NULL_ALL_BUTTON_CLICK,
        payload: obj
    }
}

export const beginAgainNullAllFlagsAllButtonClick = () => {
    //сброс всех уровней
    // все, кроме наград, возвращается к исходному состояниюe

    let obj = {
        "Б": [
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
        ],
        "В": [
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
        ],
        "Г": [
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
        ],
        "Д": [
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
        ],
        "Ж": [
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
        ],
        "З": [
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
        ],
        "К": [
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
        ],
        "Л": [
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
        ],
        "М": [
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
        ],
        "Н": [
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
        ],
        "П": [
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
        ],
        "Р": [
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
        ],
        "С": [
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
        ],
        "Т": [
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
        ],
        "Ф": [
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
        ],
        "Ц": [
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
        ],
        "Ч": [
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
        ],
        "Ш": [
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
        ],
        "Щ": [
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
        ],
    };

    localStorage[`${JSON.parse(localStorage['player'])}_buttonClickBlockLevel`] = JSON.stringify(obj);

    return {
        type: BEGIN_AGAIN_ALL_NULL,
        payload: obj
    }
}
export const loadLocalStorageButtonClickBlockLevel = (data) => {
        //при входе в игру загружаем из localStorage 

        return {
            type: LOAD_FROM_LOCAL_STORAGE_BUTTON_CLICK,
            payload: data
        }
    }
