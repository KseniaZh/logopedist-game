import React, { useState } from 'react';


function FlagsWordsLevelsСompleted(props) {

    //const [levelСompleted, setLevelСompleted] = useState({
    //    'level_1': ['heart'],
    //    'level_2': ['heart'],
    //    'level_3': ['heart'],
    //    'level_4': ['heart'],
    //    'level_5': ['heart'],
    //    'level_6': ['heart'],
    //})

    return (
        <div className="flags-levels-completed">

            {
                props.boxCoinsLetter.map((coin, index) => {
                        return <span
                                    key={index}
                                    className='heart'
                                >
                                    {coin}
                                </span>
                })
            }

               
        </div>
        
     )
}

export default FlagsWordsLevelsСompleted
