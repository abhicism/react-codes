// Import React hooks: useState for state management, useEffect for side effects
import { useState, useEffect } from "react";

// Define the main App component
function App() {

    // State variable 'seconds' starts at 30
    // 'setSeconds' updates the countdown value
    const [seconds, setSeconds] = useState(30);

    // State variable 'isRunning' tracks whether the timer is active
    // 'setIsRunning' updates this running state
    const [isRunning, setIsRunning] = useState(false);

    // useEffect runs whenever 'isRunning' changes
    useEffect(() => {

        // If timer is not running, exit early
        if (!isRunning) {
            return;
        }

        // Create an interval that runs every 1000ms (1 second)
        const timer = setInterval(() => {

            // Update 'seconds' safely using the current value
            setSeconds((currentSeconds) => {

                // If countdown reaches 1 or less, stop the timer
                if (currentSeconds <= 1) {
                    setIsRunning(false); // stop running
                    return 0;            // set seconds to 0
                }

                // Otherwise, decrease seconds by 1
                return currentSeconds - 1;
            });

        }, 1000);

        // Cleanup function: clear the interval when component unmounts
        // or when 'isRunning' changes
        return () => {
            clearInterval(timer);
        };

    }, [isRunning]); // Dependency array: effect runs when 'isRunning' changes

    // Reset function: restore seconds to 30 and stop the timer
    function handleReset() {
        setSeconds(30);
        setIsRunning(false);
    }

    // JSX returned by the component
    return (
        <div>
            {/* Heading for the app */}
            <h1>Countdown Timer</h1>

            {/* Display current seconds */}
            <h2>{seconds}</h2>

            {/* Button to start the timer */}
            <button onClick={() => setIsRunning(true)}>
                Start
            </button>

            {/* Button to stop the timer */}
            <button onClick={() => setIsRunning(false)}>
                Stop
            </button>

            {/* Button to reset the timer */}
            <button onClick={handleReset}>
                Reset
            </button>

            {/* Conditional rendering: show message when time hits 0 */}
            {seconds === 0 && (
                <p>Time's up!</p>
            )}
        </div>
    );
}

// Export the App component so it can be used elsewhere
export default App;
