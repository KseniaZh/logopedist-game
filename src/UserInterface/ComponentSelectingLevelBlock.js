import React, { useEffect, useState } from 'react';

import Button from './Buttons/Button';
import CoinFinalLevelBlock from './Coins/CoinFinalLevelBlock';

function ComponentSelectingLevelBlock(props) {

    const [boxShadowButton, setBoxShadowButton] = useState('');

    useEffect(() => {
        if (props.selectedLevelBlock === props.data) {
            setBoxShadowButton('0px 1px 5px 5px rgba(140, 162, 198, 0.8)');
        } else {
            setBoxShadowButton('');
        }
    }, [props.selectedLevelBlock])

    return (
            <div className='component-selecting-level-block'>
                    <Button
                        onclick={props.onclick}
                        name={props.name}
                        data={props.data}
                        boxShadow={boxShadowButton}
                    />
                    {
                        props.levelsComplied?
                            <CoinFinalLevelBlock
                                coin={props.coin}
                                classnameCoin={props.classnameCoin}
                            />
                            : <div></div>
                    }    
             </div>
     )
}

export default ComponentSelectingLevelBlock
