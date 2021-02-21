import React, {useState } from 'react';

import ButtonAutomationBlock from '../../UserInterface/Buttons/ButtonAutomationBlock';

function ButtonBlock(props) {

    const [classnameSpan, setClassnameSpan] = useState({
        'button_1': ['heart'],
        'button_2': ['heart'],
        'button_3': ['heart'],
    })

    const hendlerButtonClick = (data) => {
        let newClass = {
            ...classnameSpan,
            [data]: ['heart', 'clicked'],
        }
        setClassnameSpan(newClass);

        newClass = Object.values(newClass); //определяем, все ли 3 кнопки кликнуты
        //для этого собираем все значения в массив массивов и проверяем, у всех ли есть слик

        if (newClass.every(x => x[1] === 'clicked') === true) {
            props.hendlerButtonBlock(newClass.every(x => x[1] === 'clicked'), props.numberBlock); // если все 3 кликнуты, выдаст true
        // возвращаем значение наверх для подсчета прохождения уровня
        }

        
    }

    return (
        <div className="button-block">

            <ButtonAutomationBlock
                    classname={props.classname}
                    onclick={hendlerButtonClick}
                    names={props.namesLettersButtons.namesLettersButton_1}
                    number='button_1'
            />

            <span
                className={classnameSpan.button_1.join(' ')}
            >	
                🢚
            </span>

            <ButtonAutomationBlock
                    classname={props.classname}
                    onclick={hendlerButtonClick}
                    names={props.namesLettersButtons.namesLettersButton_2}
                    number='button_2'
            />

            <span
                className={classnameSpan.button_2.join(' ')}
            >	
                🢚
            </span>

            <ButtonAutomationBlock
                    classname={props.classname}
                    onclick={hendlerButtonClick}
                    names={props.namesLettersButtons.namesLettersButton_3}
                    number='button_3'
            />

            <span
                className={classnameSpan.button_3.join(' ')}
            >
                {props.coin}
            </span>

        </div>

    )
}

export default ButtonBlock
