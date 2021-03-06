import {
    AUTORIZATION_PLAYER

} from "./types";

export const autorizationPlayer = (namePlayer) => {

    return {
        type: AUTORIZATION_PLAYER,
        payload: namePlayer
    }
}

