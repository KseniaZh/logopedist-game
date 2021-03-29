import React, { useEffect } from 'react';

import ButtonLink from '../../UserInterface/Buttons/ButtonLink';

function FinaleTakePrize(props) {

    useEffect(() => {
        return () => {
            props.onclick();
        }
    }, [])

    return (

            <div
                className="finale-take-prize"
            >
                <div>
                    <div>!!! МО-ЛО-ДЕЦ !!!</div>

                    <div>ВЫ-БЕ-РИ  НАГ-РА-ДУ</div>

                    <ButtonLink
                        name='🏆'
                        onclick={props.onclick}
                        classname=''
                        to='/prizeShop'
                    />

                    <div></div>

                </div>
            </div>

     )
}

export default FinaleTakePrize
