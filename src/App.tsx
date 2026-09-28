import { useMemo, useState } from "react";

function App() {
    const [number, setNumber] = useState(10);

    const doubledNumber = useMemo(() => {
        console.log("Calculating doubled number...");
        return number * 2;
    }, [number]);

    return (
        <div>
            <h1>Doubled Number: {doubledNumber}</h1>
            <button onClick={() => setNumber(number + 1)}>Increment</button>
        </div>  
    ) 
}

export default App;