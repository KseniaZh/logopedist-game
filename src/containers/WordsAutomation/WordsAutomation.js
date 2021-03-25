import React from 'react';
import { Switch, Route } from 'react-router-dom';
import TypesLettersWords from './TypesLettersWords';
import AutomationWordsBlocks from './AutomationWordsBlocks';


function WordsAutomation(props) {


    return(

        <div className="automation-wrapper">
            <Switch>
                <Route exact path="/wordsAutomation" component={TypesLettersWords} />
                <Route path="/wordsAutomation/:id?/:name?" component={AutomationWordsBlocks} />
            </Switch>


             
        </div>

    )
}

export default WordsAutomation
