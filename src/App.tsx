import { useRef, useState } from "react";

function App() {
  const [seconds, setSeconds] = useState(0);
  const timerRef = useRef<number | null>(null);

  function handleStart() {
    if (timerRef.current !== null) {
      return;
    }
    timerRef.current = window.setInterval(() => {
      setSeconds((currentSeconds) => {
        return currentSeconds + 1;
      });
    }, 1000);
  }

  function handleStop() {
    if (timerRef.current !== null) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }

  function handleReset() {
    handleStop();
    setSeconds(0);
  }

  return (
    <div>
      <h1>Stopwatch</h1>
      <h2>{seconds}</h2>
      <button onClick={handleStart} style={{marginRight: '8px', padding: '8px 16px', border: '1px solid #ccc'}}>Start</button>
      <button onClick={handleStop} style={{marginRight: '8px', padding: '8px 16px', border: '1px solid #ccc'}}>Stop</button>
      <button onClick={handleReset} style={{marginRight: '8px', padding: '8px 16px', border: '1px solid #ccc'}}>Reset</button>
    </div>
  );
}

export default App;