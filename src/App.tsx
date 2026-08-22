// Main component for the application.
function App() {
    // Logs a personalized greeting to the browser console.
    function greet(name: string) {
        console.log(`Hello, ${name}!`);
    }

    // Render the page heading and greeting button.
    return (
        <div>
            <h1>My React App</h1>
            {/* Call greet when the user clicks this button. */}
            <button onClick={() => greet("abhishek")}>Greet</button>
        </div>
    );
}

export default App;
