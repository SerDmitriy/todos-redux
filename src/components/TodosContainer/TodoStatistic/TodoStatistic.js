import React from 'react';
import { connect } from 'react-redux';
import './TodoStatistic.css';
import { actions } from '../../../actions/rootActions'

const mapStateToProps = state => {
  return {
    todos: state.todosReducer.todos
  }
}

export default connect(mapStateToProps, null)(({ todos }) => {
  return (
    <div className='statisticItems'>
      <span>{todos.length} items left </span>
      <button type="button">All</button>
      <button type="button">Active</button>
      <button type="button">Completed</button>

      <button type="button">Clear completed</button>
    </div>
  );
})


