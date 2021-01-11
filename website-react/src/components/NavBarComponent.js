import React from 'react'
import './NavBarComponent.css'

function NavBarComponent({name}) {
    return (
        <>
            <div id="navbar-component">
                {name}
            </div>
        </>
    )
}

export default NavBarComponent;
