import React from 'react';


function BoxCoinsLevelCompleted(props) {

    let arr = props.boxCoinsLetter.length;

    return (
        <div className="flags-levels-completed">
            <div></div>
            <div>
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
               
        </div>
        
     )
}

export default BoxCoinsLevelCompleted
