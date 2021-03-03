import React from 'react';

import Button from '../../UserInterface/Buttons/Button';
import LevelCompleted from '../../components/Completed/LevelCompleted';

function LevelBlockWord(props) {

    return (
        <div className="automation-buttons-blocks">
            {
                props.flagLevelFinal ?
                    <LevelCompleted
                            coin={props.coin}
                            flagLevelFinal={props.flagLevelFinal}
                            onclick={props.onclickRepeat}
                     />
                    :<div>
                        <div>{props.data}</div>
                        <Button
                            name={props.name}
                            onclick={props.onclickWord}
                            data={props.data}
                        />
                    </div>
            }
            
        
         </div>
     )
}

export default LevelBlockWord
