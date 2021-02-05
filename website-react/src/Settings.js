
import React, { useState } from 'react';
import 'react-dropdown/style.css';
import cogWheel from "./cogWheel2.png"
import './Settings.css'

function NavItem(props){
  const [open,setOpen] = useState(false);
  return(
    <ul id = "top-list">
    <div className = "nav-item">
      <a href="#" className = "icon-button" onClick={() => setOpen(!open)}>
      <div id="web-cog-wheel">
        <img src={cogWheel} alt="Quagga Logo"></img>
      </div>
      </a>
      {open && props.children}
    </div>
    </ul>
  )
}
function DropdownMenu(){
  function DropDownItem(props){
    return(
      <ul id = "top-list">
      <a href='#' className = "menu-item">
        {props.children}
      </a>
      </ul>
    )
  }
  return(
    <>
    <div className = "dropdown">
      <DropDownItem>My Profile</DropDownItem>
      <br></br>
    </div>
    <div className = "dropdown">
    <DropDownItem>Light and Dark Mode</DropDownItem>
    <br></br>
    </div>
    <div className = "dropdown">
    <DropDownItem>Help</DropDownItem> 
    </div>
    </>
  );
}
function Settings(){

  return(
    <NavItem>
      <DropdownMenu/>
    </NavItem> 
  );
}
function Page() {
  return (
    <>
      <Settings />
    </>
  );
}
export default Page;