import React, { useState, useEffect } from 'react';


import Hi from '../../components/Home/Hi';
import News from '../../components/Home/News';
import Preview from '../../components/Home/Preview';


function Home(props) {


    const previewItems = [
        {
            headerItems: 'Буква А ',
            say: "Буква А ",
            textItems: 'Автоматизация буквы А'
        },
        {
            headerItems: 'Буква О ',
            say: "Буква О ",
            textItems: 'Автоматизация буквы О'
        },
        {
            headerItems: 'Буква Е ',
            say: "Буква Е ",
            textItems: 'Автоматизация буквы СЕ'
        },
        {
            headerItems: 'Буква У ',
            say: "Буква У ",
            textItems: 'Автоматизация буквы У'
        },
        {
            headerItems: 'Буква И ',
            say: "Буква И ",
            textItems: 'Автоматизация буквы И'
        },
        {
            headerItems: 'Буква Э ',
            say: "Буква Э ",
            textItems: 'Автоматизация буквы Э'
        },
        {
            headerItems: 'Буква С ',
            say: "Буква С ",
            textItems: 'Автоматизация буквы С'
        },
        {
            headerItems: 'Буква С ',
            say: "Буква С ",
            textItems: 'Автоматизация буквы С'
        },
        {
            headerItems: 'Буква С ',
            say: "Буква С ",
            textItems: 'Автоматизация буквы С'
        },
        {
            headerItems: 'Буква С ',
            say: "Буква С ",
            textItems: 'Автоматизация буквы С'
        },
        {
            headerItems: 'Буква С ',
            say: "Буква С ",
            textItems: 'Автоматизация буквы С'
        },
        {
            headerItems: 'Буква С ',
            say: "Буква С ",
            textItems: 'Автоматизация буквы С'
        },
        {
            headerItems: 'Буква С ',
            say: "Буква С ",
            textItems: 'Автоматизация буквы С'
        },
        {
            headerItems: 'Буква С ',
            say: "Буква С ",
            textItems: 'Автоматизация буквы С'
        },
        {
            headerItems: 'Буква Я ',
            say: "Буква Я ",
            textItems: 'Автоматизация буквы Я'
        },
        {
            headerItems: 'КОНЕЦ ',
            say: "Буква С ",
            textItems: 'Автоматизация буквы С'
        },
        {
            headerItems: 'Буква И ',
            say: "Буква И ",
            textItems: 'Автоматизация буквы И'
        },
        {
            headerItems: 'Буква Э ',
            say: "Буква Э ",
            textItems: 'Автоматизация буквы Э'
        },
        {
            headerItems: 'Буква С ',
            say: "Буква С ",
            textItems: 'Автоматизация буквы С'
        },
        {
            headerItems: 'Буква С ',
            say: "Буква С ",
            textItems: 'Автоматизация буквы С'
        },
        {
            headerItems: 'Буква С ',
            say: "Буква С ",
            textItems: 'Автоматизация буквы С'
        },
        {
            headerItems: 'Буква С ',
            say: "Буква С ",
            textItems: 'Автоматизация буквы С'
        },
        {
            headerItems: 'Буква С ',
            say: "Буква С ",
            textItems: 'Автоматизация буквы С'
        },
        {
            headerItems: 'Буква С ',
            say: "Буква С ",
            textItems: 'Автоматизация буквы С'
        },
        {
            headerItems: 'Буква С ',
            say: "Буква С ",
            textItems: 'Автоматизация буквы С'
        },
        {
            headerItems: 'Буква С ',
            say: "Буква С ",
            textItems: 'Автоматизация буквы С'
        },
        {
            headerItems: 'Буква Я ',
            say: "Буква Я ",
            textItems: 'Автоматизация буквы Я'
        },
        {
            headerItems: 'КОНЕЦ ',
            say: "Буква С ",
            textItems: 'Автоматизация буквы С'
        },
    ]


    return(
        <div className='home'>
            <Hi
                classname='home-hi'
            />
            <News
                classname='home-news'
            />
            <Preview
                classname='home-preview'
                previewItems={previewItems}
            />

        </div>
    )
}

export default Home