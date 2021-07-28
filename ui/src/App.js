import React, { Component } from 'react';
import { PitchCircle } from './components';
import { generateAmbitii } from "./shape-theory"
import './App.css';
const { Note } = require("@tonaljs/tonal");

class App extends Component {
  state = {
    ambitusNum: 5,
    ambitus: generateAmbitii()[11]
  }


  render() {
    return (
      <div className="App">
          {
            this.state.ambitus.map((entry, i) => (
              <div key={i} style={{ width: "150px", height: "150px", float: "left" }}>
                <PitchCircle data={entry.notes} />
              </div>
            ))
          }
      </div>
    );
  }
}
export default App;
