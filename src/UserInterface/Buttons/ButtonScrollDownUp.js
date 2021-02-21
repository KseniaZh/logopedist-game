import React, { useState, useEffect } from 'react';


function ButtonScrollDownUp(props) {

    const [flagButtonScroll, setFlagButtonScroll] = useState(false);

    const haveButtonScroll = () => {
        if (document.documentElement.scrollHeight > document.documentElement.clientHeight) {
            setFlagButtonScroll(true);
        }
    } // первично кнопки не видно. появляется при прокрутке

    const buttonScrollStyle = ['buttonScroll'];

    const [scrollDownUp, setScrollDownUp] = useState(false);

    //разворот ракеты:
    if (scrollDownUp) {
        buttonScrollStyle.push('goUp');
        window.scrollTo(0, document.documentElement.scrollHeight);
    } else {
        buttonScrollStyle.push('goDown');
        window.scrollTo(0, 0);
    }

    const hendlerScrollDownUp = () => {
        setScrollDownUp(!scrollDownUp);
    }

    const buttonGoDownUp = () => {

        let down = document.documentElement.scrollHeight - window.pageYOffset;

        if (document.documentElement.clientHeight > down) {
            setScrollDownUp(true);
        }
        if (window.pageYOffset < 5) {
            setScrollDownUp(false);
        }
    }


    const ButtonScroll = () => {
        return <div
                    className={buttonScrollStyle.join(' ')}
                    onClick={hendlerScrollDownUp}
                >
                    <div>
                        {props.nameButton}
                    </div>
                </div>
    }

    useEffect(() => {

        document.addEventListener('scroll', buttonGoDownUp);
        document.addEventListener('scroll', haveButtonScroll);
        return () => {
            document.removeEventListener('scroll', buttonGoDownUp);
            document.removeEventListener('scroll', haveButtonScroll);
        }
    }, [])

    return(

        flagButtonScroll ?
            ButtonScroll()
            : null
            
    )
}

export default ButtonScrollDownUp