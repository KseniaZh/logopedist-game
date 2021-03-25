import React, { useState, useEffect } from 'react';
import { connect, useDispatch, useSelector } from "react-redux";

import Registration from '../../components/Authorization/Registration';
import Hi from '../../components/Home/Hi';

import { autorizationPlayer } from '../../store/Authorization/actionsAuthorization';
import { loadLocalStorageFlagsShopPrize } from '../../store/Coins/actionsFlagsImagesShop';
import { loadLocalStorageBoxCoinsDeposit } from '../../store/Coins/actionsLevelCoins';
import { loadLocalStorageFinalLetter } from '../../store/LevelCompleted/actionsFinalLetter';
import { loadLocalStorageFinalLetterWords } from '../../store/LevelCompleted/actionsFinalLetterWords';
import { loadLocalStorageLevelWordsCompleted } from '../../store/LevelCompleted/actionsLevelWordsFinal';
import { loadLocalStorageFinalLevels } from '../../store/LevelCompleted/actionsLevelFinal';
import { loadLocalStorageBlocksLevelCompleted } from '../../store/LevelCompleted/actionsButtonBlockFinal';
import { loadLocalStorageButtonClickBlockLevel } from '../../store/LevelCompleted/actionsLevelCompl';
import { loadLocalStorageLetterPrizes } from '../../store/Coins/actionsLetterEnd';
import { loadLocalStorageFlagGetPrize } from '../../store/Coins/actionsLevelCoins';

function Authorization(props) {
    //при первоначальной загрузке игры в браузере создаем ключи для хранения
    if (localStorage['playersNames'] === undefined) {
        localStorage.setItem('playersNames', JSON.stringify([]));
    }
    if (localStorage['player'] === undefined) {
        localStorage.setItem('player', JSON.stringify('player'));
    }

    const dispatch = useDispatch();

    const player = useSelector(state => state.stateAuthorization.player);
    //coins
    const flagsImagesShop = useSelector(store => store.stateFlagsImagesShop); //магазин призов, он же выбранных наград
    const boxCoinsLetter = useSelector(store => store.stateLevelCoins.boxCoinsLetter); // банки с монетами
    const letterPrizes = useSelector(store => store.stateLevelEnd); // награды за прохождение букв
    const flagGetPrize = useSelector(store => store.stateLevelCoins.flagGetPrize); //право на выбор награды в магазине

    //прохождение уровней в СЛОГЕ
    const finalLetter = useSelector(store => store.stateFinalLetter);
    const finalLevel = useSelector(store => store.stateLevelFinal);
    const blocksLevelCompleted = useSelector(store => store.stateButtonBlockFinal);
    const buttonClickBlockLevel = useSelector(store => store.stateLevelCompleted);

    //прохождение уровней в СЛОВАХ
    const finalLetterWords = useSelector(store => store.stateFinalLetterWords);
    const finalLevelWords = useSelector(store => store.stateLevelWordsFinal);

    const [flagAutorization, setFlagAutorization] = useState(false);
    const [valueRegistration, setValueRegistration] = useState('');
    const [activePlayer, setActivePlayer] = useState(JSON.parse(localStorage['player']));

    const onchangeRegistration = (event) => {
        setValueRegistration(event.target.value);
    }
 
    const hendlerRegistration = () => {
        // playersNames: ['Eva', 'Mama']
        //player: 'Eva'
       
        if (valueRegistration !== '' && valueRegistration !== undefined && valueRegistration !== null) {

            //добавляем имя игрока в массив зарегистрированных игроков
            let arrPlayersNames = JSON.parse(localStorage.getItem('playersNames'));
            arrPlayersNames.push(valueRegistration);
            localStorage['playersNames'] = JSON.stringify(arrPlayersNames);

            // записываем имя активного игрока в ключ и store
            localStorage.setItem('player', `${JSON.stringify(valueRegistration)}`);
            dispatch(autorizationPlayer(valueRegistration));

            setFlagAutorization(true);

            // для нового игрока создаем в localStorage ключи для хранения информации из store с нулевыми state

            localStorage.setItem(`${valueRegistration}_flagsImagesShop`, `${JSON.stringify(flagsImagesShop)}`);
            localStorage.setItem(`${valueRegistration}_boxCoinsLetter`, `${JSON.stringify(boxCoinsLetter)}`);
            localStorage.setItem(`${valueRegistration}_flagGetPrize`, `${JSON.stringify(flagGetPrize)}`);

            localStorage.setItem(`${valueRegistration}_finalLetterWords`, `${JSON.stringify(finalLetterWords)}`);
            localStorage.setItem(`${valueRegistration}_finalLevelWords`, `${JSON.stringify(finalLevelWords)}`);

            localStorage.setItem(`${valueRegistration}_finalLetter`, `${JSON.stringify(finalLetter)}`);
            localStorage.setItem(`${valueRegistration}_finalLevel`, `${JSON.stringify(finalLevel)}`);
            localStorage.setItem(`${valueRegistration}_blocksLevelCompleted`, `${JSON.stringify(blocksLevelCompleted)}`);
            localStorage.setItem(`${valueRegistration}_buttonClickBlockLevel`, `${JSON.stringify(buttonClickBlockLevel)}`);
            localStorage.setItem(`${valueRegistration}_letterPrizes`, `${JSON.stringify(letterPrizes)}`);
        }
    };

    useEffect(() => {
        if (JSON.parse(localStorage.getItem('player')) === 'player') {
            //значит игрок еще не зарегистрирован, направляем на регистрацию
            setFlagAutorization(false);
        } else {
            //грузим промежуточное хранение данных из localStorage в store
            setFlagAutorization(true);
            dispatch(autorizationPlayer(activePlayer)); // имя активного игрока

            let savedStateFlagsImagesShop = JSON.parse(localStorage.getItem(`${activePlayer}_flagsImagesShop`));
            dispatch(loadLocalStorageFlagsShopPrize(savedStateFlagsImagesShop));

            let savedBoxCoinsLetter = JSON.parse(localStorage.getItem(`${activePlayer}_boxCoinsLetter`));
            dispatch(loadLocalStorageBoxCoinsDeposit(savedBoxCoinsLetter));

            let savedFinalLetterWords = JSON.parse(localStorage.getItem(`${activePlayer}_finalLetterWords`));
            dispatch(loadLocalStorageFinalLetterWords(savedFinalLetterWords));

            let savedFinalLevelWords = JSON.parse(localStorage.getItem(`${activePlayer}_finalLevelWords`));
            dispatch(loadLocalStorageLevelWordsCompleted(savedFinalLevelWords));

            let savedFinalLetter = JSON.parse(localStorage.getItem(`${activePlayer}_finalLetter`));
            dispatch(loadLocalStorageFinalLetter(savedFinalLetter));

            let savedFinalLevel = JSON.parse(localStorage.getItem(`${activePlayer}_finalLevel`));
            dispatch(loadLocalStorageFinalLevels(savedFinalLevel));

            let savedBlocksLevelCompleted = JSON.parse(localStorage.getItem(`${activePlayer}_blocksLevelCompleted`));
            dispatch(loadLocalStorageBlocksLevelCompleted(savedBlocksLevelCompleted));

            let savedButtonClickBlockLevel = JSON.parse(localStorage.getItem(`${activePlayer}_buttonClickBlockLevel`));
            dispatch(loadLocalStorageButtonClickBlockLevel(savedButtonClickBlockLevel));

            let savedLetterPrizes = JSON.parse(localStorage.getItem(`${activePlayer}_letterPrizes`));
            dispatch(loadLocalStorageLetterPrizes(savedLetterPrizes));

            let FlagGetPrize = JSON.parse(localStorage.getItem(`${activePlayer}_letterPrizes`));
            dispatch(loadLocalStorageFlagGetPrize(FlagGetPrize));
        }
    }, [])

    return (
    <>
            {
                flagAutorization ?
                    <Hi
                        player={activePlayer}
                    />
                    :<Registration
                        onchange={onchangeRegistration}
                        onclick={hendlerRegistration}
                        value={valueRegistration}
                    />
            }
    </>
        
    )

};
    export default connect()(Authorization)