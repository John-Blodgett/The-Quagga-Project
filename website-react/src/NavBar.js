import React, { useState, useEffect } from 'react';
import './NavBar.css';
import NavBarComponent from './components/NavBarComponent';
import Todo from './components/Todo.js'
import SortBy from './components/SortBy.js'
import Faq from './Faq'
import About from './About'

function NavBarItems({setRenderedComponent}) {
    const [componentNames, setComponentNames] = useState([
        { name: 'FAQ', state: true },
        { name: 'Personal To-do', state: false },
        { name: 'School To-do', state: false },
        { name: 'Completed', state: false },
        { name: 'About Quagga', state: false }]);

    useEffect(() => {
        for (let component of componentNames) {
            console.log(component);
            if (component.state === true) {
                let comp;
                if (component.name === 'FAQ') {
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
