import React, { useState, useEffect } from 'react';
import NavBarComponent from './components/NavBarComponent';
import SortBy from './components/SortBy.js';
import Faq from './Faq';
import About from './About';
import Login from './login/Login';
import Todo from './pages/Todo/Todo.js';
import Faq from '../src/pages/Faq/Faq';
import About from '../src/pages/About/About';
import './NavBar.css';

function NavBarItems({setRenderedComponent}) {
    const [componentNames, setComponentNames] = useState([
        { name: 'Login', state: true },
        { name: 'FAQ', state: false },
        { name: 'Personal To-do', state: false },
        { name: 'School To-do', state: false },
        { name: 'Completed', state: false },
        { name: 'About Quagga', state: false }]);

    useEffect(() => {
        for (let component of componentNames) {
            if (component.state === true) {
                let comp;
                if (component.name === 'Login') {
                    comp = <Login key={1}/>;
                }
                else if (component.name === 'FAQ') {
                    comp = <Faq key={1}/>;
                }
                else if (component.name === 'Personal To-do') {
                    comp = <Todo key={1}/>;
                }
                else if (component.name === 'School To-do') {
                    comp = <Todo key={1}/>;
                }
                else if (component.name === 'Completed') {
                    comp = <Todo key={1}/>;
                }
                else if (component.name === 'About Quagga') {
                    comp = <About key={1}/>;
                }
                
                setRenderedComponent(comp);
            }
        }
    }, [componentNames]);

    return componentNames.map((comp, idx) => { return <NavBarComponent
        key={idx} name={comp.name}
        componentNames={componentNames}
        setComponentNames={setComponentNames} /> });
}

function NavBar({setRenderedComponent}) {
    return (
        <>
            <div id="web-navbar-master">
                <NavBarItems setRenderedComponent={setRenderedComponent}/>
            </div>
        </>
    );
}

export default NavBar;
