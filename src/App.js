import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import TodosContainer from './components/TodosContainer/TodosContainer';
import { actions } from './actions/rootActions'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <React.Fragment>
        <div>todos</div>
        <TodosContainer />
        <div>footer info </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todosReducer.todos
  }
}

const mapDispatchToProps = dispatch => {
  return { 
    addTodo: payload => dispatch(actions.A_AddTodoSuccess(payload)),
    removeTodo: payload => dispatch(actions.A_RemoveTodoSuccess(payload))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
