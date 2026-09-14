import { useState, useEffect } from "react";

type User = {
    id: number;
    name: string;
};

function App() {

    // Store the users received from the API
    const [users, setUsers] = useState<User[]>([]);

    // Track whether the API request is still running
    const [loading, setLoading] = useState(true);

    // Store an error message if the API request fails
    const [error, setError] = useState("");

    useEffect(() => {

        async function getUsers() {

            try {

                // Send request to FastAPI
                const response = await fetch(
                    "http://localhost:8000/users"
                );

                // Convert response into JavaScript data
                const data = await response.json();

                // Store users in React state
                setUsers(data);

            } catch (error) {

                // Store error message
                setError("Failed to fetch users");

            }

            // API request has finished
            setLoading(false);
        }

        // Start the API request
        getUsers();

    }, []);

    return (
        <div>

            <h1>Users</h1>

            {/* Show loading message while API request is running */}
            {loading && <p>Loading...</p>}

            {/* Show error message if something went wrong */}
            {error && <p>{error}</p>}

            {/* Display users when they are available */}
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
