import React from 'react';


function CoinFinalLevelBlock(props) {
    
    return(

            <div 
                className= {props.classname}
            >    
                <span
                    className={props.classnameCoin}
                >
                    {props.coin}
                </span>
            </div>

    )
}

export default CoinFinalLevelBlock
