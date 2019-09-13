import React from 'react';
import { connect } from 'react-redux';
import './TodoList.css';
import TodoItem from './TodoItem/TodoItem';

const mapStateToProps = state => {
  return {
    todos: state.todosReducer.todos,
    showTodos: state.todosReducer.showTodos,
    showTodoByType: state.todosReducer.showTodoByType,
  }
}

export default connect(mapStateToProps, null)(({ todos, showTodos, showTodoByType, status }) => {
  let newTodos = [...todos];


  return (
    <div className='TodoList'>
      {newTodos
        .filter(item => status === null ? item : item.checked === status)
        .map(item => <TodoItem key={item.id} {...item} showTodos={showTodos} />)
      }
    </div>
  )
});
