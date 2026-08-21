//import use state hook from react
import { useState } from 'react';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>counter</h1>
            <p>count: {count}</p>
            //button to increment and decrement the count
            <button onClick={() => setCount(count - 1)}>decrement</button>
            <button onClick={() => setCount(count + 1)}>increment</button>
        </div>
    );
}

export default App;