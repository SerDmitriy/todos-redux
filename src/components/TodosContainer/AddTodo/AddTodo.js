import React from 'react';
import { connect } from 'react-redux';
import './AddTodo.css';
import { actions } from '../../../actions/rootActions';
import { TEXT_ERR_MSG } from '../../../constants/constants';
import { genKey } from '../../../utilites/index';


class AddTodo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todoValue: '',
      errorMsg: TEXT_ERR_MSG.textErrReq
    }
  }

  validateInput = value => {
    this.setState({ errorMsg: '' });
    const re = /^[a-zA-Z0-9-=/!/?@]{2,10}$/;
    if (!re.test(String(value))) {
      this.setState({ errorMsg: TEXT_ERR_MSG.textErrMain });
    }
    if (value.length === 0) {
      this.setState({ errorMsg: TEXT_ERR_MSG.textErrZero })
    }
  }

  handleChangeField = ({ target: { name, value }, keyCode }) => {
    const { addTodo } = this.props;
    const { todoValue, errorMsg } = this.state;
    this.setState({ [name]: value });
    this.validateInput(value);
    if (keyCode === 13 && !errorMsg && value.length !== 0) {
      addTodo({ id: genKey(), value: todoValue, checked: false });
      this.setState({ [name]: '' });
    }
  }

  render() {
    const { todoValue, errorMsg } = this.state;
    return (
      <div className='addTodo'>
        <img
          className='arrow_down'
          src='/assets/images/arrow_down.png'
          alt='arrow_down' />
        <input
          value={todoValue}
          className='addTodo_input'
          name='todoValue'
          key='inputKey'
          onChange={this.handleChangeField}
          onKeyUp={this.handleChangeField}
          placeholder='What needs to be done?' />
        {errorMsg ? <div className='errorMsg'>* {errorMsg}</div> : null}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: payload => dispatch(actions.Add_Todo.Success(payload)),
  }
}

export default connect(null, mapDispatchToProps)(AddTodo);
