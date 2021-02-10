
import React, { useState, useEffect } from 'react';
import cogWheel from "./images/cogWheel2.png"
import './Settings.css'

function NavItem({props, open, setOpen}) {
    useEffect(() => {
        if (open) {
            document.getElementsByClassName("drop-down-wrapper")[0].style.display = "block";
        }
        else {
            document.getElementsByClassName("drop-down-wrapper")[0].style.display = "none";
        }
    }, [open]);

    return (
        <>
            <ul id="top-list">
                <div className="nav-item">
                    <a href="#" onClick={() => setOpen(!open)}>
                        <img src={cogWheel} alt="Cog Wheel" className="web-cog-wheel"></img>
                        <DropDownMenu props={props}/>
                    </a>
                </div>
            </ul>
        </>
    )
}

function DropDownMenu({props}) {
    function DropDownItem({text}) {
        return (
            <div className="dropdown">
                <a href='#' className="menu-item">
                    {text}
                </a>
            </div>
        )
    }

    let propCount = 0;

    return (
        <>
            <div className="drop-down-wrapper">
                {props.map(prop => {
                        propCount++;
                        return <DropDownItem text={prop} key={propCount}></DropDownItem>
                    })}
            </div>
        </>
    );
}

function Settings() {
    const [open, setOpen] = useState(false);
    let props = ["My Profile", "Light and Dark Mode", "Help"];

    return (
        <NavItem props={props} open={open} setOpen={setOpen}>
            <DropDownMenu/>
        </NavItem>
    );
}

export default Settings;