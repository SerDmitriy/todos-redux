import React from 'react';
import './App.css';
import Notification from './components/Notification/Notification';
import Router from './routes'
import {FolderTree} from "./components/TestTask07_2020";

class App extends React.Component {
  
  render() {
    return (
      <div className='App'>
        <FolderTree/>
        <Router/>
        <Notification />
      </div>
    );
  }
}

export default App;