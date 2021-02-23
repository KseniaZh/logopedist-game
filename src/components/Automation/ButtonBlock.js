import React, {useState } from 'react';

import ButtonAutomationBlock from '../../UserInterface/Buttons/ButtonAutomationBlock';
import CoinFinalLevelBlock from '../../UserInterface/Coins/CoinFinalLevelBlock';

function ButtonBlock(props) {

    const [classnameSpan, setClassnameSpan] = useState({
        'button_1': ['heart'],
        'button_2': ['heart'],
        'button_3': ['heart'],
    })

    const hendlerButtonClick = (numberButton, numberButtonBlock) => {
        let newClass = {
            ...classnameSpan,
            [numberButton]: ['heart', 'clicked'],
        }
        setClassnameSpan(newClass);
        props.onclick(numberButton, numberButtonBlock);
    }

    const funcCNSpan = (numberButton) => {
        const arrClassName = ['heart'];
        if (props.buttonBlockFlags[numberButton] === true) {
            arrClassName.push('clicked');
        }
        return arrClassName.join(' ')
    }

    console.log('flag completed ', props.buttonBlockCompleted + ' ' + props.numberBlock)


    return (
        <div className="button-block">

            <ButtonAutomationBlock
                    classname={props.classname}
                    onclick={hendlerButtonClick}
                    names={props.namesLettersButtons.namesLettersButton_1}
                    number='button_1'
                    numberBlock={props.numberBlock}
            />

            <span
                className={ funcCNSpan('button_1') }
            >	
                🢚
            </span>

            <ButtonAutomationBlock
                    classname={props.classname}
                    onclick={hendlerButtonClick}
                    names={props.namesLettersButtons.namesLettersButton_2}
                    number='button_2'
                    numberBlock={props.numberBlock}
            />

            <span
                className={ funcCNSpan('button_2')}
            >	
                🢚
            </span>

            <ButtonAutomationBlock
                    classname={props.classname}
                    onclick={hendlerButtonClick}
                    names={props.namesLettersButtons.namesLettersButton_3}
                    number='button_3'
                    numberBlock={props.numberBlock}
            />

            <span
                className={ funcCNSpan('button_3')}
            >
                🢚
            </span>

            {
                props.buttonBlockCompleted ?
                    <CoinFinalLevelBlock
                        classname='coin-final-block-wrapper'
                        classnameFinalCoin='coin-final-block'
                        coin={props.coin}
                    />
                    :<div className='coin-final-block-wrapper'></div>
            }
            

        </div>

    )
}

export default ButtonBlock
