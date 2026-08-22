import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0); 
  // useState is a hook that allows you to add state to a functional component.
  // It returns an array with two elements: the current state value and a function to update it.

  function increase() {
    setCount(count + 1);
  }

  return (
    <>
      <h1>Count: {count}</h1>
      {/* The button triggers the event handler, calling the increase function when clicked */}
      <button onClick={increase}>Increase</button>
    </>
  );
}

export default App; // Fixed: Export the function reference, do not call it with ()