// Import the React APIs used to create, read, and update the theme context.
import { createContext, useContext, useState } from "react";

// Describe the theme value and its state updater so context consumers are type-safe.
type ThemeContextType = {
    theme: string;
    setTheme: React.Dispatch<React.SetStateAction<string>>;
};

// Create the context; null indicates that no provider has supplied a value yet.
const ThemeContext = createContext<ThemeContextType | null>(null);


// Display the current theme and provide a control for changing it.
function Profile() {
    // Read the nearest ThemeContext provider's value.
    const context = useContext(ThemeContext);

    // Show a fallback if Profile is rendered outside the provider.
    if (!context) {
        return <p>ThemeContext is not available</p>;
    }

    // Extract the current theme and the function that updates it.
    const { theme, setTheme } = context;

    return (
        // Apply colors based on the selected theme.
        <div
            style={{
                padding: "30px",
                backgroundColor: theme === "light" ? "white" : "black",
                color: theme === "light" ? "black" : "white"
            }}
        >
            <h1>Profile</h1>

            {/* Show the current theme value. */}
            <p>Current Theme: {theme}</p>

            {/* Toggle between the light and dark themes when clicked. */}
            <button
                onClick={() =>
                    setTheme(theme === "light" ? "dark" : "light")
                }
            >
                Change Theme
            </button>
        </div>
    );
}


// Own the theme state and make it available to Profile through context.
function App() {
    // Start the app in light mode.
    const [theme, setTheme] = useState("light");

    return (
        // Provide both the current theme and its updater to descendants.
        <ThemeContext.Provider
            value={{
                theme,
                setTheme
            }}
        >
            <Profile />
        </ThemeContext.Provider>
    );
}


// Export App so it can be rendered by the application entry point.
export default App;