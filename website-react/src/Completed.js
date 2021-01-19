import React from 'react';
//import ReactDOM from 'react-dom';
import './Completed.css';
import logo from './Logo.png';
//import zebra from './Zebra 5.png'

console.log(logo);
function Header() {
  return(
  <div id = "web-header-master">
      <div id = "zebra-logo">
      <img src={logo} alt="Logo" />
    </div>
  </div>)
}
function Completed() {
    return(
    <>
      <h1 style={{textAlign: "center"}}>
      Completed Assignments
      </h1>
      <div id = "square">
        <text style={{fontWeight: "bold", fontSize: 25}}>
        Assignment 1 
        </text>
        <br></br>
        <br></br>
        <br></br>
        <text>
        Due xx/xx 
        </text>
      </div>
      <div id = "square2">
        <text style={{fontWeight: "bold", fontSize: 25}}>
        Assignment 2
        </text>
        <br></br>
        <br></br>
        <br></br>
        Due xx/xx
      </div>
      <div id = "square3">
        <text style={{fontWeight: "bold", fontSize: 25}}>
        Assignment 3 
        </text>
        <br></br>
        <br></br>
        <br></br>
        Due xx/xx
      </div>
      <div id = "square4">
        <text style={{fontWeight: "bold", fontSize: 25}}>
        Assignment 4 
        </text>
        <br></br>
        <br></br>
        <br></br>
        Due xx/xx
      </div>
      <div id = "square5">
        <text style={{fontWeight: "bold", fontSize: 25}}>
        Assignment 5 
        </text>
        <br></br>
        <br></br>
        <br></br>
        Due xx/xx
      </div>
    </>
    );
  }
  
  function Page() {
    return (
      <>
      <Header />
        <Completed/>
      </>
    );
  }
  export default Page;
