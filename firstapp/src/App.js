import React, { Component } from 'react';
import './App.css';
import OddCounter from './Component/Counter';
import ParentComponent from './Component/ParentComponent';
import NameList from './Component/ListRendering';

class App extends Component {
  render() {
    return (
      <div className="App">
        <OddCounter countBy={2}/>
        <ParentComponent/>
        <NameList/>
      </div>
    );
  }
}

export default App;
