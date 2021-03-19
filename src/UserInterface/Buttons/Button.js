import React from 'react';


function Button(props) {

    const data = props.data;
    const data2 = props.data2;

    return(

            <div 
                style={{ backgroundImage: `url(${props.nameImage})` }}
                className={props.classname}
                onClick={() => props.onclick(data, data2)}
                tabIndex = {props.tabindex}
            >    
                <span>{props.name}</span>
            </div>

    )
}

export default Button
