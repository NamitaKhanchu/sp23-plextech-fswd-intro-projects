import logo from './logo.svg';
import './App.css';
import './components/Button';
import { useState } from 'react';
import Button from './components/Button';



function Counter() {
  const [count, setCount] = useState(0);

  function Increment() {
    setCount(count + 1);
  }
  
  function Decrement() {
    setCount(count - 1);
  }

  return (
  <div className="App">
      <p>Count: {count}</p>
      <Button title={"+"} task={Increment}> </Button>
      <Button title={"-"} task={Decrement}> </Button>
  </div>
  );
}

export default Counter;
