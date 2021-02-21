import React from 'react';


function Button(props) {

    const data = props.data;
    
    return(

            <div 
                className= {props.classname}
                onClick={() => props.onclick(data)}
                tabIndex = {props.tabindex}
            >    
                <span>{props.name}</span>
            </div>

    )
}

export default Button
