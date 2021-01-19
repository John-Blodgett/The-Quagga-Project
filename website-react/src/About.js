import React from 'react';
//import ReactDOM from 'react-dom';
import './About.css';
//import zebra from './Zebra 5.png'
//import Todo from './components/Todo.js'
//import SortBy from './components/SortBy.js'

function About() {
  return(
  <>
    <h1 style={{textAlign: "center"}}>
    About Quagga
    </h1>
    <div class  = "Titles">
    <p style={{textAlign: "left"}}>
        <text style={{fontWeight: "bold",textDecorationLine: "underline", fontSize: 25}}>
        Who We Are 
        </text>
        <br/><br/>
        <div class = "info">
          <text>
            We are California Polytechnic University of San Luis Obispo students.
          </text>
        </div>
        <br/><br/>
        <text style={{fontWeight: "bold",textDecorationLine: "underline", fontSize: 25}}>
        What Quagga Is 
        </text>
        <br/><br/>
        <div class = "info">
          <text>
            Quagga is an organizer to-do list for canvas that is meant to make the student experience simple and more pleasant.
          </text>
        </div>
        <br/><br/>
        <text style={{fontWeight: "bold",textDecorationLine: "underline", fontSize: 25}}>
        Our Goal 
        </text>
        <br/><br/>
        <div class = "info">
          <text>
            We want to make the online learning experience for students as easy of a transition as possible.
          </text>
        </div>
        <br/><br/>
    </p>
    </div>
  </>
  );
}

function Page() {
  return (
    <>
      <About />
    </>
  );
}
export default Page;
