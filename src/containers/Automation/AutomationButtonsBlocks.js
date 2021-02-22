import React from 'react';
import { connect, useSelector } from "react-redux";

import AutomationBlocks from "../../components/Automation/AutomationBlocks";
import TypesLetters from "./TypesLetters";


function AutomationButtonsBlocks(props) {

    const letterSelect = useSelector(state => state.stateLetters.letterSelect);

    return (
        <>
            {
                letterSelect === 'X'?
                    <TypesLetters />
                    : <AutomationBlocks
                        typeLetter={props.match.params.id}
                    />
            }
        </>   
     )
}

export default connect()(AutomationButtonsBlocks)
