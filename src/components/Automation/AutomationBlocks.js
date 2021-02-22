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

function AutomationBlocks(props) {

    const dispatch = useDispatch();

    const letterSelect = useSelector(state => state.stateLetters.letterSelect);
    const namesLevelBlock = useSelector(state => state.stateLevelCoins.letterBlocks);
    const levelsComplied = useSelector(state => state.stateLevelFinal[letterSelect]);
    const stateLevelCompleted = useSelector(state => state.stateLevelCompleted);

    const levelSelect = (data) => {
        for (let i = 0; i < data.length; i++) {
            if (data[i] === false) {
                return i
            };
        };
    };

    const [numberLevelBlock, setNumberLevelBlock] = useState(levelSelect(levelsComplied));

    const coin = useSelector(state => state.stateLevelCoins.letterBlocks[numberLevelBlock]);
    const stateLetters = useSelector(state => state.stateLettersBlocks[numberLevelBlock]);

    const hendlerSelectLevelBlock = (data) => {
        setNumberLevelBlock(data);
    }

    const [classnameSpan, setClassnameSpan] = useState({
        'button_1': ['heart'],
        'button_2': ['heart'],
        'button_3': ['heart'],
    })

    const hendlerButtonClick = (numberButton, numberButtonBlock) => {
        //let newClass = {
        //    ...classnameSpan,
        //    [data]: ['heart', 'clicked'],
        //}
        //setClassnameSpan(newClass);

        //newClass = Object.values(newClass); //определяем, все ли 3 кнопки кликнуты
        ////для этого собираем все значения в массив массивов и проверяем, у всех ли есть слик

        //if (newClass.every(x => x[1] === 'clicked') === true) {
        //    //  props.hendlerButtonBlock(newClass.every(x => x[1] === 'clicked'), props.numberBlock); // если все 3 кликнуты, выдаст true
        //    // возвращаем значение наверх для подсчета прохождения уровня
        //    setFlagCoinFinal(true);
        //}

        dispatch(changeFlagButtonClick(stateLevelCompleted, letterSelect, numberLevelBlock, numberButtonBlock, numberButton));

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
                    namesLevelBlock={namesLevelBlock}
                    onclick={hendlerSelectLevelBlock}
                    levelsComplied={levelsComplied}
                />
            </div>

            <LevelBlock
                numberLevelBlock={numberLevelBlock}
                namesLevelBlock={namesLevelBlock}
                coin={coin}
                stateLetters={stateLetters}
                onclick={hendlerButtonClick}
                letterBlockFlags={stateLevelCompleted[letterSelect][numberLevelBlock]}
            />

            <FlagsLevelsСompleted />
               
        </div>
        
     )
}

export default connect()(AutomationBlocks)
