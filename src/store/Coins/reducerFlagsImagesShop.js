import {
    REMOVE_PRIZE,
} from "./types";


const initialState = {
    'dinosaur': [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, ],
    'dogs': [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false,],
    'dolls': [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false,],
    'princess': [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false,], 
    'unicorns': [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false,],
 };



const stateFlagsImagesShop = (state = initialState, action) => {

    switch (action.type) {

        case REMOVE_PRIZE:
            return action.payload

        default:
            return state;
    }
}
export default stateFlagsImagesShop