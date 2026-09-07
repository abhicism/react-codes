import { useEffect } from "react";

function App() {

    useEffect(() => {
        console.log("Component loaded");
    });

    return (
        <div>
            <h1>Hello React</h1>
            <p>commit line</p>
        </div>
    );
}

export default App;