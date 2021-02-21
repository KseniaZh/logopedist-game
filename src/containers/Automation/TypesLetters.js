import React from 'react';
import { NavLink } from 'react-router-dom';

const phones = [
    { type: 1, name: "а" },
    { type: 2, name: "б" },
    { type: 2, name: "В" },
    { type: 2, name: "Г" },
    { type: 2, name: "Д" },
    { type: 1, name: "е" },
    { type: 1, name: "ё" },
    { type: 2, name: "ж" },
    { type: 2, name: "з" },
    { type: 1, name: "и" },
    { type: 2, name: "к" },
    { type: 2, name: "л" },
    { type: 2, name: "м" },
    { type: 2, name: "н" },
    { type: 1, name: "о" },
    { type: 2, name: "п" },
    { type: 2, name: "р" },
    { type: 2, name: "с" },
    { type: 2, name: "т" },
    { type: 1, name: "у" },
    { type: 2, name: "ф" },
    { type: 2, name: "ц" },
];


function TypesLetters (props) {

    return(
    <div>
        <h2>Выберите букву</h2>
        <ul>
            {
                    phones.map((item, index) => {

                        if (item.type === 1) {
                            return <li key={index + "TypesLetters"}>
                                        <NavLink to={`/automation/${item.type}/${item.name}/LevelBlock_1`}>{item.name}</NavLink>
                                    </li>
                        } else if (item.type === 2) {
                            return <li key={index + "TypesLetters"}>
                                        <NavLink to={`/automation/${item.type}/${item.name}/LevelBlock_1`}>{item.name}</NavLink>
                                    </li>
                        }
                    
                })
            }
        </ul>
    </div>
    )
}


export default TypesLetters

