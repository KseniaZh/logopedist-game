import {
    AUTORIZATION_PLAYER,
} from "./types";

const initialState = {
    'player': '',
 };



const stateAuthorization = (state = initialState, action) => {

    switch (action.type) {

        case AUTORIZATION_PLAYER:
            return {
                ...state,
                player: action.payload
            };
        default:
            return state;
    }
}
export default stateAuthorization