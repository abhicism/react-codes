import { useState, useEffect } from "react";

// interface
type User = {
  id: number;
  name: string;
};

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // Fetch users from the API when the component mounts
    async function fetchUsers() {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setUsers(data);
      } catch (err) {
        console.error("Error loading users:", err);
        setError("Error fetching users");
      } finally {
        setLoading(false);
      }
    }

    // calling the function to execute the fetch request
    fetchUsers();
  }, []); // [] means that the effect will only run once, when the component mounts

  return (
    <div>
      {/* Display page title */}
      <h1>Users</h1>
      {/* Show loading message while data is being fetched */}
      {loading && <p>Loading...</p>}
      {/* Show error message if fetch fails */}
      {error && <p>{error}</p>}
      <ul>
        {/* Render each user as a list item */}
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
