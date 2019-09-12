import React from 'react';
import { connect } from 'react-redux';
import './TodoList.css';
import TodoItem from './TodoItem/TodoItem';

const mapStateToProps = state => {
  return {

    todos: state.todosReducer.todos,
    showTodos: state.todosReducer.showTodos
  }
}

export default connect(mapStateToProps, null)(({ todos, showTodos }) => {
  return (
    <div>
      {todos.map( item => <TodoItem key={item.id} item={item} showTodos={showTodos}/>)}
    </div>
  )
});
