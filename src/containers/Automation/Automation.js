

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import TypesLetters from './TypesLetters';
import AutomationButtonsBlocks from './AutomationButtonsBlocks';


function Automation(props) {


    return(

        <div className="automation-wrapper">

            <Switch>
                <Route exact path="/automation" component={TypesLetters} />
                <Route path="/automation/:id?/:name?" component={AutomationButtonsBlocks} />
            </Switch>
   
        </div>

    )
}

export default Automation
