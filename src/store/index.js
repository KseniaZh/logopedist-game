import { combineReducers } from "redux";

import stateUrl from "./Url/reducerUrl";
import stateLevelCompleted from './LevelCompleted/reducerLevelCompl';
import stateLevelFinal from './LevelCompleted/reducerLevelFinal';
import stateLevelCoins from './Coins/reducerLevelCoins';
import stateLettersBlocks from './LettersBlocks/reducerLettersBlocks';
import stateLetters from './LettersBlocks/reducerLetters';
import stateFinalLetter from './LevelCompleted/reducerFinalLetter';
import stateButtonBlockFinal from './LevelCompleted/reducerButtonBlockFinal';
import stateLevelEnd from './Coins/reducerLetterEnd';
import stateImages from './Coins/reducerImages';
import stateFlagsImagesShop from './Coins/reducerFlagsImagesShop';
import stateWords from './LettersBlocks/reducerWords';
import stateLevelWordsFinal from './LevelCompleted/reducerLevelWordsFinal';
import stateFinalLetterWords from './LevelCompleted/reducerFinalLetterWords';


const rootReducer = combineReducers({
    stateUrl,
    stateLevelCompleted,
    stateLevelFinal,
    stateLevelCoins,
    stateLettersBlocks,
    stateLetters,
    stateFinalLetter,
    stateButtonBlockFinal,
    stateLevelEnd,
    stateImages,
    stateFlagsImagesShop,
    stateWords,
    stateLevelWordsFinal,
    stateFinalLetterWords
})

export default rootReducer