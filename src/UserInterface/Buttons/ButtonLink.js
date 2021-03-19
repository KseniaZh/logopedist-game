import React from 'react';
import { NavLink } from 'react-router-dom';

function ButtonLink(props) {

    const data1 = props.data1
    const data2 = props.data2;

    return(
        <div>
            <NavLink
                to={props.to}
                className={props.classnameButtonLink}
            > 
                <div 
                    className={props.classname}
                    onClick={() => props.onclick(data1, data2)}
                    tabIndex={props.tabindex}
                    style={{ backgroundImage: `url(${props.nameImage})`}}
                >
                    <span
                        className={props.icon}
                        aria-hidden="true"
                    >
                        {props.name}
                    </span>
                </div>
            </NavLink>
        </div>
    )
}

export default ButtonLink