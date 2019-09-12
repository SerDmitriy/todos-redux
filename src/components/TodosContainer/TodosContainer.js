import React from 'react';
import { connect } from 'react-redux';
import './TodosContainer.css';
import AddTodo from './AddTodo/AddTodo';
import TodoList from './TodoList/TodoList';
import TodoStatistic from './TodoStatistic/TodoStatistic';

export default (() =>
  <div className='container'>
    <AddTodo />
    <TodoList />
    <TodoStatistic />
  </div>
);
