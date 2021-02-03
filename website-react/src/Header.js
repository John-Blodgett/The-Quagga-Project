import React from 'react';
import './Header.css';
import logo from './images/Logo.png'
import Settings from './Settings'

function Header() {
  return (
    <>
        <div id="web-header-master">
            <div id="zebra-background">
                <div id="web-header-logo">
                    <img src={logo} alt="Quagga Logo"></img>
                </div>
                <div id="web-header-title">
                    Quagga
                </div>
               
                {/* <div id="web-cog-wheel">
                    <img src={"/cogWheel2.png"} alt="Cog Wheel"></img>
                </div> */}
            </div>
            <Settings />
        </div>
    </>
  );
}

export default Header;
