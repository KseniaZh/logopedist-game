import React from 'react';

  

function PreviewElement(props) {

    return(

        <div>
            <div>{props.item.headerItems}</div>
            <div>{props.item.say}</div>
            <div>{props.item.textItems}</div>
        </div>
  
    )
}

export default PreviewElement