import React from 'react';
import { connect } from 'react-redux';
import './TodoStatistic.css';
import { actions } from '../../../actions/rootActions'

const mapStateToProps = state => {
  return {
    todos: state.todosReducer.todos
  }
}
const mapDispatchToProps = dispatch => {
  return {
    clearTodo: payload => dispatch(actions.A_EditTodoClear(payload))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(({ todos }) => (
    <React.Fragment>
      <span>{todos.length} items left </span>
      <button type="button">All</button>
      <button type="button">Active</button>
      <button type="button">Completed</button>
      <button type="button">Clear completed</button>
    </React.Fragment>
  )
);
