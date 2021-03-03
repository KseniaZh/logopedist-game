import React from 'react';
import { connect, useSelector } from "react-redux";

import WordBlocks from "../../components/WordsAutomation/WordBlocks";
import TypesLettersWords from "./TypesLettersWords";


function AutomationWordsBlocks(props) {

    const letterSelect = useSelector(state => state.stateLetters.letterSelect);

    return (
        <>
            {
                letterSelect === 'X'?
                    <TypesLettersWords />
                    : <WordBlocks
                        typeLetter={props.match.params.id}
                    />
            }
        </>   
     )
}

export default connect()(AutomationWordsBlocks)
