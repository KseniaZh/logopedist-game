import { combineReducers } from "redux";

import stateUrl from "./Url/reducerUrl";
import stateLevelCompleted from './LevelCompleted/reducerLevelCompl';
import stateLevelFinal from './LevelCompleted/reducerLevelFinal';
import stateLevelCoins from './Coins/reducerLevelCoins';
import stateLettersBlocks from './LettersBlocks/reducerLettersBlocks';
import stateLetters from './LettersBlocks/reducerLetters';
import stateFinalLetter from './LevelCompleted/reducerFinalLetter';
import stateButtonBlockFinal from './LevelCompleted/reducerButtonBlockFinal';


const rootReducer = combineReducers({
    stateUrl,
    stateLevelCompleted,
    stateLevelFinal,
    stateLevelCoins,
    stateLettersBlocks,
    stateLetters,
    stateFinalLetter,
    stateButtonBlockFinal
})

export default rootReducer