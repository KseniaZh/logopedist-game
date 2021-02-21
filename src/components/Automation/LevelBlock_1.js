import React, { useState } from 'react';
import { connect, useDispatch, useSelector } from "react-redux";

import ButtonBlock from './ButtonBlock';

function LevelBlock_1(props) {

    const namesLetters_A = {
        'letter1': props.letterAutomation,
        'letter2': 'A',
        'letter3': ''
    }
    const namesLetters_O = {
        'letter1': props.letterAutomation,
        'letter2': 'О',
        'letter3': ''
    }
    const namesLetters_U = {
        'letter1': props.letterAutomation,
        'letter2': 'У',
        'letter3': ''
    }
    const namesLetters_I = {
        'letter1': props.letterAutomation,
        'letter2': 'И',
        'letter3': ''
    }
    const namesLetters_II = {
        'letter1': props.letterAutomation,
        'letter2': 'Ы',
        'letter3': ''
    }
    const namesLetters_E = {
        'letter1': props.letterAutomation,
        'letter2': 'Е',
        'letter3': ''
    }

    const classnameLetters = {
        'buttonLetter': 'buttonLetter',
        'letter1': 'letter1',
        'letter2': 'letter2',
        'letter3': 'letter3'
    }

     const coin = useSelector(state => state.stateLevelCoins.letterBlocks[0]);


    const [levelСompleted, setLevelCompleted] = useState([false, false, false, false, false, false])

    const hendlerButtonBlock = (data, numberBlock) => {
        console.log('back ', data) 
        if (data === true) {
            let flagArr = [...levelСompleted];
            flagArr[numberBlock] = true;
            setLevelCompleted(flagArr);
            
            if (flagArr.every(x => x === true) === true) {
                console.log('level completed ', true);

            }
        }
    }

    return (

            <div>
                <ButtonBlock
                    namesLettersButton_1={namesLetters_A}
                    namesLettersButton_2={namesLetters_A}
                    namesLettersButton_3={namesLetters_A}
                    classnameLetters={classnameLetters}
                    hendlerButtonBlock={hendlerButtonBlock}
                    numberBlock={0}
                    coin={coin}
                />
                <ButtonBlock
                    namesLettersButton_1={namesLetters_O}
                    namesLettersButton_2={namesLetters_O}
                    namesLettersButton_3={namesLetters_O}
                    classnameLetters={classnameLetters}
                    hendlerButtonBlock={hendlerButtonBlock}
                    numberBlock={1}
                    coin={coin}
                />
                <ButtonBlock
                    namesLettersButton_1={namesLetters_U}
                    namesLettersButton_2={namesLetters_U}
                    namesLettersButton_3={namesLetters_U}
                    classnameLetters={classnameLetters}
                    hendlerButtonBlock={hendlerButtonBlock}
                    numberBlock={2}
                    coin={coin}
                />
                <ButtonBlock
                    namesLettersButton_1={namesLetters_I}
                    namesLettersButton_2={namesLetters_I}
                    namesLettersButton_3={namesLetters_I}
                    classnameLetters={classnameLetters}
                    hendlerButtonBlock={hendlerButtonBlock}
                    numberBlock={3}
                    coin={coin}
                />
                <ButtonBlock
                    namesLettersButton_1={namesLetters_II}
                    namesLettersButton_2={namesLetters_II}
                    namesLettersButton_3={namesLetters_II}
                    classnameLetters={classnameLetters}
                    hendlerButtonBlock={hendlerButtonBlock}
                    numberBlock={4}
                    coin={coin}
                />
                <ButtonBlock
                    namesLettersButton_1={namesLetters_E}
                    namesLettersButton_2={namesLetters_E}
                    namesLettersButton_3={namesLetters_E}
                    classnameLetters={classnameLetters}
                    hendlerButtonBlock={hendlerButtonBlock}
                    numberBlock={5}
                    coin={coin}
                />

            </div>
        
     )
}

export default connect()(LevelBlock_1)
