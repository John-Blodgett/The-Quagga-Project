import React from 'react';
import closeIcon from "../images/closeIcon.png";
import './Login.css';

const Login = (props) => {
    return (
        <div className="loginFrame">
            <div className="loginBackground">
                <span className="loginCloseIcon" onClick={props.handleClose}>x</span>
                <div className="loginTitle">Quagga</div>
            </div>
            <div className="loginContent">
                <div className="inputLabel">Email:</div>
                <input className="input" />
                <div className="inputLabel" id="passwordLabel">Password:</div>
                <input className="input" />
                <button id="loginButton" >Login</button>
                <button id="loginButtonGoogle" >Google Login</button>
                <div className="horizButtonsDiv">
                    <button className="horizButtons">Sign Up</button>
                    <button className="horizButtons">Forgot Password?</button>
                </div>
               
            </div>
        </div>
    );
};

export default Login;

// NOTES

// Have grey background for page so that white box stands out
// Add zebra striping to quagga header
// Make sign up and forgot password buttons into links instead?
