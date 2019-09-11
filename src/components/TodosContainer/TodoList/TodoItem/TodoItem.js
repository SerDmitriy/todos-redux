import React from 'react';
import { connect } from 'react-redux';
import './TodoItem.css';
import { actions } from '../../../../actions/rootActions';


class TodoItem extends React.Component {
  constructor(props) {
    super(props)
  }
  handleBtnRemove = (e) => {
    console.dir(e.target);
  }
  render() {
    const { item, removeTodo }=this.props;
    console.dir(this.props);
    return (
      <React.Fragment>
        <div key={item.id}>
          {item.value}
          <button 
            type='button'
            onClick={() => removeTodo(item.id)}
            > X </button>
        </div>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    removeTodo: payload => dispatch(actions.A_RemoveTodoSuccess(payload))
  }
}

export default connect(null, mapDispatchToProps)(TodoItem);
