import React from 'react'
import './NavBarComponent.css'

function NavBarComponent({name, componentNames, setComponentNames}) {

    function changeState() {
        let copyComponents = [...componentNames];
    
        for (let component of copyComponents) {
            if (component.name === name)
                component.state = true;
            else
                component.state = false;
        }
    
        setComponentNames(copyComponents);
    }

    return (
        <>
            <div id="navbar-component" onClick={changeState}>
                {name}
            </div>
        </>
    )
}

export default NavBarComponent;
