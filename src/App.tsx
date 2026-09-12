import { useState, useEffect } from "react";

// Define the structure of a User object
type User = {
    id: number;
    name: string;
};

function App() {

    // Create users state
    // Initially, the users array is empty
    const [users, setUsers] = useState<User[]>([]);

    // Run this code after the component loads
    useEffect(() => {

        // Create an async function to get users from FastAPI
        async function getUsers() {

            // Send a GET request to the FastAPI endpoint
            const response = await fetch(
                "http://localhost:8000/users"
            );

            // Convert the JSON response into JavaScript data
            const data = await response.json();

            // Store the API data inside React state
            setUsers(data);
        }

        // Call the function to start the API request
        getUsers();

    }, []);

    return (
        <div>
            <h1>Users</h1>

            {/* Loop through users and display each user */}
            {users.map((user) => (
                <div key={user.id}>
                    <h2>{user.name}</h2>
                    <p>ID: {user.id}</p>
                </div>
            ))}
        </div>
    );
}

export default App;