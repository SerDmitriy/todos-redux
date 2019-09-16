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
      <div className='App'>
        <div className='todos'>todos</div>
        <TodosContainer />
        <div className='additionalOne'></div>
        <div className='additionalTwo'></div>
        <div className='footer'>
          <div>Double-click to edit a todo</div>
          <div>Created by <b>petehunt</b></div>
          <div>Part of <b>TodoMVC</b></div>
        </div>
      </div>
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
