import React from 'react';
import { connect } from 'react-redux';
import './TodoList.css';
import TodoItem from './TodoItem/TodoItem';

const mapStateToProps = state => {
  return {
    todos: state.todosReducer.todos
  }
}

export default connect(mapStateToProps, null)(({ todos }) => {
  return (
    <React.Fragment>
      {todos.map( item => <TodoItem key={item.id} item={item} />)}
    </React.Fragment>
  )
});
