import React from 'react';
import { Switch, Route } from 'react-router-dom';


import Home from '../Home/Home';

import Automation from '../Automation/Automation';
import NotFound from '../NotFound/NotFound';

import ButtonScrollDownUp from '../../UserInterface/Buttons/ButtonScrollDownUp';




export const Main = () => {


    return (
        <main>


            <ButtonScrollDownUp
                nameButton="&#128640;"
            />
 
            <Switch>
                <Route exact path='/' component={Home} />

                <Route path='/automation' component={Automation} />

                <Route component={NotFound} />
            </Switch>
        </main>
    )
}