import React from 'react';
import { connect, useSelector} from "react-redux";
import Progress from '../../components/Shop/Progress';


function ProgressShop(props) {


    const stateImages = useSelector(state => state.stateImages);
    const namesBlocks = Object.keys(stateImages);
    const arrsImages = Object.values(stateImages);

    const stateFlagsImagesShop = useSelector(state => state.stateFlagsImagesShop);
    const namesBeautiful = useSelector(state => state.stateLevelCoins.namesBlocksPrizes);


    
    return(
        <div className="prize-shop">
            {
                arrsImages.map((arrImg, index) => {
                    return <Progress
                                key={index}
                                arrImages={arrImg}
                                nameBlock={namesBeautiful[namesBlocks[index]]}
                                keyBlock={namesBlocks[index]}
                                arrFlagsImagesShop={stateFlagsImagesShop[namesBlocks[index]]}
                            />
                })
            }
        
        </div>

    )
}

export default connect()(ProgressShop)
