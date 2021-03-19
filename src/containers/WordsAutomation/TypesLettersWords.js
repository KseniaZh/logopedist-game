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

    const Y = 2 * Math.PI * (1 / letters.length);
    //радиус круга
    const radius = 57;

    return(
    <div>
        <div>СЛО-ВА</div>

        {
            letters.map((item, index) => {

                return <div
                            key={index + "TypesLettersWords"}
                            onClick={() => hendlerClick(item)}
                            style={{ left: `${40 + radius * Math.cos(index * Y) + '%'}`, top: `${40 + radius * Math.sin(index * Y) + '%'}` }}
                        >
                            <NavLink
                                to={`/wordsAutomation/${item}/${item}/LevelBlock_1`}
                            >
                                {item}
                            </NavLink>
                        </div>
            })
        }

    </div>
    )
}


export default connect()(TypesLettersWords)

