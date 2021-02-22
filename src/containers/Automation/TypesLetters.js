import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect, useDispatch, useSelector } from "react-redux";

import { selectingLetter } from '../../store/LettersBlocks/actionsLetters';
import {
    changeLettersBlocks,
} from '../../store/LettersBlocks/actionsLettersBlocks';


function TypesLetters(props) {

    const dispatch = useDispatch();

    const stateLettersRedux = useSelector(state => state.stateLettersBlocks);
    const letters = useSelector(state => state.stateLetters.letters);

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

                        if (item.type === 1) {
                            return <li
                                        key={index + "TypesLetters"}
                                        onClick={() => hendlerClick(item.name)}
                                    >
                                        <NavLink to={`/automation/${item.type}/${item.name}/LevelBlock_1`}>{item.name}</NavLink>
                                    </li>
                        } else if (item.type === 2) {
                            return <li
                                        key={index + "TypesLetters"}
                                        onClick={() => hendlerClick(item.name)}
                                    >
                                        <NavLink to={`/automation/${item.type}/${item.name}/LevelBlock_1`}>{item.name}</NavLink>
                                    </li>
                        }
                    
                })
            }
        </ul>
    </div>
    )
}


export default connect()(TypesLetters)

