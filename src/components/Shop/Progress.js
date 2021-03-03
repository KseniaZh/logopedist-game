import React from 'react';

function Progress(props) {


    return (
        <div className="">

            <div>{props.nameBlock}</div>
            <div>
                {
                    props.arrImages.map((imagePrize, index) => {
                        if (props.arrFlagsImagesShop[index] === true) {
                            return <div
                                        key={index}
                                        nameImage={imagePrize}
                                        className='priz-Window-Blind'
                                        style={{ backgroundImage: `url(${imagePrize})`}}
                                    ></div>
                        }
                        return null
                    })
                }
            </div>
        </div>

    )
}

export default Progress
