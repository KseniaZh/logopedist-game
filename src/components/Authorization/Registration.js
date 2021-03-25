import React from 'react';
import InputAuth from '../../UserInterface/Input/InputAuth';

function Registration (props){
    
    return(

        <div
            className="registration"
        >
            <div>
                <div>КАК ТЕ-БЯ ЗО-ВУТ ?</div>

                <InputAuth
                    label="НА-ПИ-ШИ СВО-Ё И-МЯ"
                    id='inputRegistration'
                    type='text'
                    placeholder=''
                    onchange={props.onchange}
                    onclick={props.onclick}
                    value={props.value}
                    autofocus='true'
                    autoComplete='off'
                    style={props.styles}
                    name='ИГ-РАТЬ'
                    />
             </div>

        </div>

    )
}

export default Registration
