import React, { useState } from 'react';
import './App.css';
import HackerRankLogo from './hackerrank-logo.png'; // Make sure to add your logo image in the project

function App() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddItem = () => {
    if (inputValue.trim() !== '') {
      setItems([...items, inputValue]);
      setInputValue('');
    }
  };

  return (
    <div className="App">
      <div className="taskbar">
        <img src={HackerRankLogo} alt="HackerRank Logo" className="logo" />
        <h1>Item List Manager</h1>
      </div>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter an item"
        />
        <br /> {/* Add a line break to move the button below the input box */}
        <button onClick={handleAddItem}>Add Item</button>
      </div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
