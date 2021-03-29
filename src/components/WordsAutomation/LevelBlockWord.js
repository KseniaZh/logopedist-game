import React from 'react';

import Button from '../../UserInterface/Buttons/Button';
import LevelCompleted from '../../components/Completed/LevelCompleted';

function LevelBlockWord(props) {

    return (
        <div className='level-block-word'>
            <div>
                БУК-ВА
                <span>
                    {props.letterSelect}
                </span>
            </div>
            <div>
                {
                    props.flagLevelFinal ?
                        <LevelCompleted
                                coin={props.coin}
                                flagLevelFinal={props.flagLevelFinal}
                                onclick={props.onclickRepeat}
                                classname='level-completed-word'
                        />
                        : <div className='level-block-word-button'>
                            <div>{props.data}</div>
                            <div>{props.name}</div>
                            <Button
                                name='↻'
                                onclick={props.onclickWord}
                                data={props.data}
                                classname='level-block-word-button__button'
                            />
                        </div>
                }
            </div>
        
         </div>
     )
}

export default LevelBlockWord
