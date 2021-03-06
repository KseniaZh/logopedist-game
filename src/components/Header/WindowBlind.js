﻿import React from 'react';

const WindowBlind = props => {

    const arrLetter = Object.keys(props.letterProgressPrizes); //массив букв
    const arrFlags = Object.values(props.letterProgressPrizes); //массив массивов [false, ["unicorns", 0]]
    const stateImages = props.stateImages;

    //С: [false, ["unicorns", 0]]

    let i = 0;

    return (
        <div
            className={props.classname}
            onClick={props.onclick}
        >
                <div>ТВО-И ПО-БЕ-ДЫ :</div>
                {
                    arrFlags.map((flag, index) => {
                        if (flag[0] === true ||flag[0] === true) {
                            i++;
                            if (i <= 26) {
                                return <div key={index} >

                                            <div>{arrLetter[index]} : </div>
                                            {
                                                flag.map((val, index) => {
                                                    if (index > 0) {
                                                        let prize = stateImages[val[0]][val[1]];

                                                        return <div
                                                            className='priz-progress'
                                                            style={{
                                                                backgroundImage: `url(${prize})`
                                                            }}
                                                            key={index}
                                                        >
                                                        </div>
                                                    } else {
                                                        return null
                                                    }
                                                })
                                            }
                                        </div>
                            }
                        }
                    })
                }
        </div>
    )
}

export default WindowBlind

