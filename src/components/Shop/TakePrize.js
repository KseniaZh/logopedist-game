import React from 'react';
import ButtonLink from '../../UserInterface/Buttons/ButtonLink';


function TakePrize(props) {
    
    return(
        <div className='take-prize-wrapper'>
            <div>
            {
                props.flagWarning ?
                    <ButtonLink
                        to='/'
                        name='ПРИЗ НА-ДО ЗА-РА-БО-ТАТЬ'
                        onclick={props.onclick}
                        classnameButtonLink='take-prize-warning'
                        classname='prize-shop-warning-button'
                    />
                    : <ButtonLink
                        to='/'
                        nameImage={props.nameImage}
                        onclick={props.onclick}
                        classnameButtonLink='take-prize'
                        classname='priz-take-prize'
                        
                    />
                }
                </div>
        </div>

    )
}

export default TakePrize
