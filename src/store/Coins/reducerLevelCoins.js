import {
    BOX_COINS_DEPOSIT
} from "./types";

const initialState = {
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
        default:
            return state;
    }
}
export default stateLevelCoins