import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect, useDispatch, useSelector } from "react-redux";

import { selectingLetter } from '../../store/LettersBlocks/actionsLetters';
import {
    changeLettersBlocks,
} from '../../store/LettersBlocks/actionsLettersBlocks';


function TypesLettersWords(props) {

    const dispatch = useDispatch();

    const stateLettersRedux = useSelector(state => state.stateLettersBlocks);
    const stateWords = useSelector(state => state.stateWords);

    const letters = Object.keys(stateWords);

    const hendlerClick = (letterName) => {
        dispatch(selectingLetter(letterName));
        dispatch(changeLettersBlocks(stateLettersRedux, letterName));
    };

    return(
    <div>
        <h2>Выберите букву</h2>
        <ul>
            {
                letters.map((item, index) => {

                    return <li
                                key={index + "TypesLettersWords"}
                                onClick={() => hendlerClick(item)}
                            >
                                <NavLink to={`/wordsAutomation/${item}/${item}/LevelBlock_1`}>{item}</NavLink>
                            </li>
                })
            }
        </ul>
    </div>
    )
}


export default connect()(TypesLettersWords)

