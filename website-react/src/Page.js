import React from 'react';
//import ReactDOM from 'react-dom';
import './Page.css';
import Todo from './components/Todo.js'
import SortBy from './components/SortBy.js'
import CustomTask from './components/CustomTask.js'

function Page({renderedComponent}) {
  return (
    <>
      {renderedComponent}
    </>
  );
}


export default Page;
