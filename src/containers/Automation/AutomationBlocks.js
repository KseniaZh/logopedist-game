import React, { useEffect, useState } from 'react';
import { connect, useDispatch, useSelector } from "react-redux";

import BoxCoinsLevelCompleted from '../../components/Completed/BoxCoinsLevelCompleted';
import SelectingLevelBlock from '../../UserInterface/SelectingLevelBlock';
import LevelBlock from '../../components/Automation/LevelBlock';
import LevelCompleted from '../../components/Completed/LevelCompleted';
import FinaleTakePrize from '../../components/Completed/FinaleTakePrize';

import {
    sourceStateLettersBlocks,
} from '../../store/LettersBlocks/actionsLettersBlocks';
import {
    changeFlagButtonClick,
    nullAllFlagsLevelButtonClick,
    takePrizeNullAllFlagsButtonClick
} from '../../store/LevelCompleted/actionsLevelCompl'; 
import {
    changeFlagButtonBlockCompleted,
    nullAllFlagsButtonBlocksCompleted,
    takePrizeNullAllFlagsAllBlocksLetter
} from '../../store/LevelCompleted/actionsButtonBlockFinal';
import {
    changeFlagLevelCompleted,
    nullFlagLevelCompleted,
    takePrizeFlagsAllLevelsNull
} from '../../store/LevelCompleted/actionsLevelFinal';
import {
    finalLetter,
    takePrizeFlagFinalLetterNull
} from '../../store/LevelCompleted/actionsFinalLetter';
import {
    flagLevelLetterEnd
} from '../../store/Coins/actionsLetterEnd';
import {
    boxCoinsDeposit
} from '../../store/Coins/actionsLevelCoins';
import { flagGetPrizeInShop } from '../../store/Coins/actionsLevelCoins';

function AutomationBlocks(props) {

    const dispatch = useDispatch();

    const letterSelect = useSelector(state => state.stateLetters.letterSelect); //выбрана буква
    const namesLevelBlock = useSelector(state => state.stateLevelCoins.letterBlocks); //массив наград и их классов
    const stateLetters = useSelector(state => state.stateLettersBlocks); //схема прорисовки карточек слогов

    //переменные флагов карточек слогов
    const stateLevelCompleted = useSelector(state => state.stateLevelCompleted);//флаги всех кнопок ButtonBlocks
    const stateLevelFinal = useSelector(state => state.stateLevelFinal); //флаги пройденных блоков в уровне
    const stateButtonBlockFinal = useSelector(state => state.stateButtonBlockFinal);//флаги уровней в букве
    const stateFinalLetter = useSelector(state => state.stateFinalLetter); //флаг буква пройдена

    //награды
    const stateLevelEnd = useSelector(state => state.stateLevelEnd); //флаги не полученных наград за окончание уровня
    const boxCoinsLetter = useSelector(state => state.stateLevelCoins.boxCoinsLetter) // массив наград в банке за все уровни
    const coins = useSelector(state => state.stateLevelCoins.letterBlocks);


    const [numberLevelBlock, setNumberLevelBlock] = useState(0); // выбран уровень   

    //выбор уровня
    const hendlerSelectLevelBlock = (data) => {
        setNumberLevelBlock(data);
    }

    const hendlerButtonClick = (numberButton, numberButtonBlock) => {

        dispatch(changeFlagButtonClick(stateLevelCompleted, letterSelect, numberLevelBlock, numberButtonBlock, numberButton));
        //получаем массив значений флагов из выбранного ButtonBlocks
        let arrFlags = Object.values(stateLevelCompleted[letterSelect][numberLevelBlock][numberButtonBlock]);

        // если все кнопки чекнуты
        if (arrFlags.every(x => x === true) === true) {
            // меняем флаг в store в блоке
            dispatch(changeFlagButtonBlockCompleted(stateButtonBlockFinal, letterSelect, numberLevelBlock, numberButtonBlock));

            //теперь проверяем, чекнуты ли все блоки уровня
            let arr = stateButtonBlockFinal[letterSelect][numberLevelBlock].filter(x => x === false);

            // если все блоки пройдены, значит уровень пройден, 
            if (arr.length === 0) {
                //помечаем в подсчете пройденных уровней
                dispatch(changeFlagLevelCompleted(stateLevelFinal, letterSelect, numberLevelBlock));

                // уровень пройден, в банку падает монетка
                dispatch(boxCoinsDeposit(boxCoinsLetter, letterSelect, coins[numberLevelBlock]));

                //проверяем, чекнуты ли все уровни
                let arrCompleted = stateLevelFinal[letterSelect].filter(x => x === false);

                if (arrCompleted.length === 0) {
                    console.log('буква пройдена')
                    dispatch(finalLetter(stateFinalLetter, letterSelect));
                    dispatch(flagLevelLetterEnd(stateLevelEnd, letterSelect));
                    dispatch(flagGetPrizeInShop(true)); //право на получение награды в магазине призов
                };
            };
        };
    };

    
    const hendlerLevelRepeat = () => {
    //повторить прохождение уровня. флаги обнуляются, награды сохраняются в банке

        //удаляем из подсчета пройденных уровней
        dispatch(nullFlagLevelCompleted(stateLevelFinal, letterSelect, numberLevelBlock));

        // меняем флаги в store во всех блоках уровня
        dispatch(nullAllFlagsButtonBlocksCompleted(stateButtonBlockFinal, letterSelect, numberLevelBlock));

        //меняем флаги всех кнопок в каждом из блоков уровня
        dispatch(nullAllFlagsLevelButtonClick(stateLevelCompleted, letterSelect, numberLevelBlock));
    }

    const hendlerFinaleLetterTakePrize = () => {
        // буква пройдена, при получении приза все флаги буквы меняем на false для возможности повторного прохождения буквы

        //флаг прохождения буквы возвращаем на false
        dispatch(takePrizeFlagFinalLetterNull(stateFinalLetter, letterSelect));

        //все уровни буквы меняем на false
        dispatch(takePrizeFlagsAllLevelsNull(stateLevelFinal, letterSelect));

        // false флаги во всех блоках на всех уровнях
        dispatch(takePrizeNullAllFlagsAllBlocksLetter(stateButtonBlockFinal, letterSelect));

        //false все клики по кнопкам во всех карточках
        dispatch(takePrizeNullAllFlagsButtonClick(stateLevelCompleted, letterSelect));
    }

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
                    numbersLevelBlock={Object.keys(stateLetters)}
                    namesLevelBlock={namesLevelBlock}
                    onclick={hendlerSelectLevelBlock}
                    onclickStartAgain={hendlerFinaleLetterTakePrize}
                    levelsComplied={stateLevelFinal[letterSelect]}
                    coins={coins}
                />
            </div>

            {
                stateLevelFinal[letterSelect][numberLevelBlock] === true ?
                    <LevelCompleted
                        coin={coins[numberLevelBlock]}
                        flagLevelFinal={stateLevelFinal[letterSelect][numberLevelBlock]}
                        onclick={hendlerLevelRepeat}
                    />
                    :<LevelBlock
                        numberLevelBlock={numberLevelBlock}
                        namesLevelBlock={namesLevelBlock}
                        coin={coins[numberLevelBlock]}
                        stateLetters={stateLetters[numberLevelBlock]}
                        onclick={hendlerButtonClick}
                        letterBlockFlags={stateLevelCompleted[letterSelect][numberLevelBlock]}
                        buttonBlockCompleted={stateButtonBlockFinal[letterSelect][numberLevelBlock]}
                
                    />
            }

            <BoxCoinsLevelCompleted
                boxCoinsLetter={boxCoinsLetter[letterSelect]}
            />

            {
                stateFinalLetter[letterSelect] === true ?
                    <FinaleTakePrize
                        onclick={hendlerFinaleLetterTakePrize}
                    />
                    :null
            }
               
        </div>
        
     )
}

export default connect()(AutomationBlocks)


//{
//    stateLevelEnd['letter'][letterSelect] ?
//        <div>ГОТОВО</div>
//        : <div>ИСПЫТАНИЕ</div>
//}
