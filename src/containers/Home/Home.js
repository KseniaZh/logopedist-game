import React, { useState, useEffect } from 'react';

import Authorization from '../../containers/Authorization/Authorization';

import News from '../../components/Home/News';



function Home(props) {


    return(
        <div className='home'>

            <Authorization />

            <News
                classname='home-news'
            />


        </div>
    )
}

export default Home