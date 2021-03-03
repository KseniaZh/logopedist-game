import {
    REMOVE_PRIZE,
} from "./types";

export const removePrizeFromArr = (stateFlagsImagesShop, nameTypeImages, numberImage) => {
    //при выборе приза меняем флаг на true, после этого он не учитывается при прорисовке 

    let stateNew = { ...stateFlagsImagesShop };

    console.log('nameTypeImages ', nameTypeImages)
    console.log('numberImage ', numberImage)
    console.log('stateNew ', stateNew)
    stateNew[nameTypeImages][numberImage] = true;


    return {
        type: REMOVE_PRIZE,
        payload: stateNew 
    }
}

