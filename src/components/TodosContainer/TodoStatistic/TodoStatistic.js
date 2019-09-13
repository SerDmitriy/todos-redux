import React from 'react';
import { connect } from 'react-redux';
import './TodoStatistic.css';
import { actions } from '../../../actions/rootActions'

const mapStateToProps = state => {
  return {
    todos: state.todosReducer.todos,
    hasComplited: state.todosReducer.hasComplited
  }
}
const mapDispatchToProps = dispatch => {
  return {
    setTodoShowType: payload => dispatch(actions.A_SetTodoShowTypeSuccess(payload))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(({ todos, hasComplited, setTodoShowType, handleChangeStatus }) => {
  return (
    <div className='statisticItems'>
      <span>{todos.length} items left </span>
      <span>
        <button
          onClick={() => handleChangeStatus(null)}
          type="button">All</button>
        <button
          onClick={() => handleChangeStatus(false)}
          type="button">Active</button>
        <button
          onClick={() => handleChangeStatus(true)}
          type="button">Completed</button>
      </span>
      <span>
        {hasComplited && <button type="button">Clear completed</button>}
      </span>
    </div >
  );
})


