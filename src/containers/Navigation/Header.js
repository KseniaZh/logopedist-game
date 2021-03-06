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
            to: '/',
            name: 'Home'
        },
        {
            to: '/prizeShop',
            name: 'Выбор награды'
        },
        {
            to: '/progress',
            name: 'Прогресс'
        },
        {
            to: '/automation',
            name: 'Автоматизация звуков в слогах'
        },
        {
            to: '/wordsAutomation',
            name: 'Автоматизация звуков в словах'
        }
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

    const dispatch = useDispatch();

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
                <NavigationConsole
                    stateNavigationConsole={stateNavigationConsole}
                    onclick={()=>console.log('click Header NavigationConsole')}
                />
                <Button
                    classname='null-all-letters-begin-again'
                    onclick={hendlerBeginAgainNullAllFlags}
                    name="ВСЕ БУК-ВЫ СНА-ЧА-ЛА"
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


//function Header(props) {

//    const dispatch = useDispatch();
//    const login = useSelector(state => state.stateAuthorization.user.login);


//    const [isOpen, setIsOpen] = useState(false);

//    const hendlerNavigationToggle = () => {
//        if (isOpen === false) {
//            dispatch(saveDataStore({}));
//        }
//        setIsOpen(!isOpen);
//    };

//    const navStyle = [stateStylesAll[staleSelect].navigation];
//    if (!isOpen) {
//        navStyle.push("close");
//    };

//    const pages = [
//        {
//            to: '/',
//            name: 'Home'
//        },
//        {
//            to: '/EltypeClass',
//            name: 'EltypeClass'
//        },
//        {
//            to: '/ViewType',
//            name: 'ViewType'
//        }
//    ]
//    // логика всплывающей подсказки спрятана в обертку hoc, 
//    // обертка кнопок и подсказка реализованы в ButtonNavigationSmall и ButtonNavigation
//    const ButtonNavigationSmall = withHoverDescription(ButtonLinkSmall, DescriptionNavigation);
//    const ButtonNavigation = withHoverDescription(ButtonLink, DescriptionNavigation);

//    return (
//        <header>
//            <nav className={navStyle.join(' ')}>

//                <ButtonNavigationSmall
//                    to='/Personalize'
//                    icon="fa fa-user-circle-o"
//                    classname={stateStylesAll[staleSelect].personalizeButton}
//                    name='Personalize'
//                    onclick={() => setIsOpen(false)}
//                    tabindex="-1"
//                    haveDescription={isOpen}
//                    classnameDescription={stateStylesAll[staleSelect].navigationLinkAbout}
//                />
//                {
//                    login === "administrator" ?
//                        <ButtonNavigation
//                            to='/User'
//                            name='User'
//                            onclick={() => setIsOpen(false)}
//                            classname={stateStylesAll[staleSelect].navigationButtonLink}
//                            tabIndex='2'
//                            haveDescription={isOpen}
//                            classnameDescription={stateStylesAll[staleSelect].navigationLinkAbout}
//                        />
//                        : null
//                }
//                {
//                    pages.map((page, index) =>
//                        <ButtonNavigation
//                            to={page.to}
//                            name={page.name}
//                            onclick={() => setIsOpen(false)}
//                            classname={stateStylesAll[staleSelect].navigationButtonLink}
//                            tabIndex={index + 2}
//                            key={index + 2}
//                            haveDescription={isOpen}
//                            classnameDescription={stateStylesAll[staleSelect].navigationLinkAbout}
//                        />)
//                }

//            </nav>

//            {
//                isOpen ?
//                    <NavigationWindowBlind
//                        onclick={() => setIsOpen(false)}
//                        classname={stateStylesAll[staleSelect].navigationWindowBlind}
//                    />
//                    : null
//            }

//            <NavigationToggle
//                openNavigation={hendlerNavigationToggle}
//                isOpen={isOpen}
//                classname={stateStylesAll[staleSelect].navigationToggle}
//            />

//        </header>
//    )
//}
//export default connect()(Header)

