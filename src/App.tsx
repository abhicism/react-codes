import { useRef, useState } from "react";

function App() {
  // Initialize state and timer reference
  const [seconds, setSeconds] = useState(0);
  const timerRef = useRef<number | null>(null);

  // Function to start the timer
  function handleStart() {
    // If the timer is already running, return early
    if (timerRef.current !== null) {
      return;
    }
    // Start the timer by setting an interval that updates the state every second
    timerRef.current = window.setInterval(() => {
      setSeconds((currentSeconds) => {
        return currentSeconds + 1;
      });
    }, 1000);
  }

  // Function to stop the timer
  function handleStop() {
    // If the timer is not running, return early
    if (timerRef.current !== null) {
      // Clear the interval and set the timer reference to null
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }

  // Function to reset the timer
  function handleReset() {
    // Stop the timer
    handleStop();
    // Reset the state to 0
    setSeconds(0);
  }

  // Render the stopwatch component
  return (
    <div>
      <h1>Stopwatch</h1>
      <h2>{seconds}</h2>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;