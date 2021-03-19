import React from 'react';

import Button from './Buttons/Button';
import CoinFinalLevelBlock from './Coins/CoinFinalLevelBlock';

function SelectingLevelBlock(props) {


    return (

        <div className='selecting-level-block'>
            <div>У-РО-ВЕНЬ</div>
            <div>
                {
                    props.numbersLevelBlock.map((numberLevel, index) => {
                        return <div key={index}>

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
                                            coin={props.coins[index][0]}
                                            classnameCoin={props.coins[index][1]}
                                        />
                                        : <div className=''></div>
                                }
                        
                            </div>

                    })
                }
            </div>
            <Button
                classname='clearButton'
                onclick={props.onclickStartAgain}
                name="ВСЁ СНА-ЧА-ЛА"
            />
            </div>
        
     )
}

export default SelectingLevelBlock
