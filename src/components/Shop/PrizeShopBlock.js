import React from 'react';
import Button from '../../UserInterface/Buttons/Button';


function PrizeShopBlock(props) {
    
    return(
        <div className="">

            <div>{props.nameBlock}</div>
            <div>
            {
                    props.arrImages.map((imagePrize, index) => {
                        if (props.arrFlagsImagesShop[index] === false) {
                            return <Button
                                        key={index}
                                        data={props.keyBlock}
                                        data2={index}
                                        nameImage={imagePrize}
                                        classname='priz-Window-Blind'
                                        onclick={props.onclick}
                                        to={props.to}

                                    />
                        }
                        return null
                })
            }
            </div>
        </div>

    )
}

export default PrizeShopBlock
