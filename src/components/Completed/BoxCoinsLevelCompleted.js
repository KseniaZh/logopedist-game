import React from 'react';


function BoxCoinsLevelCompleted(props) {

    return (
        <div className="flags-levels-completed">

            {
                props.boxCoinsLetter.map((coin, index) => {
                        return <span
                                    key={index}
                                    className={coin[1]}
                                >
                                    {coin[0]}
                                </span>
                })
            }

               
        </div>
        
     )
}

export default BoxCoinsLevelCompleted
