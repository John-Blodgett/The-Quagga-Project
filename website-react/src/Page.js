import React from 'react';
import './Page.css';
import Todo from './components/Todo.js'
import SortBy from './components/SortBy.js'

function Page() {
  return (
    <>
      {/* if personal-todo-component.on then
      <PersonalTodo />
      elseif todo-component.on then */}
      <Todo />
      {/* <SortBy /> */}
    </>
  );
}

export default Page;
