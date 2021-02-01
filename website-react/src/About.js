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
            We are California Polytechnic University of San Luis Obispo software engineering students. We created Quagga as our CSC 308 and CSC 309 course project, and have used 
            this as a way to help the community of students and general users alike. Much of this project required extensive research and practice, however we were able to learn 
            quite a lot about languages such as Javascript, css, html, and React in order to make this possible. We are very passionate about bringing simple, useful software that
            all users can quickly learn and access so that we can benefit as many people as possible.  We hope you enjoy Quagga!
          </text>
        </div>
        <br/><br/>
        <text style={{fontWeight: "bold",textDecorationLine: "underline", fontSize: 25}}>
        What Quagga Is 
        </text>
        <br/><br/>
        <div class = "info">
          <text>
            Quagga is an organizer to-do list for canvas that is meant to make the student experience simple and more pleasant. We aimed for a more simplistic design, as we believed
            that going for too much can be overwhelming and that's the last thing you want from a to-do list. We also made sure that Quagga recognized the accomplishments of the user
            by clearly displaying the assignments that have been completed. We at Quagga believe that not enough sites truly portray the work you have done, and often this can cause a list
            to feel never ending and exhausting. So Quagga provides users with a simple and rewarding to-do list that will help guide them through their daily tasks.
          </text>
        </div>
        <br/><br/>
        <text style={{fontWeight: "bold",textDecorationLine: "underline", fontSize: 25}}>
        Our Goal 
        </text>
        <br/><br/>
        <div class = "info">
          <text>
          Our passion is making the student experience as simple as possible,as we all realize how stressful work and organization can be. Our call to action came through the recent
          transition to online schooling due to the global COVID-19 pandemic. This transition has been quite a shock for a large portion of students, and many have struggled to 
          adjust to this new setting. That's where we come in. We want to provide an application to students that can ease their stress and help them thrive. The clutter of online 
          assignments and projects can quite frankly be overwhelming as there is very rarely any organization between classes. So we have provided users with the ability to have
          everything in one location so that what must be done and what has already been done is extremely clear.
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
