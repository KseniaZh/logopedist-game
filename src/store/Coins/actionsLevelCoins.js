import {
    BOX_COINS_DEPOSIT,
    LOAD_FROM_LOCAL_STORAGE_BOX_COINS,
    FLAG_GET_PRIZE,
    LOAD_FROM_LOCAL_STORAGE_GET_PRIZE

} from "./types";

export const boxCoinsDeposit = (box, letter, coin) => {
    //����� ����������� ������ � ����� � ������� ������ ������� 

    let boxNew = { ...box };

    boxNew[letter].push(coin);

    localStorage[`${JSON.parse(localStorage['player'])}_boxCoinsLetter`] = JSON.stringify(boxNew);

    return {
        type: BOX_COINS_DEPOSIT,
        payload: boxNew
    }
}

export const loadLocalStorageBoxCoinsDeposit = (data) => {
    //��� ����� � ���� ��������� �� localStorage 
    let dataLoad = { ...data };
    console.log('dataLoad ', dataLoad)
    return {
        type: LOAD_FROM_LOCAL_STORAGE_BOX_COINS,
        payload: dataLoad
    }
}
export const flagGetPrizeInShop = (flag) => {
    //����� ����������� ������ ����� �������� ����� �� ����� ������� � �������� ������
    // ����� ������ ������� ����� ��������

    localStorage[`${JSON.parse(localStorage['player'])}_flagGetPrize`] = JSON.stringify(flag);

    return {
        type: FLAG_GET_PRIZE,
        payload: flag
    }
}

export const loadLocalStorageFlagGetPrize = (data) => {
    //��� ����� � ���� ��������� �� localStorage 

    return {
        type: LOAD_FROM_LOCAL_STORAGE_GET_PRIZE,
        payload: data
    }
}
