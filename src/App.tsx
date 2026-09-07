import { useEffect } from "react"; 
// Importing the useEffect hook from React

function App() {

    useEffect(() => {
        // Runs after the component is mounted (first render)
        console.log("Component loaded");
        // Logs a message to the console when the component loads
    });
    // No dependency array → runs after every render

    return (
        <div>
            {/* Displays a heading on the page */}
            <h1>Hello React</h1>
        </div>
    );
}

export default App; 
// Exports the App component so it can be used elsewhere
