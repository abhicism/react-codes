import { useState, useEffect } from "react";

function App() {

    const [seconds, setSeconds] = useState(10);

    useEffect(() => {

        const timer = setInterval(() => {

            setSeconds((currentSeconds) => {

                if (currentSeconds <= 0) {
                    clearInterval(timer);
                    return 0;
                }

                return currentSeconds - 1;
            });

        }, 1000);

        return () => {
            clearInterval(timer);
        };

    }, []);

    return (
        <div>
            <h1>Countdown Timer</h1>

            <h2>{seconds}</h2>

            {seconds === 0 && (
                <p>Time's up!</p>
            )}
        </div>
    );
}

export default App;