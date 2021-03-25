import React from 'react';
import { connect, useSelector} from "react-redux";
import Progress from '../../components/Shop/Progress';


function ProgressShop(props) {


    const stateImages = useSelector(state => state.stateImages);
    const namesBlocks = Object.keys(stateImages);
    const arrsImages = Object.values(stateImages);

    const stateFlagsImagesShop = useSelector(state => state.stateFlagsImagesShop);
    const namesBeautiful = useSelector(state => state.stateLevelCoins.namesBlocksPrizes);
    const bannersBlocks = useSelector(state => state.stateLevelCoins.banners);

    
    return(
        <div
            className="prize-shop"
        >
            <div className="prize-shop-header">ТВО-Я КОЛ-ЛЕК-ЦИ-Я :</div>
            {
                arrsImages.map((arrImg, index) => {
                    return <Progress
                                key={index}
                                arrImages={arrImg}
                                nameBlock={namesBeautiful[namesBlocks[index]]}
                                bannersBlocks={bannersBlocks[namesBlocks[index]]}
                                keyBlock={namesBlocks[index]}
                                arrFlagsImagesShop={stateFlagsImagesShop[namesBlocks[index]]}
                            />
                })
            }
        
        </div>

    )
}

export default connect()(ProgressShop)
