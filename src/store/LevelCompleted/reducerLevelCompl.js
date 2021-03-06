import {
    BUTTON_CLICK,
    LEVEL_REPEAT,
    TAKE_PRIZE_NULL_ALL_BUTTON_CLICK,
    BEGIN_AGAIN_ALL_NULL,
    LOAD_FROM_LOCAL_STORAGE_BUTTON_CLICK
} from "./types";

const initialState = {
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



const stateLevelCompleted = (state = initialState, action) => {

    switch (action.type) {

        case BUTTON_CLICK:
            return action.payload;

        case LEVEL_REPEAT:
            return action.payload;

        case TAKE_PRIZE_NULL_ALL_BUTTON_CLICK:
            return action.payload;

        case BEGIN_AGAIN_ALL_NULL:
            return action.payload;

        case LOAD_FROM_LOCAL_STORAGE_BUTTON_CLICK:
            return action.payload;

        default:
            return state;
    }
}
export default stateLevelCompleted