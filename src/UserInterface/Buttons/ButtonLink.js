import React from 'react';
import { NavLink } from 'react-router-dom';

function ButtonLink(props) {

    const data = props.data;
    
    return(
           
            <div 
                className={props.classname}
                onClick={() => props.onclick(data)}
                tabIndex={props.tabindex}
            >
                <NavLink 
                    to={props.to}
                    className={props.classnameButtonLink}
                    > 
                    <span
                        className={props.icon}
                        aria-hidden="true"
                    >
                        {props.name}
                    </span>
                      

                </NavLink>
            </div>
    )
}

export default ButtonLink