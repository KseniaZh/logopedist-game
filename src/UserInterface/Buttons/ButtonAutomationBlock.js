import React from 'react';


function ButtonAutomationBlock(props) {
    const data = props.number;
    
    return(

            <div 
                className={props.classname.classnameButton}
                onClick={() => props.onclick(data)}
                tabIndex = {props.tabindex}
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
