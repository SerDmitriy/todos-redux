import React from 'react';
import './App.css';
import TodosContainer from './components/TodosContainer/TodosContainer';

class App extends React.Component {
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

export default App;