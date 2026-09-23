// Import React hooks: useRef for mutable values, useState for component state
import { useRef, useState } from "react";

function App() {

    // State variable 'seconds' starts at 0
    // 'setSeconds' updates the elapsed time
    const [seconds, setSeconds] = useState(0);

    // useRef stores the timer ID returned by setInterval
    // It persists across renders without causing re-renders
    const timerRef = useRef<number | null>(null);

    // Function to start the timer
    function handleStart() {

        // If a timer is already running, do nothing
        if (timerRef.current !== null) {
            return;
        }

        // Create a new interval that increments seconds every 1000ms
        timerRef.current = window.setInterval(() => {

            // Safely update seconds using the current value
            setSeconds((currentSeconds) => {
                return currentSeconds + 1;
            });

        }, 1000);
    }

    // Function to stop the timer
    function handleStop() {

        // If a timer is running, clear it
        if (timerRef.current !== null) {

            clearInterval(timerRef.current);

            // Reset the ref to null so we know no timer is active
            timerRef.current = null;
        }
    }

    // Function to reset the stopwatch
    function handleReset() {

        // Stop any running timer
        handleStop();

        // Reset seconds back to 0
        setSeconds(0);
    }

    // Calculate total minutes by flooring seconds / 60
    const minutes = Math.floor(seconds / 60);

    // Remaining seconds after dividing by 60
    const remainingSeconds = seconds % 60;

    // Format minutes as two digits (e.g., "05")
    const formattedMinutes =
        String(minutes).padStart(2, "0");

    // Format seconds as two digits (e.g., "09")
    const formattedSeconds =
        String(remainingSeconds).padStart(2, "0");

    // JSX returned by the component
    return (
        <div>

            {/* Heading for the stopwatch */}
            <h1>Stopwatch</h1>

            {/* Display formatted minutes and seconds */}
            <h2>
                {formattedMinutes}:{formattedSeconds}
            </h2>

            {/* Button to start the timer */}
            <button onClick={handleStart}>
                Start
            </button>

            {/* Button to stop the timer */}
            <button onClick={handleStop}>
                Stop
            </button>

            {/* Button to reset the timer */}
            <button onClick={handleReset}>
                Reset
            </button>

        </div>
    );
}

// Export the App component so it can be used elsewhere
export default App;
