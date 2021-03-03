import React from 'react';

import everest from '../../img/dinosaur/dinosaur2.jpg';

const WindowBlind = props => {

    const arrLetter = Object.keys(props.finalLetter); //массив букв
    const arrFlags = Object.values(props.finalLetter); //массив флагов

    return (
        <div
            className={props.classname}
            onClick={props.onclick}
        >
            {
                arrFlags.map((flag, index) => {
                    if (flag === true) {
                        return <div
                            key={index}
                            className='letters-Window-Blind'
                            
                        >
                            {arrLetter[index]} : <div
                                className='priz-Window-Blind'
                                style={{
                                    backgroundImage: `url(${everest})`
                                }}>
                                </div>
                        </div>
                    }
                })
            }
        </div>
    )
}

export default WindowBlind

//<img src={everest} alt='логотип компании' />