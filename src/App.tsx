// Imports React's useState hook for storing component data.
import { useState } from "react";

// Defines the main application component.
function App() {
    // Stores whether the password is visible and provides a function to update it.
    const [showPassword, setShowPassword] = useState(false);

    // Toggles the password visibility between hidden and visible.
    function togglePassword() {
        // Updates the visibility state to the opposite of its current value.
        setShowPassword(!showPassword);
    }

    // Returns the user interface displayed by this component.
    return (
        // Wraps all login form elements in one container.
        <div>
            {/* Displays the page heading. */}
            <h1>Login</h1>

            {/* Lets the user enter a password. */}
            <input
                // Shows plain text when visible; otherwise masks the password.
                type={showPassword ? "text" : "password"}
                // Shows helper text before the user types a password.
                placeholder="Enter password"
            />

            {/* Runs togglePassword when the user clicks this button. */}
            <button onClick={togglePassword}>
                {/* Changes the button label based on password visibility. */}
                {showPassword ? "Hide Password" : "Show Password"}
            </button>
        </div>
    );
}

// Makes the App component available for use in other files.
export default App;
