import React from 'react';
import './Header.css';
import logo from './Logo.png';

function Header() {
  return (
    <>
        <div>
            <div id="web-header-logo">
                <img src={logo} alt="Quagga Logo"></img>
            </div>
            <div id="web-header-title">
                Quagga
            </div>
        </div>
    </>
  );
}

export default Header;
