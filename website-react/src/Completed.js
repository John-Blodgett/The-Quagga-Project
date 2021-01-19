import React from 'react';
//import ReactDOM from 'react-dom';
import './Completed.css';

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
        <Completed/>
      </>
    );
  }
  export default Page;
