import React, { useState, useEffect} from 'react';
import { Redirect } from 'react-router-dom';

function NotFound(props) {

    const [notFound, setNotFound] = useState(<div>Введен неправильный адрес. Страница не найдена. Вы будете перенаправлены на домашнюю страницу.</div>)



    useEffect(() => {
        setTimeout(()=>setNotFound( <Redirect to={`/`} />), 4000);
    }, []);

    return(
        <>
            
            { notFound} 
        </>
    )
}

export default NotFound