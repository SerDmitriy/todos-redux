import React from 'react';
import { connect } from 'react-redux';
import './TodosContainer.css';
import AddTodo from './AddTodo/AddTodo';
import TodoList from './TodoList/TodoList';
import TodoStatistic from './TodoStatistic/TodoStatistic';

export default (() =>
  <React.Fragment>
    <AddTodo />
    <TodoList />
    <TodoStatistic />
  </React.Fragment>
);
