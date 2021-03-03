import React, { useEffect} from 'react';
import { connect, useDispatch, useSelector } from "react-redux";

import ButtonBlock from './ButtonBlock';
import CoinFinalLevelBlock from '../../UserInterface/Coins/CoinFinalLevelBlock';
import {
    dataFromLocalStorage
} from '../../store/LevelCompleted/actionsButtonBlockFinal';

function LevelBlock(props) {

    // console.log('111', typeof(JSON.parse(localStorage.getItem('Eva_stateButtonBlockFinal'))))
    //console.log('111', typeof(localStorage.getItem('Eva_stateButtonBlockFinal')))


    //console.log('obj ', x)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(dataFromLocalStorage());
    }, [])

    return (

        <div>
                <ButtonBlock
                    namesLettersButtons={props.stateLetters[0]}
                    classname={props.stateLetters[6]}
                    numberBlock={0}
                    coin={props.coin}
                    onclick={props.onclick}
                    buttonBlockFlags={props.letterBlockFlags[0]}
                    buttonBlockCompleted={props.buttonBlockCompleted[0]}

                />
                <ButtonBlock
                    namesLettersButtons={props.stateLetters[1]}
                    classname={props.stateLetters[6]}
                    numberBlock={1}
                    coin={props.coin}
                    onclick={props.onclick}
                    buttonBlockFlags={props.letterBlockFlags[1]}
                    buttonBlockCompleted={props.buttonBlockCompleted[1]}

                />
                <ButtonBlock
                    namesLettersButtons={props.stateLetters[2]}
                    classname={props.stateLetters[6]}
                    numberBlock={2}
                    coin={props.coin}
                    onclick={props.onclick}
                    buttonBlockFlags={props.letterBlockFlags[2]}
                    buttonBlockCompleted={props.buttonBlockCompleted[2]}

                />
                <ButtonBlock
                    namesLettersButtons={props.stateLetters[3]}
                    classname={props.stateLetters[6]}
                    numberBlock={3}
                    coin={props.coin}
                    onclick={props.onclick}
                    buttonBlockFlags={props.letterBlockFlags[3]}
                    buttonBlockCompleted={props.buttonBlockCompleted[3]}

                />
                <ButtonBlock
                    namesLettersButtons={props.stateLetters[4]}
                    classname={props.stateLetters[6]}
                    numberBlock={4}
                    coin={props.coin}
                    onclick={props.onclick}
                    buttonBlockFlags={props.letterBlockFlags[4]}
                    buttonBlockCompleted={props.buttonBlockCompleted[4]}

                />
                <ButtonBlock
                    namesLettersButtons={props.stateLetters[5]}
                    classname={props.stateLetters[6]}
                    numberBlock={5}
                    coin={props.coin}
                    onclick={props.onclick}
                    buttonBlockFlags={props.letterBlockFlags[5]}
                    buttonBlockCompleted={props.buttonBlockCompleted[5]}

                />

            </div>
        
     )
}

export default connect()(LevelBlock)
