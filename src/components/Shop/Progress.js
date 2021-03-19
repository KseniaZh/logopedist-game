import React from 'react';

function Progress(props) {


    return (
        <div className="">

            <div
                style={{ backgroundImage: `url(${props.bannersBlocks})`, width: '15%' }}
            >
               
            </div>
            <div>
                {
                    props.arrImages.map((imagePrize, index) => {
                        if (props.arrFlagsImagesShop[index] === true) {
                            return <div
                                        key={index}
                                        nameImage={imagePrize}
                                        className='priz-progress'
                                        style={{ backgroundImage: `url(${imagePrize})` }}
                                    ></div>
                        }
                        return null
                    })
                }
            </div>
            <div></div>
        </div>

    )
}

export default Progress
