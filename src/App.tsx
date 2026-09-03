import { useState } from "react";
import "./App.css";

function App() {
    // create a state variable to store the name
    const [name, setName] = useState("");

    return (
        <div>
            {/* create an input field to get the name */}
            <input
                type="text"
                className="name-input"
                placeholder="Enter your name"
                value={name}
                onChange={(event) => {
                    // update the state variable when the input field changes
                    setName(event.target.value);
                }}
            />

            {/* display the name in a paragraph */}
            <p>You have enetered the name: {name}</p>
        </div>
    );
}

export default App;
