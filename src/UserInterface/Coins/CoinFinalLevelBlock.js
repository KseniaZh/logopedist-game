import React from 'react';


function CoinFinalLevelBlock(props) {
    
    return(

            <span
                className= {props.classname}
            >    
                <span
                    className={props.classnameCoin}
                >
                    {props.coin}
                </span>
            </span>

    )
}

export default CoinFinalLevelBlock
