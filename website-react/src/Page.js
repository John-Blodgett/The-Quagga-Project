import React, { useState } from 'react';
//import ReactDOM from 'react-dom';
import './Page.css';
import Todo from './components/Todo.js'
import SortBy from './components/SortBy.js'
import CustomTask from './components/CustomTask.js'

function Faq() {
  return(
  <>
    <h1 style={{textAlign: "center"}}>
    FAQ
    </h1>
    <p style={{textAlign: "left"}}>
      <ul>
        <strong>Q</strong>: I have no assignments listed! <br/><br/>
        <strong>A</strong>: If properly logged in, there may just be no assignments on your Canvas.
        <br/><br/><br/>
        <strong>Q</strong>: I have no assignments listed! <br/><br/>
        <strong>A</strong>: If properly logged in, there may just be no assignments on your Canvas.
        <br/><br/><br/>
        <strong>Q</strong>: I have no assignments listed! <br/><br/>
        <strong>A</strong>: If properly logged in, there may just be no assignments on your Canvas.
        <br/><br/><br/>
        <strong>Q</strong>: I have no assignments listed! <br/><br/>
        <strong>A</strong>: If properly logged in, there may just be no assignments on your Canvas.
        <br/><br/><br/>
        <strong>Q</strong>: I have no assignments listed! <br/><br/>
        <strong>A</strong>: If properly logged in, there may just be no assignments on your Canvas.
      </ul>
    </p>
  </>
  );
}

//How to implement as a button/something to make it pop in and out of view?
function Page() {
  /* function faqClick(e) {
    this.setState(true);
  } */
  return (
    <>
      <Faq />
      {/* <CustomTask /> */}
    </>
  );
}


export default Page;
