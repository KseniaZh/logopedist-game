import React from 'react';

import ComponentSelectingLevelBlock from '../../UserInterface/ComponentSelectingLevelBlock';
import Button from '../../UserInterface/Buttons/Button';

function SelectingLevelBlock(props) {



    return (

        <div className='selecting-level-block'>
            <div>У-РО-ВЕНЬ</div>
            <div>
                {
                    props.numbersLevelBlock.map((numberLevel, index) => {
                        return <ComponentSelectingLevelBlock 
                                    key={index}
                                    onclick={props.onclick}
                                    name={index + 1}
                                    data={index}
                                    levelsComplied={props.levelsComplied[index]}
                                    coin={props.coins[index][0]}
                                    classnameCoin={props.coins[index][1]}
                                    selectedLevelBlock={props.selectedLevelBlock}
                                    />
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
