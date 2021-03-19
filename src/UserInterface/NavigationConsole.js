import React from 'react';

import ButtonLink from './Buttons/ButtonLink';



function NavigationConsole(props) {



    return (
        <div className={props.classnameWrapper}>
            {
                props.stateNavigationConsole.map( (buttonNav, index) => <ButtonLink
                            to={buttonNav.to}
                            name={buttonNav.name}
                            data={index}
                            onclick={props.onclick}
                            tabIndex={index + 1}
                            key={index}
                            classname={`${props.classname}-${index}`}
                        />
                )
            }

        </div>
    )
}
export default NavigationConsole