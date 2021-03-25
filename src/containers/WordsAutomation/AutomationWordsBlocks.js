import React from 'react';
import { connect, useSelector } from "react-redux";

import WordBlocks from "./WordBlocks";
import Hi from "../../components/Home/Hi";


function AutomationWordsBlocks(props) {

    const letterSelect = useSelector(state => state.stateLetters.letterSelect);

    return (
        <>
            {
                letterSelect === 'X'?
                    <Hi />
                    : <WordBlocks
                        typeLetter={props.match.params.id}
                    />
            }
        </>   
     )
}

export default connect()(AutomationWordsBlocks)
