import { useState } from "react";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    function toggleLogin() {
        setIsLoggedIn(!isLoggedIn);
    }

    return (
        <div>
            <h1>
                {isLoggedIn
                    ? "Welcome Abhishek!"
                    : "Please Login"}
                    //condition ? valueIfTrue : valueIfFalse
            </h1>

            <button onClick={toggleLogin}>
                {isLoggedIn ? "Logout" : "Login"}
            </button>
        </div>
    );
}

export default App;