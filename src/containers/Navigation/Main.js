import React from 'react';
import { Switch, Route } from 'react-router-dom';


import Home from '../Home/Home';

import Automation from '../Automation/Automation';
import WordsAutomation from '../WordsAutomation/WordsAutomation';
import PrizeShop from '../Shop/PrizeShop';
import ProgressShop from '../Shop/ProgressShop';
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

                <Route path='/wordsAutomation' component={WordsAutomation} />

                <Route path='/prizeShop' component={PrizeShop} />

                <Route path='/progress' component={ProgressShop} />

                <Route component={NotFound} />
            </Switch>
        </main>
    )
}
