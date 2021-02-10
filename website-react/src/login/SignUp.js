import React from 'react';
import './SignUp.css';

const SignUp = () => {
    return (
        <div className="signUpFrame">
            <div className="background">
                <div className="title">Join Quagga</div>
            </div>
            <div className="signUpContent">
                <div className="inputLabel">Email:</div>
                <input className="input" />
                <div className="inputLabel" id="passwordLabel">Password:</div>
                <input className="input" />
                <button id="signUpButton" >Sign Up</button>
            </div>
        </div>
    );

};

export default SignUp;

// NOTE: classnames need to be WAAAAAAAAAY more descriptive to avoid overlap w other components


