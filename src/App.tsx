import { useState, useEffect } from "react";

// App component that shows a simple countdown timer.
function App() {

    // Initial countdown value is 10 seconds.
    const [seconds, setSeconds] = useState(10);

    // Start the timer once when the component mounts.
    useEffect(() => {

        // Set an interval that decreases the timer every second.
        const timer = setInterval(() => {

            // Update the countdown value safely using the previous state.
            setSeconds((currentSeconds) => {

                // Stop the interval when time reaches zero.
                if (currentSeconds <= 0) {
                    clearInterval(timer);
                    return 0;
                }

                // Decrease the remaining seconds by 1.
                return currentSeconds - 1;
            });

        }, 1000);

        // Clear the interval when the component unmounts.
        return () => {
            clearInterval(timer);
        };

    }, []);

    return (
        <div>
            {/* Title of the timer */}
            <h1>Countdown Timer</h1>

            {/* Display the current seconds remaining */}
            <h2>{seconds}</h2>

            {/* Show a message when the timer reaches zero */}
            {seconds === 0 && (
                <p>Time's up!</p>
            )}
        </div>
    );
}

export default App;