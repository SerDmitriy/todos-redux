import React from 'react';
import './TodosContainer.css';
import AddTodo from './AddTodo/AddTodo';
import TodoList from './TodoList/TodoList';
import TodoStatistic from './TodoStatistic/TodoStatistic';

class TodosContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      status: null // TODO null, true, false
    }
  }

  handleChangeStatus = status =>  this.setState({ status })

  render () {
    const { status } = this.state

    return (
      <div className='container'>
        <AddTodo />
        <TodoList status={status} />
        <TodoStatistic handleChangeStatus={this.handleChangeStatus} />
      </div>
    )
  }
}

export default TodosContainer
