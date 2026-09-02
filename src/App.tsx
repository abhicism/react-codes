/**
 * This is the App component.
 * It renders a list of users.
 */
function App() {
    // Define the users array
    const users = [
        "Abhishek",
        "Rahul",
        "Priya"
    ];

    return (
        <div>
            {/* Render a list of user names */}
            {users.map((user) => (
                <h2 key={user}>
                    {user}
                </h2>
            ))}
        </div>
    );
}

export default App;