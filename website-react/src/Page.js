import React, { useState } from 'react';
//import ReactDOM from 'react-dom';
import './Page.css';
import Todo from './components/Todo.js'
import SortBy from './components/SortBy.js'

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
<<<<<<< HEAD
=======
      <button>
        FAQ
      </button>
      <Faq />
>>>>>>> 6494f934380e79a254e6389be71072fef3f8af95
    </>
  );
}
/* if personal-todo-component.on then
     <PersonalTodo />
     elseif todo-component.on then
     <Todo /> 
     */


export default Page;
