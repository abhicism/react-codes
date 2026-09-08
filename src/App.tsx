import { useState, useEffect } from "react";

function App() {

    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Count: ${count}`;
    }, [count]);

    return (
        <div>
            <h1>Count: {count}</h1>

            <button onClick={() => setCount(count + 1)}>
                +
            </button>
        </div>
    );
}

export default App;