import React from 'react';

import Button from '../../UserInterface/Buttons/Button';
import CoinFinalLevelBlock from '../../UserInterface/Coins/CoinFinalLevelBlock';

function LevelCompleted(props) {

    return (

        <div className='level-completed'>
            <div>
                <div>!!! МО-ЛО-ДЕЦ !!!</div>

                <div>
                    <span> ☚ </span>
                    <span> ВЫ-БЕ-РИ   У-РО-ВЕНЬ</span>
                     
                </div>
            
 
                <Button
                    name='ПОВ-ТО-РИТЬ ?'
                    onclick={props.onclick}
                    data={props.data}
                />
            </div>
            <CoinFinalLevelBlock
                classname='coin-final-level-block-wrapper'
                coin={props.coin[0]}
                classnameCoin={props.coin[1]}
                flagLevelFinal={props.flagLevelFinal}
            />
        </div>
     )
}

export default LevelCompleted
