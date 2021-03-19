import React from 'react';
import Button from '../../UserInterface/Buttons/Button';


function PrizeShopBlock(props) {
    
    return(
        <div>

            <div
                style={{ backgroundImage: `url(${props.bannersBlocks})` }}
            >
               
            </div>
            <div>
            {
                    props.arrImages.map((imagePrize, index) => {
                        if (props.arrFlagsImagesShop[index] === false) {
                            return <Button
                                        key={index}
                                        data={props.keyBlock}
                                        data2={index}
                                        nameImage=''
                                        classname='priz'
                                        onclick={props.onclick}
                                        to={props.to}
                                        name={index + 1}
                                    />
                        }
                        return null
                })
            }
            </div>
            <div></div>
        </div>

    )
}

export default PrizeShopBlock
