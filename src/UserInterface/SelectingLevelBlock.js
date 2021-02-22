import React from 'react';

import Button from './Buttons/Button';
import CoinFinalLevelBlock from './Coins/CoinFinalLevelBlock';

function SelectingLevelBlock(props) {


    return (

        <div>
            {
                props.namesLevelBlock.map((nameLevel, index) => {
                    return<div key={index}>

                        <Button
                            classname=''
                            onclick={props.onclick}
                            name={index+1}
                            data={index}
                        />
                        {
                            props.levelsComplied[index] ?
                                <CoinFinalLevelBlock
                                    classname=''
                                    classnameFinalCoin=''
                                    coin={nameLevel}
                                />
                                : <div className=''></div>
                        }
                        
                    </div>

                })
            }               
            </div>
        
     )
}

export default SelectingLevelBlock
