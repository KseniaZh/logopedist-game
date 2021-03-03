import React from 'react';
import { connect, useSelector, useDispatch } from "react-redux";
import PrizeShopBlock from '../../components/Shop/PrizeShopBlock';
import {
    removePrizeFromArr
} from '../../store/Coins/actionsFlagsImagesShop';

function PrizeShop(props) {

    const dispatch = useDispatch();

    const stateImages = useSelector(state => state.stateImages);
    const namesBlocks = Object.keys(stateImages);
    const arrsImages = Object.values(stateImages);

    const stateFlagsImagesShop = useSelector(state => state.stateFlagsImagesShop);
    const namesBeautiful = useSelector(state => state.stateLevelCoins.namesBlocksPrizes);

    const hendlerSelectPrize = (nameTypeImages, numberImage) => {
        console.log('hendlerSelectPrize!!!')
        dispatch(removePrizeFromArr(stateFlagsImagesShop, nameTypeImages, numberImage));
    }

    
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
                                to='/automation'
                                arrFlagsImagesShop={stateFlagsImagesShop[namesBlocks[index]]}
                            />
                })
            }
        
        </div>

    )
}

export default connect()(PrizeShop)
