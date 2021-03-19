import React from 'react';

import ButtonBlock from './ButtonBlock';


function LevelBlock(props) {



    return (

        <div className='level-block'>

            <div>
                БУК-ВА
                <span>
                    {props.letterSelect}
                </span>
            </div>
            <div>
            {
                props.stateLetters.map((item, index) => {
                    if (index < 6) {
                            return <ButtonBlock
                                namesLettersButtons={item}
                                classname={props.stateLetters[6]}
                                numberBlock={index}
                                coin={props.coin}
                                onclick={props.onclick}
                                buttonBlockFlags={props.letterBlockFlags[index]}
                                buttonBlockCompleted={props.buttonBlockCompleted[index]}

                            />
                    }

                })
                }
             </div>


        </div>
     )
}

export default LevelBlock
