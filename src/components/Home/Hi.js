import React from 'react';
import TypesLetters from '../../containers/Automation/TypesLetters';
import TypesLettersWords from '../../containers/WordsAutomation/TypesLettersWords';

function Hi(props) {

    return(

        <div
            className='home-hi'
        >
            <TypesLetters />
            <TypesLettersWords />

        </div>
  
    )
}

export default Hi