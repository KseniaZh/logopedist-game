import React from 'react';

import ButtonLink from '../../UserInterface/Buttons/ButtonLink';

function FinaleTakePrize(props) {

    return (

            <div>
                <div>!!! МО-ЛО-ДЕЦ !!!</div>

                <ButtonLink
                    name='ВЫ-БЕ-РИ  НАГ-РА-ДУ'
                    onclick={props.onclick}
                    classname=''
                    to='/prizeShop'
                />
            </div>

     )
}

export default FinaleTakePrize
