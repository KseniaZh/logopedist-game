import React, { useEffect, useState } from 'react';
import { connect, useDispatch, useSelector } from "react-redux";

import FlagsLevelsСompleted from '../../containers/Automation/FlagsLevelsСompleted';
import SelectingLevelBlock from '../../UserInterface/SelectingLevelBlock';
import LevelBlock from '../../components/Automation/LevelBlock';

import {
    sourceStateLettersBlocks,
} from '../../store/LettersBlocks/actionsLettersBlocks';
import {
    changeFlagButtonClick
} from '../../store/LevelCompleted/actionsLevelCompl'; 
import {
    changeFlagButtonBlockCompleted
} from '../../store/LevelCompleted/actionsButtonBlockFinal';
import {
    changeFlagLevelCompleted
} from '../../store/LevelCompleted/actionsLevelFinal';
import {
    finalLetter
} from '../../store/LevelCompleted/actionsFinalLetter';

function AutomationBlocks(props) {

    const dispatch = useDispatch();

    const letterSelect = useSelector(state => state.stateLetters.letterSelect);
    const namesLevelBlock = useSelector(state => state.stateLevelCoins.letterBlocks);
    const stateLevelCompleted = useSelector(state => state.stateLevelCompleted);//флаги всех кнопок ButtonBlocks
    const stateLevelFinal = useSelector(state => state.stateLevelFinal); //флаги пройденных блоков в листе
    const stateButtonBlockFinal = useSelector(state => state.stateButtonBlockFinal);//флаги пройденных
    const stateFinalLetter = useSelector(state => state.stateFinalLetter); //BUTTON_LEVEL_COMPLETED


    const [numberLevelBlock, setNumberLevelBlock] = useState(0);

    const coin = useSelector(state => state.stateLevelCoins.letterBlocks[numberLevelBlock]);
    const stateLetters = useSelector(state => state.stateLettersBlocks[numberLevelBlock]);

    const hendlerSelectLevelBlock = (data) => {
        setNumberLevelBlock(data);
    }

    const hendlerButtonClick = (numberButton, numberButtonBlock) => {

        dispatch(changeFlagButtonClick(stateLevelCompleted, letterSelect, numberLevelBlock, numberButtonBlock, numberButton));
        //получаем массив значений флагов из выбранного ButtonBlocks
        let arrFlags = Object.values(stateLevelCompleted[letterSelect][numberLevelBlock][numberButtonBlock]);
        // если все флаги чекнуты
        console.log('arrFlags ', arrFlags)
        if (arrFlags.every(x => x === true) === true) {

            dispatch(changeFlagButtonBlockCompleted(stateButtonBlockFinal, letterSelect, numberLevelBlock, numberButtonBlock));

            //теперь проверяем, чекнуты ли все блоки букв уровня
            let arr = stateButtonBlockFinal[letterSelect][numberLevelBlock].filter(x => x === false);

            // если все блоки пройдены, значит уровень пройден, помечаем в подсчете пройденных уровней
            if (arr.length === 0) {
                dispatch(changeFlagLevelCompleted(stateLevelFinal, letterSelect, numberLevelBlock));

                //проверяем, чекнуты ли все уровни
                let arrCompleted = stateLevelFinal[letterSelect].filter(x => x === false);

                if (arrCompleted.length === 0) {
                    console.log('буква пройдена')
                    dispatch(finalLetter(stateFinalLetter, letterSelect));
                };
            };
        };
    };

    useEffect(() => {
        return () => {
            dispatch(sourceStateLettersBlocks());
        }
    }, [])

    return (
        <div className="automation-buttons-blocks">

            <div>
                Тип буквы {props.typeLetter} буква {letterSelect}

                <SelectingLevelBlock
                    namesLevelBlock={namesLevelBlock}
                    onclick={hendlerSelectLevelBlock}
                    levelsComplied={stateLevelFinal[letterSelect]}
                />
            </div>

            <LevelBlock
                numberLevelBlock={numberLevelBlock}
                namesLevelBlock={namesLevelBlock}
                coin={coin}
                stateLetters={stateLetters}
                onclick={hendlerButtonClick}
                letterBlockFlags={stateLevelCompleted[letterSelect][numberLevelBlock]}
                buttonBlockCompleted={stateButtonBlockFinal[letterSelect][numberLevelBlock]}
            />

            <FlagsLevelsСompleted />
               
        </div>
        
     )
}

export default connect()(AutomationBlocks)
