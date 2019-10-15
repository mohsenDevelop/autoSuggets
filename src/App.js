import React, { useState } from 'react';
import './App.css';
import AutoSuggest from "./components/AutoSuggest";

function App() {

  const [items, useItems] = useState([
    'Tehran',
    'Shiraz',
    'Ahvaz',
    'Rasht',
    'Kerman',
    'Esfehan'
  ]);
  return (
    <div className="container">
      <AutoSuggest items={items} />
    </div>
  );
}

export default App;
