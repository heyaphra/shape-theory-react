import React, { Component } from 'react';
import { PitchCircle } from './components';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div style={{ width: "150px", height: "150px", margin: "0 auto" }}>
          <PitchCircle data={["A", "C", "E"]} />
        </div>
      </div>
    );
  }
}
export default App;
