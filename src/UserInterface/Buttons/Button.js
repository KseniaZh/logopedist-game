import React from 'react';


function Button(props) {

    const data = props.data;
    const data2 = props.data2;

    return(

            <div 
                className={props.classname}
                style={{ backgroundImage: `url(${props.nameImage})` }}
                onClick={() => props.onclick(data, data2)}
                tabIndex = {props.tabindex}
            >    
                <span>{props.name}</span>
            </div>

    )
}

export default Button
