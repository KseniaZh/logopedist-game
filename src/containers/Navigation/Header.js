import React, { useState } from 'react';
import { connect, useDispatch, useSelector } from "react-redux";

import NavigationConsole from '../../UserInterface/NavigationConsole';
import WindowBlind from '../../components/Header/WindowBlind';

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

  
    return (
        <header>
            <nav
                onMouseOver={hendlerNavShow}
                onMouseOut={hendlerNavHide}
                onClick={hendlerNavHide}
                className={navStyle.join(' ')}
            >
                <div className='hi-player'>ПРИ-ВЕТ, {namePlayer} !</div>
                <NavigationConsole
                    stateNavigationConsole={stateNavigationConsole}
                    onclick={() => console.log('click Header NavigationConsole')}
                    classname="button-navigation-console"
                    classnameWrapper='button-navigation-console-wrapper'
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



