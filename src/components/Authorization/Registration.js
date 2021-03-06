import React from 'react';
import InputAuth from '../../UserInterface/Input/InputAuth';

function Registration (props){
    
    return(

        <div className="">
            <div>КАК ТЕ-БЯ ЗО-ВУТ ?</div>

            <InputAuth
                label="ТВОЁ ИМЯ"
                id='inputRegistration'
                type='text'
                placeholder='НА-ПИ-ШИ'
                onchange={props.onchange}
                onclick={props.onclick}
                value={props.value}
                autofocus='true'
                autoComplete='off'
                style={props.styles}
                name='ИГ-РАТЬ'
            />

        </div>

    )
}

export default Registration
