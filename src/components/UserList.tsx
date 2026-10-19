//display the users

// Import the custom hook that fetches and manages the users state
import { useUsers } from "../hooks/useUsers";

// Functional component that renders a list of users
function UserList() {

    // Destructure the users data and status flags from the custom hook
    const { users, loading, error } = useUsers();

    // Show a loading message while the data is being fetched
    if (loading) {
        return <p>Loading users...</p>;
    }

    // Show an error message if the fetch request failed
    if (error) {
        return <p>{error}</p>;
    }

    // Show a friendly message when there are no users to display
    if (users.length === 0) {
        return <p>No users found.</p>;
    }

    // Render the list of users once the data is loaded successfully
    return (
        <div>
            {/* Section heading for the users list */}
            <h2>Users</h2>

            {/* Map over each user and display their name and ID */}
            {users.map((user) => (
                // The key prop helps React identify each element uniquely
                <div key={user.id}>
                    <h3>{user.name}</h3>
                    <p>ID: {user.id}</p>
                </div>
            ))}
        </div>
    );
}

// Export the component so it can be imported and used elsewhere
export default UserList;