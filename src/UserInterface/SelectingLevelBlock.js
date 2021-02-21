import React from 'react';

import Button from './Buttons/Button';


function SelectingLevelBlock(props) {


    return (

        <div>
            {
                props.namesLevelBlock.map((nameLevel, index) => {
                    return <Button
                                classname=''
                                onclick={props.onclick}
                                name={index+1}
                                data={index}
                                key={index}
                            />
                })
            }               
            </div>
        
     )
}

export default SelectingLevelBlock
