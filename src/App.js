import React from 'react';
import './App.css';
import TodosContainer from './components/TodosContainer/TodosContainer';
import Notification from './components/Notification/Notification';
// import Router from './routes'


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
        <Notification />
      </div>
    );
  }
}

export default App;