import React, { useState } from 'react';
import { connect, useSelector } from "react-redux";

import ButtonBlock from './ButtonBlock';
import CoinFinalLevelBlock from '../../UserInterface/Coins/CoinFinalLevelBlock';

function LevelBlock(props) {
    
    const [levelСompleted, setLevelCompleted] = useState([false, false, false, false, false, false])

    const hendlerButtonBlock = ( numberBlock) => {
        //console.log('back ', data) 
        //if (data === true) {
        //    let flagArr = [...levelСompleted];
        //    flagArr[numberBlock] = true;
        //    setLevelCompleted(flagArr);
            
        //    if (flagArr.every(x => x === true) === true) {
        //        console.log('level completed ', true);
        //    }
        //}
    }

    return (

            <div>
                <ButtonBlock
                namesLettersButtons={props.stateLetters[0]}
                classname={props.stateLetters[6]}
                numberBlock={0}
                coin={props.coin}
                onclick={props.onclick}
                buttonBlockFlags={props.letterBlockFlags[0]}

                />
                <ButtonBlock
                    namesLettersButtons={props.stateLetters[1]}
                    classname={props.stateLetters[6]}
                    numberBlock={1}
                    coin={props.coin}
                onclick={props.onclick}
                buttonBlockFlags={props.letterBlockFlags[1]}

                />
                <ButtonBlock
                    namesLettersButtons={props.stateLetters[2]}
                    classname={props.stateLetters[6]}
                    numberBlock={2}
                    coin={props.coin}
                onclick={props.onclick}
                buttonBlockFlags={props.letterBlockFlags[2]}

                />
                <ButtonBlock
                    namesLettersButtons={props.stateLetters[3]}
                    classname={props.stateLetters[6]}
                    numberBlock={3}
                    coin={props.coin}
                onclick={props.onclick}
                buttonBlockFlags={props.letterBlockFlags[3]}

                />
                <ButtonBlock
                    namesLettersButtons={props.stateLetters[4]}
                    classname={props.stateLetters[6]}
                    numberBlock={4}
                    coin={props.coin}
                onclick={props.onclick}
                buttonBlockFlags={props.letterBlockFlags[4]}

                />
                <ButtonBlock
                    namesLettersButtons={props.stateLetters[5]}
                    classname={props.stateLetters[6]}
                    numberBlock={5}
                    coin={props.coin}
                onclick={props.onclick}
                buttonBlockFlags={props.letterBlockFlags[5]}

                />
                <CoinFinalLevelBlock
                    classname='coin-final-level-block-wrapper'
                    classnameFinalCoin='coin-final-level-block'
                    coin={props.coin}
                />

            </div>
        
     )
}

export default connect()(LevelBlock)
