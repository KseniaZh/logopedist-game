import React, { useState } from 'react';
import { connect, useDispatch, useSelector } from "react-redux";

import NavigationConsole from '../../UserInterface/NavigationConsole';
import WindowBlind from '../../components/Header/WindowBlind';
import Button from '../../UserInterface/Buttons/Button';

import { beginAgainAllFlagsFinalLetterNull } from '../../store/LevelCompleted/actionsFinalLetter';
import { beginAgainAllFlagsAllLevelsNull } from '../../store/LevelCompleted/actionsLevelFinal';
import { beginAgainNullAllFlagsAllBlocksAllLetters } from '../../store/LevelCompleted/actionsButtonBlockFinal';
import { beginAgainNullAllFlagsAllButtonClick } from '../../store/LevelCompleted/actionsLevelCompl';
import { beginAgainAllFlagsFinalLetterWordsNull } from '../../store/LevelCompleted/actionsFinalLetterWords';
import { beginAgainAllLevelsWordsNull } from '../../store/LevelCompleted/actionsLevelWordsFinal';




function Header(props) {

    const stateNavigationConsole = [

        {
            to: '/prizeShop',
            name: '👛'
            //Выбор награды
        },
        {
            to: '/',
            name: '🏰'
            //Home 
        },
        {
            to: '/progress',
            name: '🏆'
            //Прогресс 
        },
    ]

    const [isOpen, setIsOpen] = useState(false);
    const navStyle = ['Navigation'];

    if (!isOpen) {
        navStyle.push('close');
    };

    const hendlerNavHide = () => {
        setIsOpen(false);
    }
    const hendlerNavShow = () => {
        setIsOpen(true);
    }

    const namePlayer = useSelector(state => state.stateAuthorization.player);

    //набор картинок для призов
    const stateImages = useSelector(state => state.stateImages);
    const letterProgressPrizes = useSelector(state => state.stateLevelEnd); //прогресс букв и полученных призов

    //переменные флагов карточек слогов
    const stateLevelCompleted = useSelector(state => state.stateLevelCompleted);//флаги всех кнопок ButtonBlocks
    const stateLevelFinal = useSelector(state => state.stateLevelFinal); //флаги пройденных блоков в уровне
    const stateButtonBlockFinal = useSelector(state => state.stateButtonBlockFinal);//флаги уровней в букве
    const stateFinalLetter = useSelector(state => state.stateFinalLetter); //флаг буква пройдена

    //переменные флагов уровней слов
    const stateLevelWordsFinal = useSelector(state => state.stateLevelWordsFinal); //флаги прохождения уровней в букве
    const stateFinalLetterWords = useSelector(state => state.stateFinalLetterWords);// флаги прохождения буквы


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
  
    return (
        <header>
            <nav
                onMouseOver={hendlerNavShow}
                onMouseOut={hendlerNavHide}
                onClick={hendlerNavHide}
                className={navStyle.join(' ')}
            >
                <div >
                    ПРИ-ВЕТ, {namePlayer} !
                </div>

                <NavigationConsole
                    stateNavigationConsole={stateNavigationConsole}
                    onclick={() => console.log('click Header NavigationConsole')}
                    classname="button-navigation-console"
                    classnameWrapper='button-navigation-console-wrapper'
                />
                <Button
                    classname='null-all-letters-begin-again'
                    onclick={hendlerBeginAgainNullAllFlags}
                    name="НА-ЧАТЬ ВСЁ СНА-ЧА-ЛА"
                />
                
            </nav>


            {
                isOpen ?
                    <WindowBlind
                        onclick={hendlerNavHide}
                        classname='NavigationWindowBlind'
                        letterProgressPrizes={letterProgressPrizes}
                        stateImages={stateImages}
                    />
                    : null
            }
           

        </header>
    )
}
export default connect()(Header)



