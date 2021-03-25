import React from 'react';
import { connect, useSelector } from "react-redux";

import AutomationBlocks from "./AutomationBlocks";
import Home from "../Home/Home";


function AutomationButtonsBlocks(props) {

    const letterSelect = useSelector(state => state.stateLetters.letterSelect);

    return (
        <>
            {
                letterSelect === 'X'?
                    <Home />
                    : <AutomationBlocks
                        typeLetter={props.match.params.id}
                    />
            }
        </>   
     )
}

export default connect()(AutomationButtonsBlocks)
