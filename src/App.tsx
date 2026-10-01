// useReducer is an alternative to useState for managing complex state logic.
// It works like: you "dispatch" an action, and a "reducer" function decides
// how the state should change based on that action.
import { useReducer } from 'react';

// The reducer function takes two arguments:
// - state: the current value of our state (a number)
// - action: an object describing what happened (e.g. { type: 'increment' })
// It returns the NEW state based on the action type.
function reducer(state: number, action: { type: string }) {

    // If the action type is 'increment', increase the count by 1
    if (action.type === 'increment') {
        return state + 1;
    }

    // If the action type is 'decrement', decrease the count by 1
    if (action.type === 'decrement') {
        return state - 1;
    }

    // If the action type is unknown, return the current state unchanged
    return state;
}

// App is the main component that gets rendered on the screen
function App() {

    // useReducer returns an array with two things:
    // - count: the current state value (starts at 0, the initial value)
    // - dispatch: a function we call to send actions to the reducer
    const [count, dispatch] = useReducer(reducer, 0);

    // This is the JSX that gets displayed on the screen
    return (
        <div>

            {/* Display the current count value */}
            <p>Count: {count}</p>

            {/* Increment button — when clicked, dispatches an 'increment' action */}
            <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>

            {/* Decrement button — when clicked, dispatches a 'decrement' action */}
            <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
        </div>
    );
}

// Export App so it can be imported and used in other files (like main.tsx)
export default App