import React from 'react';


function ButtonAutomationBlock(props) {
    const numberButton = props.number;
    const numberButtonBlock = props.numberBlock;

    const hendler = () => {
        props.onclick(numberButton, numberButtonBlock);
        let idDiv = document.getElementById(numberButton);
        idDiv.nextElementSibling.classList.add('clicked')
    }

    return(

            <div 
                className={props.classname.classnameButton}
                onClick={() => props.onclick(numberButton, numberButtonBlock)}
                tabIndex={props.tabindex}
                id={numberButton}
            >    
                <span
                    className={props.classname.classnameLetter_1}
                >
                    {props.names.letter_1}
                </span>

                <span
                    className={props.classname.classnameLetter_2}
                >
                    {props.names.letter_2}
                </span>

                <span
                    className={props.classname.classnameLetter_3}
                >
                    {props.names.letter_3}
                </span>

            </div>

    )
}

export default ButtonAutomationBlock
