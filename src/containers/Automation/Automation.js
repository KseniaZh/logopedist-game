import React from 'react';
import { Switch, Route } from 'react-router-dom';

import TypesLetters from './TypesLetters';
import AutomationButtonsBlocks from '../../containers/Automation/AutomationButtonsBlocks';




function Automation (props){

    return(

        <div className="automation-wrapper">
            Automation
            <Switch>
                <Route exact path="/automation" component={TypesLetters} />
                <Route path="/automation/:id?/:name?" component={AutomationButtonsBlocks} />
            </Switch>


             
        </div>

    )
}

export default Automation
