import React, { useEffect, useState } from 'react';
import { connect, useDispatch, useSelector } from "react-redux";

import BoxCoinsLevelCompleted from '../../components/Completed/BoxCoinsLevelCompleted';
import SelectingLevelBlock from '../../UserInterface/SelectingLevelBlock';
import LevelBlockWord from '../../components/WordsAutomation/LevelBlockWord';

import {
    sourceStateLettersBlocks,
} from '../../store/LettersBlocks/actionsLettersBlocks';
import {
    changeFlagLevelWordCompleted,
    nullFlagLevelWordCompleted
} from '../../store/LevelCompleted/actionsLevelWordsFinal';
import {
    finalLetterWords,
} from '../../store/LevelCompleted/actionsFinalLetterWords';
import {
    boxCoinsDeposit
} from '../../store/Coins/actionsLevelCoins';

function WordBlocks(props) {

    const dispatch = useDispatch();

    const letterSelect = useSelector(state => state.stateLetters.letterSelect);
    const namesLevelBlock = useSelector(state => state.stateLevelCoins.wordsBlocks);
    const stateLevelWordsFinal = useSelector(state => state.stateLevelWordsFinal); //флаги прохождения уровней в букве
    const stateWords = useSelector(state => state.stateWords);
    const boxCoinsLetter = useSelector(state => state.stateLevelCoins.boxCoinsLetter)
    
    const stateFinalLetterWords = useSelector(state => state.stateFinalLetterWords);// флаги по всем буквам по учету прохождения всех уровней
    
    const [numberWordBlock, setNumberWordBlock] = useState(0);
    
    const [counter, setCounter] = useState(0);//счетчик переключиния слов, в массиве 10 слов

    const hendlerSelectWordBlock = (data) => {
        setNumberWordBlock(data);
        setCounter(0);
    };
    const coins = useSelector(state => state.stateLevelCoins.wordsBlocks);


 
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
    }
    const hendlerLevelWordsRepeat = () => {
        setCounter(0); // 1 слово
        //снимаем флаг прохождения уровня
        dispatch(nullFlagLevelWordCompleted(stateLevelWordsFinal, letterSelect, numberWordBlock));
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
                    numbersLevelBlock={Object.keys(stateWords[letterSelect])}
                    namesLevels={namesLevelBlock}
                    onclick={hendlerSelectWordBlock}
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
               
        </div>
        
     )
}

export default connect()(WordBlocks)


