import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {


  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <p>Count value is {count}</p>
      <button onClick={()=>setCount(count<10?count+1:count)}>Increment</button>
      <button onClick={()=>setCount(count<1?count:count-1)}>Decrement</button>
      <button onClick={()=>setCount(0)}>Reset</button>
    </div>
  );
}

export default App;
