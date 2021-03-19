import React, { useState, useEffect } from 'react';
import { connect, useSelector, useDispatch } from "react-redux";
import PrizeShopBlock from '../../components/Shop/PrizeShopBlock';
import TakePrize from '../../components/Shop/TakePrize';

import { removePrizeFromArr } from '../../store/Coins/actionsFlagsImagesShop';
import { pushPrizeLetter } from '../../store/Coins/actionsLetterEnd';
import {
    flagGetPrizeInShop,
    selectImgPrize
} from '../../store/Coins/actionsLevelCoins';



function PrizeShop(props) {

    const dispatch = useDispatch();

    const stateImages = useSelector(state => state.stateImages); // все картинки
    const namesBlocks = Object.keys(stateImages);
    const arrsImages = Object.values(stateImages);// массив массивов картинок
    const letterSelect = useSelector(state => state.stateLetters.letterSelect); //выбрана буква
    const letterPrizeProgress = useSelector(state => state.stateLevelEnd); //объект букв с флагами и выбранными призами

    const stateFlagsImagesShop = useSelector(state => state.stateFlagsImagesShop); //магазин призов
    const namesBeautiful = useSelector(state => state.stateLevelCoins.namesBlocksPrizes);
    const bannersBlocks = useSelector(state => state.stateLevelCoins.banners);
    const flagGetPrize = useSelector(store => store.stateLevelCoins.flagGetPrize); //право на выбор награды в магазине
    const nameImage = useSelector(store => store.stateLevelCoins.nameImageSelectedPrize); // имя img выбранного приза

    const [flagWarning, setFlagWarning] = useState(false);
    const [flagComponent, setFlagComponent] = useState(false);

    const hendlerSelectPrize = (nameTypeImages, numberImage) => {
        if (flagGetPrize === true) {
            dispatch(removePrizeFromArr(stateFlagsImagesShop, nameTypeImages, numberImage));
            dispatch(pushPrizeLetter(letterPrizeProgress, letterSelect, nameTypeImages, numberImage))
            dispatch(flagGetPrizeInShop(false)); // приз выбран, право на выбор приза аннулировано 
            dispatch(selectImgPrize(nameTypeImages, numberImage));//запоминаем картинку выбранного приза для вывода в табличку TakePrize
            setFlagWarning(false);
        }else {
            setFlagWarning(true);
        }
        setFlagComponent(true);
    }
 
    useEffect(() => {
        return () => {
            setFlagComponent(false);
        }
    }, []);

    return(
        <div
            className="prize-shop"
        >
            <div className="prize-shop-header">ВЫ-БЕ-РИ  НАГ-РА-ДУ</div>
            {
                arrsImages.map((arrImg, index) => {

                    return <PrizeShopBlock
                                key={index}
                                arrImages={arrImg}
                                nameBlock={namesBeautiful[namesBlocks[index]]}
                                bannersBlocks={bannersBlocks[namesBlocks[index]]}
                                arrImgNameBlock=""
                                keyBlock={namesBlocks[index]}
                                onclick={hendlerSelectPrize}
                                arrFlagsImagesShop={stateFlagsImagesShop[namesBlocks[index]]}
                            />
                })
            }
            {
                flagComponent ?
                    <TakePrize
                        flagWarning={flagWarning}
                        nameImage={stateImages[nameImage[0]][nameImage[1]]}
                        classname='take-prize-wrapper'
                        classnameWrapper='take-prize'
                        classnamePrize='priz-take-prize'
                        onclick={()=>{}}
                    />
                    : null
            }
        
        </div>

    )
}

export default connect()(PrizeShop)
