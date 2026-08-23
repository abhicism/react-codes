function App() {
    // Event handler for form submission; typed specifically for an HTML form element in TypeScript
    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        // Prevents the default browser action (page refresh/reloading on submit)
        event.preventDefault();

        // Log confirmation message to the browser developer console
        console.log("Form submitted");
    }

    // Render the UI containing the form, input, and submit button
    return (
        // Attach the submit handler to the form's onSubmit event
        <form onSubmit={handleSubmit}>

            {/* Standard text input field for user entry */}
            <input
                type="text"
                placeholder="Enter your name"
            />

            {/* Submit button that triggers the parent form's onSubmit event when clicked */}
            <button type="submit">
                Submit
            </button>

        </form>
    );
}

// Export App component so it can be imported and rendered in the main entry point
export default App;