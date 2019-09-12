import React from 'react';
import { connect } from 'react-redux';
import './TodoItem.css';
import { actions } from '../../../../actions/rootActions';


class TodoItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { item, showTodos, removeTodo, checkedTodo } = this.props;
    let classNameSpan = '';
    // if (showTodos === 'checked' && !item.checked) { return null }
    // if (showTodos === 'unChecked' && !item.checked) { return null } /// add but no replace className
    if (showTodos === 'all' && item.checked) {classNameSpan = ' darkgray'} else { classNameSpan = ' silver'}
    return (
      <React.Fragment>
        <div className='todoItem'>
          <input
            type='radio'
            name={item.value}
            className='inputChecked'
            defaultChecked={item.checked}
            onClick={() => checkedTodo(item)}/>
          <span className={classNameSpan}>{item.value}</span> 
          <button
            type='button'
            className='delBtn'
            onClick={() => removeTodo(item)}
          > X </button>
        </div>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    removeTodo: payload => dispatch(actions.A_RemoveTodoSuccess(payload)),
    checkedTodo: payload => dispatch(actions.A_CheckedTodoSuccess(payload))
  }
}

export default connect(null, mapDispatchToProps)(TodoItem);
