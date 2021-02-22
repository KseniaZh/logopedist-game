import {
    CHANGE_LETTERS_BLOCKS,
    SOURCE_STATE_LETTERS_BLOCKS

} from "./types";

export const changeLettersBlocks = (data, letter) => {
    //изменения блоков слогов после выбора рабочей буквы

    let stateLettersBlocks = data;
    // меняем переменную 'X' в state на переданную через props.letterAutomation букву
    
    for (let k = 0; k < stateLettersBlocks.length; k++) {
        for (let i = 0; i < stateLettersBlocks[k].length; i++) {

                let arr = Object.values(stateLettersBlocks[k][i]);

                for (let obj of arr) {

                    let keys = Object.keys(obj);

                    for (let key of keys) {
                        if (obj[key] === 'X') {
                            obj[key] = letter;
                        };
                    };
                };
            };
    }
    


    return {
        type: CHANGE_LETTERS_BLOCKS,
        payload: stateLettersBlocks
    }
}

export const sourceStateLettersBlocks = () => {
    //возвращение блоков слогов к исходному нулевому состоянию

    let sourceState = [
        //0 - 1 карточка
        [
            {
                'namesLettersButton_1': { 'letter_1': 'X', 'letter_2': 'А', 'letter_3': '' },
                'namesLettersButton_2': { 'letter_1': 'X', 'letter_2': 'А', 'letter_3': '' },
                'namesLettersButton_3': { 'letter_1': 'X', 'letter_2': 'А', 'letter_3': '' },
            },
            {
                'namesLettersButton_1': { 'letter_1': 'X', 'letter_2': 'О', 'letter_3': '' },
                'namesLettersButton_2': { 'letter_1': 'X', 'letter_2': 'О', 'letter_3': '' },
                'namesLettersButton_3': { 'letter_1': 'X', 'letter_2': 'О', 'letter_3': '' },
            },
            {
                'namesLettersButton_1': { 'letter_1': 'X', 'letter_2': 'У', 'letter_3': '' },
                'namesLettersButton_2': { 'letter_1': 'X', 'letter_2': 'У', 'letter_3': '' },
                'namesLettersButton_3': { 'letter_1': 'X', 'letter_2': 'У', 'letter_3': '' },
            },
            {
                'namesLettersButton_1': { 'letter_1': 'X', 'letter_2': 'И', 'letter_3': '' },
                'namesLettersButton_2': { 'letter_1': 'X', 'letter_2': 'И', 'letter_3': '' },
                'namesLettersButton_3': { 'letter_1': 'X', 'letter_2': 'И', 'letter_3': '' },
            },
            {
                'namesLettersButton_1': { 'letter_1': 'X', 'letter_2': 'Е', 'letter_3': '' },
                'namesLettersButton_2': { 'letter_1': 'X', 'letter_2': 'Е', 'letter_3': '' },
                'namesLettersButton_3': { 'letter_1': 'X', 'letter_2': 'Е', 'letter_3': '' },
            },
            {
                'namesLettersButton_1': { 'letter_1': 'X', 'letter_2': 'Ы', 'letter_3': '' },
                'namesLettersButton_2': { 'letter_1': 'X', 'letter_2': 'Ы', 'letter_3': '' },
                'namesLettersButton_3': { 'letter_1': 'X', 'letter_2': 'Ы', 'letter_3': '' },
            },
            {
                'classnameButton': 'buttonLetter',
                'classnameLetter_1': 'letter_x',
                'classnameLetter_2': 'letter_1',
                'classnameLetter_3': 'letter_1'
            }
        ],
        //1 - 2 карточка
        [
            {
                'namesLettersButton_1': { letter_1: 'X', letter_2: 'А', letter_3: '' },
                'namesLettersButton_2': { letter_1: 'X', letter_2: 'А', letter_3: '' },
                'namesLettersButton_3': { letter_1: 'X', letter_2: 'О', letter_3: '' },
            },
            {
                'namesLettersButton_1': { letter_1: 'X', letter_2: 'О', letter_3: '' },
                'namesLettersButton_2': { letter_1: 'X', letter_2: 'О', letter_3: '' },
                'namesLettersButton_3': { letter_1: 'X', letter_2: 'Ы', letter_3: '' },
            },
            {
                'namesLettersButton_1': { letter_1: 'X', letter_2: 'Ы', letter_3: '' },
                'namesLettersButton_2': { letter_1: 'X', letter_2: 'У', letter_3: '' },
                'namesLettersButton_3': { letter_1: 'X', letter_2: 'У', letter_3: '' },
            },
            {
                'namesLettersButton_1': { letter_1: 'X', letter_2: 'У', letter_3: '' },
                'namesLettersButton_2': { letter_1: 'X', letter_2: 'А', letter_3: '' },
                'namesLettersButton_3': { letter_1: 'X', letter_2: 'А', letter_3: '' },
            },
            {
                'namesLettersButton_1': { letter_1: 'X', letter_2: 'Э', letter_3: '' },
                'namesLettersButton_2': { letter_1: 'X', letter_2: 'Э', letter_3: '' },
                'namesLettersButton_3': { letter_1: 'X', letter_2: 'Ы', letter_3: '' },
            },
            {
                'namesLettersButton_1': { letter_1: 'X', letter_2: 'Я', letter_3: '' },
                'namesLettersButton_2': { letter_1: 'X', letter_2: 'Я', letter_3: '' },
                'namesLettersButton_3': { letter_1: 'X', letter_2: 'А', letter_3: '' },
            },
            {
                'classnameButton': 'buttonLetter',
                'classnameLetter_1': 'letter_x',
                'classnameLetter_2': 'letter_1',
                'classnameLetter_3': 'letter_1'
            }
        ],
        //2 - 3 карточка
        [
            {
                'namesLettersButton_1': { letter_1: 'X', letter_2: 'О', letter_3: '' },
                'namesLettersButton_2': { letter_1: 'X', letter_2: 'А', letter_3: '' },
                'namesLettersButton_3': { letter_1: 'X', letter_2: 'У', letter_3: '' },
            },
            {
                'namesLettersButton_1': { letter_1: 'X', letter_2: 'Ы', letter_3: '' },
                'namesLettersButton_2': { letter_1: 'X', letter_2: 'И', letter_3: '' },
                'namesLettersButton_3': { letter_1: 'X', letter_2: 'О', letter_3: '' },
            },
            {
                'namesLettersButton_1': { letter_1: 'X', letter_2: 'У', letter_3: '' },
                'namesLettersButton_2': { letter_1: 'X', letter_2: 'А', letter_3: '' },
                'namesLettersButton_3': { letter_1: 'X', letter_2: 'У', letter_3: '' },
            },
            {
                'namesLettersButton_1': { letter_1: 'X', letter_2: 'Э', letter_3: '' },
                'namesLettersButton_2': { letter_1: 'X', letter_2: 'Ы', letter_3: '' },
                'namesLettersButton_3': { letter_1: 'X', letter_2: 'А', letter_3: '' },
            },
            {
                'namesLettersButton_1': { letter_1: 'X', letter_2: 'А', letter_3: '' },
                'namesLettersButton_2': { letter_1: 'X', letter_2: 'Я', letter_3: '' },
                'namesLettersButton_3': { letter_1: 'X', letter_2: 'У', letter_3: '' },
            },
            {
                'namesLettersButton_1': { letter_1: 'X', letter_2: 'Э', letter_3: '' },
                'namesLettersButton_2': { letter_1: 'X', letter_2: 'Е', letter_3: '' },
                'namesLettersButton_3': { letter_1: 'X', letter_2: 'Э', letter_3: '' },
            },
            {
                'classnameButton': 'buttonLetter',
                'classnameLetter_1': 'letter_x',
                'classnameLetter_2': 'letter_1',
                'classnameLetter_3': 'letter_1'
            }
        ],
        //3 - 4 карточка
        [
            {
                'namesLettersButton_1': { letter_1: 'А', letter_2: 'X', letter_3: '' },
                'namesLettersButton_2': { letter_1: 'А', letter_2: 'X', letter_3: '' },
                'namesLettersButton_3': { letter_1: 'А', letter_2: 'X', letter_3: '' },
            },
            {
                'namesLettersButton_1': { letter_1: 'О', letter_2: 'X', letter_3: '' },
                'namesLettersButton_2': { letter_1: 'О', letter_2: 'X', letter_3: '' },
                'namesLettersButton_3': { letter_1: 'О', letter_2: 'X', letter_3: '' },
            },
            {
                'namesLettersButton_1': { letter_1: 'У', letter_2: 'X', letter_3: '' },
                'namesLettersButton_2': { letter_1: 'У', letter_2: 'X', letter_3: '' },
                'namesLettersButton_3': { letter_1: 'У', letter_2: 'X', letter_3: '' },
            },
            {
                'namesLettersButton_1': { letter_1: 'И', letter_2: 'X', letter_3: '' },
                'namesLettersButton_2': { letter_1: 'И', letter_2: 'X', letter_3: '' },
                'namesLettersButton_3': { letter_1: 'И', letter_2: 'X', letter_3: '' },
            },
            {
                'namesLettersButton_1': { letter_1: 'Э', letter_2: 'X', letter_3: '' },
                'namesLettersButton_2': { letter_1: 'Э', letter_2: 'X', letter_3: '' },
                'namesLettersButton_3': { letter_1: 'Э', letter_2: 'X', letter_3: '' },
            },
            {
                'namesLettersButton_1': { letter_1: 'Я', letter_2: 'X', letter_3: '' },
                'namesLettersButton_2': { letter_1: 'Я', letter_2: 'X', letter_3: '' },
                'namesLettersButton_3': { letter_1: 'Я', letter_2: 'X', letter_3: '' },
            },
            {
                'classnameButton': 'buttonLetter',
                'classnameLetter_1': 'letter_1',
                'classnameLetter_2': 'letter_x',
                'classnameLetter_3': 'letter_1'
            }
        ],
        //4 - 5 карточка
        [
            {
                'namesLettersButton_1': { letter_1: 'А', letter_2: 'X', letter_3: '' },
                'namesLettersButton_2': { letter_1: 'О', letter_2: 'X', letter_3: '' },
                'namesLettersButton_3': { letter_1: 'А', letter_2: 'X', letter_3: '' },
            },
            {
                'namesLettersButton_1': { letter_1: 'У', letter_2: 'X', letter_3: '' },
                'namesLettersButton_2': { letter_1: 'А', letter_2: 'X', letter_3: '' },
                'namesLettersButton_3': { letter_1: 'У', letter_2: 'X', letter_3: '' },
            },
            {
                'namesLettersButton_1': { letter_1: 'О', letter_2: 'X', letter_3: '' },
                'namesLettersButton_2': { letter_1: 'И', letter_2: 'X', letter_3: '' },
                'namesLettersButton_3': { letter_1: 'О', letter_2: 'X', letter_3: '' },
            },
            {
                'namesLettersButton_1': { letter_1: 'И', letter_2: 'X', letter_3: '' },
                'namesLettersButton_2': { letter_1: 'А', letter_2: 'X', letter_3: '' },
                'namesLettersButton_3': { letter_1: 'И', letter_2: 'X', letter_3: '' },
            },
            {
                'namesLettersButton_1': { letter_1: 'Э', letter_2: 'X', letter_3: '' },
                'namesLettersButton_2': { letter_1: 'Ю', letter_2: 'X', letter_3: '' },
                'namesLettersButton_3': { letter_1: 'Ю', letter_2: 'X', letter_3: '' },
            },
            {
                'namesLettersButton_1': { letter_1: 'Я', letter_2: 'X', letter_3: '' },
                'namesLettersButton_2': { letter_1: 'А', letter_2: 'X', letter_3: '' },
                'namesLettersButton_3': { letter_1: 'Я', letter_2: 'X', letter_3: '' },
            },
            {
                'classnameButton': 'buttonLetter',
                'classnameLetter_1': 'letter_1',
                'classnameLetter_2': 'letter_x',
                'classnameLetter_3': 'letter_1'
            }
        ],
        //5 - 6 карточка
        [
            {
                'namesLettersButton_1': { 'letter_1': 'А', 'letter_2': 'X', 'letter_3': 'А' },
                'namesLettersButton_2': { 'letter_1': 'А', 'letter_2': 'X', 'letter_3': 'А' },
                'namesLettersButton_3': { 'letter_1': 'А', 'letter_2': 'X', 'letter_3': 'А' },
            },
            {
                'namesLettersButton_1': { letter_1: 'О', letter_2: 'X', letter_3: 'О' },
                'namesLettersButton_2': { letter_1: 'О', letter_2: 'X', letter_3: 'О' },
                'namesLettersButton_3': { letter_1: 'О', letter_2: 'X', letter_3: 'О' },
            },
            {
                'namesLettersButton_1': { letter_1: 'У', letter_2: 'X', letter_3: 'У' },
                'namesLettersButton_2': { letter_1: 'У', letter_2: 'X', letter_3: 'У' },
                'namesLettersButton_3': { letter_1: 'У', letter_2: 'X', letter_3: 'У' },
            },
            {
                'namesLettersButton_1': { letter_1: 'И', letter_2: 'X', letter_3: 'И' },
                'namesLettersButton_2': { letter_1: 'И', letter_2: 'X', letter_3: 'И' },
                'namesLettersButton_3': { letter_1: 'И', letter_2: 'X', letter_3: 'И' },
            },
            {
                'namesLettersButton_1': { letter_1: 'Э', letter_2: 'X', letter_3: 'Э' },
                'namesLettersButton_2': { letter_1: 'Э', letter_2: 'X', letter_3: 'Э' },
                'namesLettersButton_3': { letter_1: 'Э', letter_2: 'X', letter_3: 'Э' },
            },
            {
                'namesLettersButton_1': { letter_1: 'Е', letter_2: 'X', letter_3: 'Е' },
                'namesLettersButton_2': { letter_1: 'Е', letter_2: 'X', letter_3: 'Е' },
                'namesLettersButton_3': { letter_1: 'Е', letter_2: 'X', letter_3: 'Е' },
            },
            {
                'classnameButton': 'buttonLetter',
                'classnameLetter_1': 'letter_1',
                'classnameLetter_2': 'letter_x',
                'classnameLetter_3': 'letter_1'
            }
        ],
    ];

    return {
        type: SOURCE_STATE_LETTERS_BLOCKS,
        payload: sourceState
    }
}

