import {
    BOX_COINS_DEPOSIT

} from "./types";

export const boxCoinsDeposit = (box, letter, coin) => {
    //����� ����������� ������ � ����� � ������� ������ ������� 

    let boxNew = { ...box };

    boxNew[letter].push(coin);

    return {
        type: BOX_COINS_DEPOSIT,
        payload: boxNew
    }
}

