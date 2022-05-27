import React, { Component } from 'react';
import './App.css';
import OddCounter from './Component/Counter';
import ParentComponent from './Component/ParentComponent';
import PersonList from './Component/PersonList';


class App extends Component {
  render() {
    return (
      <div className="App">
        <OddCounter countBy={2}/>
        <ParentComponent/>
        <PersonList/>
      </div>
    );
  }
}

export default App;
