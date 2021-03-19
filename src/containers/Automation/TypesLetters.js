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

    const Y = 2 * Math.PI * (1/letters.length);
    //радиус круга
    const radius = 57;

    return(
    <div>
        <div>СЛО-ГИ</div>

        {
                letters.map((item, index) => {

                    if (item.type === 2) {
                        return <div
                            key={index + "TypesLetters"}
                            onClick={() => hendlerClick(item.name)}
                            style={{ left: `${40 + radius * Math.cos(index * Y) + '%'}`, top: `${40 + radius * Math.sin(index * Y) + '%'}`}}
                        >
                            <NavLink to={`/automation/${item.type}/${item.name}/LevelBlock_1`}>{item.name}</NavLink>
                        </div>
                    }
                })
        }
 
    </div>
    )
}


export default connect()(TypesLetters)

