import { useState } from "react"; 
// Importing the useState hook from React to manage state inside the component.

function App() {

    // Declare a state variable called "count" with initial value 0.
    // "setCount" is the function used to update the value of "count".
    const [count, setCount] = useState(0);

    // Function to increase the count by 1.
    function increase() {
        setCount(count + 1);
    }

    // Function to decrease the count by 1.
    function decrease() {
        setCount(count - 1);
    }

    // Function to reset the count back to 0.
    function reset() {
        setCount(0);
    }

    return (
        <div>
            {/* Heading for the app */}
            <h1>Counter App</h1>

            {/* Display the current count value */}
            <h2>Count: {count}</h2>

            {/* Button to increase the count */}
            <button onClick={increase}>
                INCRESE
            </button>

            {/* Button to decrease the count */}
            <button onClick={decrease}>
                DECREASE
            </button>

            {/* Button to reset the count */}
            <button onClick={reset}>
                Reset
            </button>
        </div>
    );
}

export default App; 
// Exporting the App component so it can be used in other parts of the project.
