import React from 'react';

import Button from '../../UserInterface/Buttons/Button';
import CoinFinalLevelBlock from '../../UserInterface/Coins/CoinFinalLevelBlock';

function LevelCompleted(props) {

    return (

            <div>
                <div>!!! МО-ЛО-ДЕЦ !!!</div>

                <div><span> ☚ </span> ВЫ-БЕ-РИ  У-РО-ВЕНЬ</div>
            
                <CoinFinalLevelBlock
                    classname='coin-final-level-block-wrapper'
                    classnameFinalCoin='coin-final-level-block'
                    coin={props.coin[0]}
                    classnameCoin={props.coin[1]}
                    flagLevelFinal={props.flagLevelFinal}
                />
                <Button
                    name='ХО-ЧЕШЬ Е-ЩЁ РАЗ ?'
                    onclick={props.onclick}
                    data={props.data}
                />
            </div>

     )
}

export default LevelCompleted
