import { combineReducers } from "redux";

import stateUrl from "./Url/reducerUrl";
import stateLevelCompleted from './LevelCompleted/reducerLevelCompl';
import stateLevelCoins from './Coins/reducerLevelCoins';
import stateLettersBlocks from './LettersBlocks/reducerLettersBlocks';


const rootReducer = combineReducers({
    stateUrl,
    stateLevelCompleted,
    stateLevelCoins,
    stateLettersBlocks,

})

export default rootReducer