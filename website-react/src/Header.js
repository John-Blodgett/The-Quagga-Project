import React from 'react';
import './Header.css';
import logo from './Logo.png';

function Header() {
  return (
    <>
        <div id="web-header-master">
            <div id="zebra-logo">
                <div id="web-header-logo">
                    <img src={"/Logo.png"} alt="Quagga Logo"></img>
                </div>
                <div id="web-header-title">
                    Quagga
                </div>
            </div>
        </div>
    </>
  );
}

export default Header;
