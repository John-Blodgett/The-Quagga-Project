import React from 'react';
import './NavBar.css';
import NavBarComponent from './components/NavBarComponent';

let componentNames = ['FAQ', 'Personal To-do', 'School To-do', 'Completed', 'About Quagga'];

function NavBarItems() {
  return componentNames.map((name, idx) => {return <NavBarComponent key={idx} name={name} />});
}

function NavBar() {
  return (
    <>
      <div id="web-navbar-master">
        <NavBarItems />
      </div>
    </>
  );
}

export default NavBar;
