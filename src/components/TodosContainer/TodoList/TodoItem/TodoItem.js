import React from 'react';
import { connect } from 'react-redux';
import './TodoItem.css';
import { actions } from '../../../../actions/rootActions';


class TodoItem extends React.Component {

  render() {
    const { id, value, checked, A_RemoveTodo, A_CheckedTodo } = this.props;
    return (
      <React.Fragment>
        <div className='todoItem'>
          <input
            id={id}
            type='checkbox'
            name={value}
            hidden
            onClick={() => A_CheckedTodo(id)} />
          <label htmlFor={id} className='todoItem__label'>
            <img 
              src={checked ? '/assets/images/itemChecked.svg' : '/assets/images/noChecked.svg'}
              alt={value} />
            <span className={checked ? 'checkedText' : ''}>{value}</span>
          </label>
          <button
            type='button'
            className='delBtn'
            onClick={() => A_RemoveTodo(id)}
          > X </button>
        </div>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    A_RemoveTodo: payload => dispatch(actions.REMOVE_TODO.SUCCESS(payload)),
    A_CheckedTodo: payload => dispatch(actions.CHECKED_TODO.SUCCESS(payload))
  }
}

export default connect(null, mapDispatchToProps)(TodoItem);
