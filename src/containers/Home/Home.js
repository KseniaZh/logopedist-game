import React, { useState, useEffect } from 'react';
import { connect, useDispatch, useSelector } from "react-redux";

import Authorization from '../../containers/Authorization/Authorization';

import News from '../../components/Home/News';

import Button from '../../UserInterface/Buttons/Button';

import { beginAgainAllFlagsFinalLetterNull } from '../../store/LevelCompleted/actionsFinalLetter';
import { beginAgainAllFlagsAllLevelsNull } from '../../store/LevelCompleted/actionsLevelFinal';
import { beginAgainNullAllFlagsAllBlocksAllLetters } from '../../store/LevelCompleted/actionsButtonBlockFinal';
import { beginAgainNullAllFlagsAllButtonClick } from '../../store/LevelCompleted/actionsLevelCompl';
import { beginAgainAllFlagsFinalLetterWordsNull } from '../../store/LevelCompleted/actionsFinalLetterWords';
import { beginAgainAllLevelsWordsNull } from '../../store/LevelCompleted/actionsLevelWordsFinal';



function Home(props) {

    const dispatch = useDispatch();

    const hendlerBeginAgainNullAllFlags = () => {
        //сброс всех уровней. Все, кроме наград, возвращается к исходному состоянию

        // СЛОГИ

        //флаг прохождения букв
        dispatch(beginAgainAllFlagsFinalLetterNull());

        //уровни всех буквы меняем на false
        dispatch(beginAgainAllFlagsAllLevelsNull());

        // false флаги во всех блоках на всех уровнях
        dispatch(beginAgainNullAllFlagsAllBlocksAllLetters());

        //false все клики по кнопкам во всех карточках
        dispatch(beginAgainNullAllFlagsAllButtonClick());

        // СЛОВА

        //флаг прохождения букв
        dispatch(beginAgainAllFlagsFinalLetterWordsNull());

        // флаги прохождения уровней буквы возвращаем на false
        dispatch(beginAgainAllLevelsWordsNull());
    }

    return(
        <div className='home'>

            <Authorization />

            <Button
                classname='null-all-letters-begin-again'
                onclick={hendlerBeginAgainNullAllFlags}
                name="ВСЕ БУК-ВЫ СНА-ЧА-ЛА"
            />


        </div>
    )
}

export default connect()(Home)