import React, { useState, useEffect } from 'react';
import { connect, useSelector, useDispatch } from "react-redux";
import PrizeShopBlock from '../../components/Shop/PrizeShopBlock';
import TakePrize from '../../components/Shop/TakePrize';

import { removePrizeFromArr } from '../../store/Coins/actionsFlagsImagesShop';
import { pushPrizeLetter } from '../../store/Coins/actionsLetterEnd';
import { flagGetPrizeInShop } from '../../store/Coins/actionsLevelCoins';

function PrizeShop(props) {

    const dispatch = useDispatch();

    const stateImages = useSelector(state => state.stateImages); // все картинки
    const namesBlocks = Object.keys(stateImages);
    const arrsImages = Object.values(stateImages);
    const letterSelect = useSelector(state => state.stateLetters.letterSelect); //выбрана буква
    const letterPrizeProgress = useSelector(state => state.stateLevelEnd); //объект букв с флагами и выбранными призами

    const stateFlagsImagesShop = useSelector(state => state.stateFlagsImagesShop); //магазин призов
    const namesBeautiful = useSelector(state => state.stateLevelCoins.namesBlocksPrizes);
    const flagGetPrize = useSelector(store => store.stateLevelCoins.flagGetPrize); //право на выбор награды в магазине

    const [flagWarning, setFlagWarning] = useState(false);
    const [flagComponent, setFlagComponent] = useState(false);
    const [nameImage, setNameImage] = useState(null);

    const hendlerSelectPrize = (nameTypeImages, numberImage) => {
        if (flagGetPrize === true) {
            dispatch(removePrizeFromArr(stateFlagsImagesShop, nameTypeImages, numberImage));
            dispatch(pushPrizeLetter(letterPrizeProgress, letterSelect, nameTypeImages, numberImage))
            dispatch(flagGetPrizeInShop(false)); // приз выбран, право на выбор приза аннулировано 
            setNameImage(stateImages[nameTypeImages][numberImage]);
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
        <div className="prize-shop">
            {
                arrsImages.map((arrImg, index) => {
                    return <PrizeShopBlock
                                key={index}
                                arrImages={arrImg}
                                nameBlock={namesBeautiful[namesBlocks[index]]}
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
                        nameImage={nameImage}
                        classname='take-prize-wrapper'
                        classnameWrapper='take-prize'
                        classnamePrize='priz-Window-Blind'
                        onclick={()=>{}}
                    />
                    : null
            }
        
        </div>

    )
}

export default connect()(PrizeShop)
