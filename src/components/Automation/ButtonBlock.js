import React from 'react';

import ButtonAutomationBlock from '../../UserInterface/Buttons/ButtonAutomationBlock';
import CoinFinalLevelBlock from '../../UserInterface/Coins/CoinFinalLevelBlock';

function ButtonBlock(props) {

    const hendlerButtonClick = (numberButton, numberButtonBlock) => {
        props.onclick(numberButton, numberButtonBlock);
    }

    const funcCNSpan = (numberButton) => {
        const arrClassName = ['heart'];
        if (props.buttonBlockFlags[numberButton] === true) {
            arrClassName.push('clicked');
        }
        return arrClassName.join(' ')
    }
    const funcStyleButton = (numberButton) => {
        if (props.buttonBlockFlags[numberButton] === true) {
            return 'inherit'
        }
        return ''
    }

    return (
        <div className="button-block">

            <ButtonAutomationBlock
                classname={props.classname}
                styleButton={funcStyleButton('button_1')}
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
                styleButton={funcStyleButton('button_2')}
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
                styleButton={funcStyleButton('button_3')}
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
                props.buttonBlockCompleted === true?
                    <CoinFinalLevelBlock
                        classname='coin-final-block-wrapper'
                        classnameCoin={props.coin[1]}
                        coin={props.coin[0]}
                    />
                    :<span className='coin-final-block-wrapper'></span>
            }
            

        </div>

    )
}

export default ButtonBlock
