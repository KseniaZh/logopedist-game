import {
    LETTERS_SELECT,

} from "./types";

export const selectingLetter = (data) => {
    //����� ����� ��� ������������� � ������ 

    return {
        type: LETTERS_SELECT,
        payload: data
    }
};

