import {
    REMOVE_PRIZE,
    LOAD_LOCAL_STORAGE_FLAG_SHOP_PRIZE
} from "./types";

export const removePrizeFromArr = (stateFlagsImagesShop, nameTypeImages, numberImage) => {
    //при выборе приза меняем флаг на true, после этого он не учитывается при прорисовке 

    let stateNew = { ...stateFlagsImagesShop };

    stateNew[nameTypeImages][numberImage] = true;

    localStorage[`${JSON.parse(localStorage['player'])}_flagsImagesShop`] = JSON.stringify(stateNew);

    return {
        type: REMOVE_PRIZE,
        payload: stateNew 
    }
}

export const loadLocalStorageFlagsShopPrize = (data) => {
    //при входе в игру загружаем из localStorage 

    return {
        type: LOAD_LOCAL_STORAGE_FLAG_SHOP_PRIZE,
        payload: data
    }
}
