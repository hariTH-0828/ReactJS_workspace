import React, { Component } from 'react';
import './App.css';
import OddCounter from './Component/Counter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <OddCounter countBy={2}/>
      </div>
    );
  }
}

export default App;
