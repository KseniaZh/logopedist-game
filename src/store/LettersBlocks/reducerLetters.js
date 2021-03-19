import {
    LETTERS_SELECT,
} from "./types";

const initialState = {
    'letterSelect': 'X',
    'letters': [

        { type: 2, name: "Д" },
        { type: 2, name: "Ж" },
        { type: 2, name: "З" },
        { type: 2, name: "К" },
        { type: 2, name: "Л" },
        { type: 2, name: "М" },
        { type: 2, name: "Н" },
        { type: 2, name: "П" },
        { type: 2, name: "Р" },
        { type: 2, name: "С" },
        { type: 2, name: "Т" },
        { type: 2, name: "Ф" },
        { type: 2, name: "Ц" },
        { type: 2, name: "Ч" },
        { type: 2, name: "Ш" },
        { type: 2, name: "Щ" },
        { type: 2, name: "Б" },
        { type: 2, name: "В" },
        { type: 2, name: "Г" },
    ],
};
//{ type: 1, name: "А" },
//{ type: 2, name: "Б" },
//{ type: 2, name: "В" },
//{ type: 2, name: "Г" },
//{ type: 2, name: "Д" },
//{ type: 1, name: "Е" },
//{ type: 1, name: "Ё" },
//{ type: 2, name: "Ж" },
//{ type: 2, name: "З" },
//{ type: 1, name: "И" },
//{ type: 3, name: "Й" },
//{ type: 2, name: "К" },
//{ type: 2, name: "Л" },
//{ type: 2, name: "М" },
//{ type: 2, name: "Н" },
//{ type: 1, name: "О" },
//{ type: 2, name: "П" },
//{ type: 2, name: "р" },
//{ type: 2, name: "С" },
//{ type: 2, name: "Т" },
//{ type: 1, name: "У" },
//{ type: 2, name: "Ф" },
//{ type: 2, name: "Ц" },
//{ type: 2, name: "Ч" },
//{ type: 2, name: "Ш" },
//{ type: 2, name: "Щ" },
//{ type: 3, name: "Ъ" },
//{ type: 1, name: "Ы" },
//{ type: 3, name: "Ь" },
//{ type: 1, name: "Э" },
//{ type: 1, name: "Ю" },
//{ type: 1, name: "Я" },


const stateLetters = (state = initialState, action) => {

    switch (action.type) {

        case LETTERS_SELECT:
            return {
                ...state,
                letterSelect: action.payload
            };
        default:
            return state;
    }
}
export default stateLetters