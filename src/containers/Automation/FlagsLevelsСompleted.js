import React, { useState } from 'react';
import { connect, useSelector } from "react-redux";

function FlagsLevelsСompleted(props) {

    const coin = useSelector(state => state.stateLevelCoins.letterBlocks);

    const [levelСompleted, setLevelСompleted] = useState({
        'level_1': ['heart'],
        'level_2': ['heart'],
        'level_3': ['heart'],
        'level_4': ['heart'],
        'level_5': ['heart'],
        'level_6': ['heart'],
    })

    const hendlerLevelEnd = () => {

    }


    return (
        <div className="flags-levels-completed">

            <span
                className={levelСompleted.level_1.join(' ')}
            >
                {coin[0]}
            </span>
            <span
                className={levelСompleted.level_1.join(' ')}
            >
                {coin[1]}
            </span>
            <span
                className={levelСompleted.level_1.join(' ')}
            >
                {coin[2]}
            </span>
            <span
                className={levelСompleted.level_1.join(' ')}
            >
                {coin[3]}
            </span>
            <span
                className={levelСompleted.level_1.join(' ')}
            >
                {coin[4]}
            </span>
            <span
                className={levelСompleted.level_1.join(' ')}
            >
                {coin[5]}
            </span>
               
        </div>
        
     )
}

export default connect()(FlagsLevelsСompleted)
