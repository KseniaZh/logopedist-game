import React from 'react';
import ButtonLink from '../../UserInterface/Buttons/ButtonLink';


function TakePrize(props) {
    
    return(
        <div className={props.classname}>
            <div>
            {
                props.flagWarning ?
                    <ButtonLink
                        to='/'
                        name='ПРИЗ НА-ДО ЗА-РА-БО-ТАТЬ'
                        onclick={props.onclick}
                        classnameButtonLink={props.classnameWrapper}
                    />
                    : <ButtonLink
                        to='/'
                        nameImage={props.nameImage}
                        classname={props.classname}
                        onclick={props.onclick}
                        classnameButtonLink={props.classnameWrapper}
                        classname={props.classnamePrize}
                    />
                }
                </div>
        </div>

    )
}

export default TakePrize
