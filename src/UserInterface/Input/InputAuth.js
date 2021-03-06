import React, { useEffect, useRef } from 'react';
import Button from '../Buttons/Button';

function InputAuth(props){
    
    const ref = useRef(props.value);
    const autoFocus = props.autofocus;
    const nameInput = props.id;


    useEffect(() => {
        if (autoFocus === true) {
            ref.current.focus();
        }
    }, []);
        
    return(
        <div>
        
            <label 
                    htmlFor={props.id}
            >
                {props.label}
            </label>
        
            <input
                id={props.id}
                type={props.type}
                placeholder={props.placeholder}
                onChange={(event) => props.onchange(event, nameInput)}
                value={props.value}
                tabIndex={props.tabindex}
                disabled={props.disabled}
                ref={ref}
                autoComplete='off'
                style={props.styles}
            />

            <Button
                onclick={props.onclick}
                name={props.name}
            />
            
        </div>
    )
}

export default InputAuth