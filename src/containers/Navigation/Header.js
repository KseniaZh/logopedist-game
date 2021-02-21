import React, { useState } from 'react';
import { connect, useDispatch, useSelector } from "react-redux";

import NavigationConsole from '../../UserInterface/NavigationConsole';
import WindowBlind from '../../UserInterface/WindowBlind';


function Header(props) {

    const stateNavigationConsole = [
        {
            to: '/',
            name: 'Home'
        },
        {
            to: '/products',
            name: 'Products'
         },
         {
             to: '/productsAbout',
             name: 'ProductsAbout'
        },
        {
            to: '/automation',
            name: 'Тренажер автоматизации звуков'
        }
    ]

    const [isOpen, setIsOpen] = useState(false);

    const navStyle = ['Navigation'];

    if (!isOpen) {
        navStyle.push('close');
    };

    const hendlerNavHide = () => {
        setIsOpen(false);
    }
    const hendlerNavShow = () => {
        setIsOpen(true);
    }


    return (
        <header>
            <nav
                onMouseOver={hendlerNavShow}
                onMouseOut={hendlerNavHide}
                onClick={hendlerNavHide}
                className={navStyle.join(' ')}
            >
                <NavigationConsole
                    stateNavigationConsole={stateNavigationConsole}
                    onclick={()=>console.log('click Header NavigationConsole')}
                />
               
                
            </nav>

            {
                isOpen ?
                    <WindowBlind
                        onclick={hendlerNavHide}
                        classname='NavigationWindowBlind'
                    />
                    : null
            }
           

        </header>
    )
}
export default connect()(Header)


//function Header(props) {

//    const dispatch = useDispatch();
//    const login = useSelector(state => state.stateAuthorization.user.login);


//    const [isOpen, setIsOpen] = useState(false);

//    const hendlerNavigationToggle = () => {
//        if (isOpen === false) {
//            dispatch(saveDataStore({}));
//        }
//        setIsOpen(!isOpen);
//    };

//    const navStyle = [stateStylesAll[staleSelect].navigation];
//    if (!isOpen) {
//        navStyle.push("close");
//    };

//    const pages = [
//        {
//            to: '/',
//            name: 'Home'
//        },
//        {
//            to: '/EltypeClass',
//            name: 'EltypeClass'
//        },
//        {
//            to: '/ViewType',
//            name: 'ViewType'
//        }
//    ]
//    // логика всплывающей подсказки спрятана в обертку hoc, 
//    // обертка кнопок и подсказка реализованы в ButtonNavigationSmall и ButtonNavigation
//    const ButtonNavigationSmall = withHoverDescription(ButtonLinkSmall, DescriptionNavigation);
//    const ButtonNavigation = withHoverDescription(ButtonLink, DescriptionNavigation);

//    return (
//        <header>
//            <nav className={navStyle.join(' ')}>

//                <ButtonNavigationSmall
//                    to='/Personalize'
//                    icon="fa fa-user-circle-o"
//                    classname={stateStylesAll[staleSelect].personalizeButton}
//                    name='Personalize'
//                    onclick={() => setIsOpen(false)}
//                    tabindex="-1"
//                    haveDescription={isOpen}
//                    classnameDescription={stateStylesAll[staleSelect].navigationLinkAbout}
//                />
//                {
//                    login === "administrator" ?
//                        <ButtonNavigation
//                            to='/User'
//                            name='User'
//                            onclick={() => setIsOpen(false)}
//                            classname={stateStylesAll[staleSelect].navigationButtonLink}
//                            tabIndex='2'
//                            haveDescription={isOpen}
//                            classnameDescription={stateStylesAll[staleSelect].navigationLinkAbout}
//                        />
//                        : null
//                }
//                {
//                    pages.map((page, index) =>
//                        <ButtonNavigation
//                            to={page.to}
//                            name={page.name}
//                            onclick={() => setIsOpen(false)}
//                            classname={stateStylesAll[staleSelect].navigationButtonLink}
//                            tabIndex={index + 2}
//                            key={index + 2}
//                            haveDescription={isOpen}
//                            classnameDescription={stateStylesAll[staleSelect].navigationLinkAbout}
//                        />)
//                }

//            </nav>

//            {
//                isOpen ?
//                    <NavigationWindowBlind
//                        onclick={() => setIsOpen(false)}
//                        classname={stateStylesAll[staleSelect].navigationWindowBlind}
//                    />
//                    : null
//            }

//            <NavigationToggle
//                openNavigation={hendlerNavigationToggle}
//                isOpen={isOpen}
//                classname={stateStylesAll[staleSelect].navigationToggle}
//            />

//        </header>
//    )
//}
//export default connect()(Header)

