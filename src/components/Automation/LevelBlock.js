import React, { useEffect, useState } from 'react';
import { connect, useDispatch, useSelector } from "react-redux";

import ButtonBlock from './ButtonBlock';

function LevelBlock(props) {


    const coin = useSelector(state => state.stateLevelCoins.letterBlocks[props.numberLevelBlock]);
    const stateLettersRedux = useSelector(state => state.stateLettersBlocks[props.numberLevelBlock]);

    const [stateLetters, setStateLetters] = useState(stateLettersRedux);

    const [letter, setLetter] = useState(0);

    const [levelСompleted, setLevelCompleted] = useState([false, false, false, false, false, false])

    const hendlerButtonBlock = (data, numberBlock) => {
        console.log('back ', data) 
        if (data === true) {
            let flagArr = [...levelСompleted];
            flagArr[numberBlock] = true;
            setLevelCompleted(flagArr);
            
            if (flagArr.every(x => x === true) === true) {
                console.log('level completed ', true);

            }
        }
    }

    useEffect(() => {
        let state = stateLettersRedux;
        // меняем переменную 'X' в state на переданную через props.letterAutomation букву
        for (let i = 0; i < state.length; i++) {

            let arr = Object.values(state[i]);

            for (let obj of arr) {

                let keys = Object.keys(obj);

                for (let key of keys) {
                    if (obj[key] === 'X') {
                        obj[key] = props.letterAutomation;
                    };
                };
            };
        };
        setStateLetters(state);
    }, [props.letterAutomation]);

    return (

            <div>
                <ButtonBlock
                    namesLettersButtons={stateLetters[0]}
                    classname={stateLetters[6]}
                    hendlerButtonBlock={hendlerButtonBlock}
                    numberBlock={0}
                    coin={coin}
                />
                <ButtonBlock
                    namesLettersButtons={stateLetters[1]}
                    classname={stateLetters[6]}
                    hendlerButtonBlock={hendlerButtonBlock}
                    numberBlock={1}
                    coin={coin}
                />
                <ButtonBlock
                    namesLettersButtons={stateLetters[2]}
                    classname={stateLetters[6]}
                    hendlerButtonBlock={hendlerButtonBlock}
                    numberBlock={2}
                    coin={coin}
                />
                <ButtonBlock
                    namesLettersButtons={stateLetters[3]}
                    classname={stateLetters[6]}
                    hendlerButtonBlock={hendlerButtonBlock}
                    numberBlock={3}
                    coin={coin}
                />
                <ButtonBlock
                    namesLettersButtons={stateLetters[4]}
                    classname={stateLetters[6]}
                    hendlerButtonBlock={hendlerButtonBlock}
                    numberBlock={4}
                    coin={coin}
                />
                <ButtonBlock
                    namesLettersButtons={stateLetters[5]}
                    classname={stateLetters[6]}
                    hendlerButtonBlock={hendlerButtonBlock}
                    numberBlock={5}
                    coin={coin}
                />

            </div>
        
     )
}

export default connect()(LevelBlock)
