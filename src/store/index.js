import { combineReducers } from "redux";

import stateUrl from "./Url/reducerUrl";
import stateLevelCompleted from './LevelCompleted/reducerLevelCompl';
import stateLevelFinal from './LevelCompleted/reducerLevelFinal';
import stateLevelCoins from './Coins/reducerLevelCoins';
import stateLettersBlocks from './LettersBlocks/reducerLettersBlocks';
import stateLetters from './LettersBlocks/reducerLetters';
import stateFinalLetter from './LevelCompleted/reducerFinalLetter';


const rootReducer = combineReducers({
    stateUrl,
    stateLevelCompleted,
    stateLevelFinal,
    stateLevelCoins,
    stateLettersBlocks,
    stateLetters,
    stateFinalLetter,
})

export default rootReducer