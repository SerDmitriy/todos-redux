import React from 'react';
import { connect } from 'react-redux';
import './TodoStatistic.css';

class TodoStatistic extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <React.Fragment>
        <span>N items left </span>
        <button type="button">All</button>
        <button type="button">Active</button>
        <button type="button">Completed</button>

        <button type="button">Clear completed</button>
      </React.Fragment>
    );
  }
}


export default TodoStatistic;
const mapStateToProps = state => {
  return {
    todos: state.todosReducer.todos
  }
}

export default connect(mapStateToProps, null)(({ todos }) => {
  return (
    <React.Fragment>
      {todos.map( item => <TodoItem item={item} />)}
    </React.Fragment>
  )
});
