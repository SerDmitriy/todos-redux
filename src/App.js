import React from 'react';
// import logo from './logo.svg';
import { connect } from 'react-redux';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    console.log('console text');
    return (
      <React.Fragment>
        <span>text main</span>
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
  return { testfunc: () => {console.log('test function works')} }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
