import { useState } from "react";

function App() {
    // Track whether the user is currently logged in.
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div>
            <button
                onClick={() => setIsLoggedIn(!isLoggedIn)}
            >
                Toggle Login
            </button>

            {isLoggedIn && (
                <h1>Welcome back!</h1>
            )}
        </div>
    );
}

export default App;
