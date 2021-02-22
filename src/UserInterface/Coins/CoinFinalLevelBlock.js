import React from 'react';


function CoinFinalLevelBlock(props) {
    
    return(

            <div 
                className= {props.classname}
                onClick={() => props.onclick()}
            >    
                <span
                    className={props.classnameFinalCoin}
                >
                    {props.coin}
                </span>
            </div>

    )
}

export default CoinFinalLevelBlock
