import React, { useEffect, useState } from 'react';
import { connect, useDispatch, useSelector } from "react-redux";

import BoxCoinsLevelCompleted from '../../components/Completed/BoxCoinsLevelCompleted';
import SelectingLevelBlock from '../../UserInterface/SelectingLevelBlock';
import LevelBlockWord from '../../components/WordsAutomation/LevelBlockWord';
import FinaleTakePrize from '../../components/Completed/FinaleTakePrize';

import {sourceStateLettersBlocks} from '../../store/LettersBlocks/actionsLettersBlocks';
import {
    changeFlagLevelWordCompleted,
    nullFlagLevelWordCompleted,
    takePrizeAllFlagsLevelsWordsNull
} from '../../store/LevelCompleted/actionsLevelWordsFinal';
import {
    finalLetterWords,
    takePrizeFlagFinalWordsNull
} from '../../store/LevelCompleted/actionsFinalLetterWords';
import { boxCoinsDeposit } from '../../store/Coins/actionsLevelCoins';
import { flagGetPrizeInShop } from '../../store/Coins/actionsLevelCoins';

function WordBlocks(props) {

    const dispatch = useDispatch();

    const letterSelect = useSelector(state => state.stateLetters.letterSelect); //выбрана буква
    const stateWords = useSelector(state => state.stateWords); //массивы слов для вывода в уровни
    const boxCoinsLetter = useSelector(state => state.stateLevelCoins.boxCoinsLetter) // банка с наградами
    const coins = useSelector(state => state.stateLevelCoins.wordsBlocks); // массив со значками наград

    const stateLevelWordsFinal = useSelector(state => state.stateLevelWordsFinal); //флаги прохождения уровней в букве
    const stateFinalLetterWords = useSelector(state => state.stateFinalLetterWords);// флаги прохождения буквы


    const [numberWordBlock, setNumberWordBlock] = useState(0); // номер уровня
    
    const [counter, setCounter] = useState(0);//счетчик переключиния слов, в массиве 10 слов

    const hendlerSelectWordBlock = (data) => {
        setNumberWordBlock(data);
        setCounter(0);
    };
    const hendlerClickWord = (numberWord) => {
        setCounter(numberWord);
        if (numberWord === 10) {
            dispatch(changeFlagLevelWordCompleted(stateLevelWordsFinal, letterSelect, numberWordBlock));
            setCounter(0);

            // уровень пройден, в банку падает монетка
            dispatch(boxCoinsDeposit(boxCoinsLetter, letterSelect, coins[numberWordBlock]));

            //берем массив флагов прохождения уровней по выбранной букве
            if (stateLevelWordsFinal[letterSelect].every(x => x === true)) {
                dispatch(finalLetterWords(stateFinalLetterWords, letterSelect));
                console.log(' УРОВЕНЬ ПРОЙДЕН!!!')
            }
        }
    };
    const hendlerLevelWordsRepeat = () => {
        setCounter(0); // 1 слово
        //снимаем флаг прохождения уровня
        dispatch(nullFlagLevelWordCompleted(stateLevelWordsFinal, letterSelect, numberWordBlock));
    };

    const hendlerStartAgain = () => {
        // сбросить достижения по букве и начать с начала

        //флаг прохождения буквы возвращаем на false
        dispatch(takePrizeFlagFinalWordsNull(stateFinalLetterWords, letterSelect));

        // флаги прохождения уровней буквы возвращаем на false
        dispatch(takePrizeAllFlagsLevelsWordsNull(stateLevelWordsFinal, letterSelect));
    }
    const hendlerFinaleWordsTakePrize = () => {
        // буква пройдена, при получении приза все флаги буквы меняем на false для возможности повторного прохождения буквы

        hendlerStartAgain();
        dispatch(flagGetPrizeInShop(true)); //право на получение награды в магазине призов
    }
    
    useEffect(() => {
        return () => {
            dispatch(sourceStateLettersBlocks());
        }
    }, [])

    return (
        <div className="automation-buttons-blocks-word">


            <div>
                Тип буквы {props.typeLetter} буква {letterSelect}

                <SelectingLevelBlock
                    numbersLevelBlock={Object.keys(stateWords[letterSelect])}
                    onclick={hendlerSelectWordBlock}
                    onclickStartAgain={hendlerStartAgain}
                    levelsComplied={stateLevelWordsFinal[letterSelect]}
                    coins={coins}
                />
            </div>

            <LevelBlockWord
                onclickWord={hendlerClickWord}
                onclickRepeat={hendlerLevelWordsRepeat}
                data={counter + 1}
                name={stateWords[letterSelect][numberWordBlock][counter]}
                flagLevelFinal={stateLevelWordsFinal[letterSelect][numberWordBlock]}
                coin={coins[numberWordBlock]}
            />

            <BoxCoinsLevelCompleted
                boxCoinsLetter={boxCoinsLetter[letterSelect]}
            />
            {
                stateFinalLetterWords[letterSelect] === true ?
                    <FinaleTakePrize
                        onclick={hendlerFinaleWordsTakePrize}
                    />
                    : null
            }
               
        </div>
        
     )
}

export default connect()(WordBlocks)


