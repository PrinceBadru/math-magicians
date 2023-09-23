import React, { useState } from 'react';
import Calculator from './components/Calculator';
import calculate from './logic/calculate';
import './App.css';

function App() {
  const [state, setState] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const handleClick = (buttonName) => {
    setState(calculate(state, buttonName));
  };
  return <Calculator onClick={handleClick} state={state} />;
}

export default App;
