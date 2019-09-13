import React from 'react';
import { connect } from 'react-redux';
import './TodoItem.css';
import { actions } from '../../../../actions/rootActions';


class TodoItem extends React.Component {

  render() {
    const { id, value, checked, removeTodo, checkedTodo } = this.props;
    return (
      <React.Fragment>
        <div className='todoItem'>
          <input
            id={id}
            type='checkbox'
            name={value}
            hidden
            onClick={() => checkedTodo(id)} />
          <label htmlFor={id} className='todoItem__label'>
            <img 
              src={checked ? '/assets/images/itemChecked.svg' : '/assets/images/noChecked.svg'}
              alt={value} />
            <span className={checked ? 'checkedText' : ''}>{value}</span>
          </label>
          <button
            type='button'
            className='delBtn'
            onClick={() => removeTodo(id)}
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
