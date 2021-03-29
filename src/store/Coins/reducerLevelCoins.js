import {
    BOX_COINS_DEPOSIT,
    LOAD_FROM_LOCAL_STORAGE_BOX_COINS,
    FLAG_GET_PRIZE,
    LOAD_FROM_LOCAL_STORAGE_GET_PRIZE,
    SELECT_IMG_PRIZE
} from "./types";

import dinosaur_banner from '../../img/banners/dinosaur.jpg';
import dogs_banner from '../../img/banners/schp19.jpg';
import unicorns_banner from '../../img/banners/unicorns.jpg';
import princess_banner from '../../img/banners/princess.jpg';
import dolls_banner from '../../img/banners/lol.jpg';
import dragon_banner from '../../img/banners/dragons1.jpg';

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
        'dragon': 'Огнедышащие драконы',
    },
    banners: {
        'dinosaur': dinosaur_banner,
        'dogs': dogs_banner,
        'dolls': dolls_banner,
        'princess': princess_banner,
        'unicorns': unicorns_banner,
        'dragon': dragon_banner,
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
    nameImageSelectedPrize: ['dolls', 0],
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
        case SELECT_IMG_PRIZE:
            return {
                ...state,
                nameImageSelectedPrize: action.payload
            };
        default:
            return state;
    }
}
export default stateLevelCoins