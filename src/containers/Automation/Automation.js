

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../Home/Home';
import AutomationButtonsBlocks from './AutomationButtonsBlocks';


function Automation(props) {


    return(

        <div className="automation-wrapper">

            <Switch>
                <Route exact path="/automation" component={Home} />
                <Route path="/automation/:id?/:name?" component={AutomationButtonsBlocks} />
            </Switch>
   
        </div>

    )
}

export default Automation
