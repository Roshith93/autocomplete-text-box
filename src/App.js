import React from 'react';
import './App.css';
import AutoComplete from './component/AutoComplete';
import Countries from './component/Countries'

function App() {
  return (
    <div className="App">
      <div className="App-Component">

      <h3>Auto complete text box</h3>
      <AutoComplete items={Countries}/>
      </div>
    </div>
  );
}

export default App;
