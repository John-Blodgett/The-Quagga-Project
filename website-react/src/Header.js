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
                <Settings />
            </div>
        </div>
    </>
  );
}

export default Header;
