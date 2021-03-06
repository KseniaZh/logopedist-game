import {
    BOX_COINS_DEPOSIT,
    LOAD_FROM_LOCAL_STORAGE_BOX_COINS,
    FLAG_GET_PRIZE,
    LOAD_FROM_LOCAL_STORAGE_GET_PRIZE
} from "./types";

const initialState = {
    flagGetPrize: false,
    letterBlocks: [
        [`❤`, 'one'],
        ['❀', 'two'],
        ['✭', 'three'],
        ['☀', 'four'],
        ['♚', 'five'],
        ['♛', 'six']
    ],
    wordsBlocks: [
        [`✹`, 'seven'],
        ['❋', 'eight'],
        ['❂', 'nine'],
        ['☀', 'ten'],
        ['❃', 'eleven'],
    ],
    namesBlocksPrizes: {
        'dinosaur': 'Поезд динозавров',
        'dogs': 'Щенячий патруль',
        'dolls': 'Куколки',
        'princess': 'Принцессы',
        'unicorns': 'Волшебные единороги',
    },
    boxCoinsLetter: {
        "Б": [],
        "В": [],
        "Г": [],
        "Д": [],
        "Ж": [],
        "З": [],
        "К": [],
        "Л": [],
        "М": [],
        "Н": [],
        "П": [],
        "Р": [],
        "С": [],
        "Т": [],
        "Ф": [],
        "Ц": [],
        "Ч": [],
        "Ш": [],
        "Щ": [],
    },
 };



const stateLevelCoins = (state = initialState, action) => {

    switch (action.type) {

        case BOX_COINS_DEPOSIT:
            return {
                ...state,
                boxCoinsLetter: action.payload
            };
        case LOAD_FROM_LOCAL_STORAGE_BOX_COINS:
            return {
                ...state,
                boxCoinsLetter: action.payload
            };
        case FLAG_GET_PRIZE:
            return {
                ...state,
                flagGetPrize: action.payload
            };
        case LOAD_FROM_LOCAL_STORAGE_GET_PRIZE:
            return {
                ...state,
                flagGetPrize: action.payload
            };
        default:
            return state;
    }
}
export default stateLevelCoins