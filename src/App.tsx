import { useState, useEffect } from "react";

type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    phone?: string;
    website?: string;
    isLocal?: boolean; // flag to distinguish local vs api users
};

const INITIAL_LOCAL_USERS: User[] = [
    {
        id: 1001,
        name: "Abhishek Sharma",
        username: "abhishek",
        email: "abhishek@example.com",
        phone: "+1 (555) 019-2834",
        website: "abhishek.dev",
        isLocal: true
    },
    {
        id: 1002,
        name: "Sarah Jenkins",
        username: "sarahj",
        email: "sarah.j@example.com",
        phone: "+1 (555) 014-3829",
        website: "sarahj.design",
        isLocal: true
    },
    {
        id: 1003,
        name: "Marcus Aurelius",
        username: "emperor",
        email: "marcus@rome.gov",
        phone: "+1 (555) 012-4400",
        website: "meditations.org",
        isLocal: true
    }
];

function App() {
    // Store the users received from initial load + API
    const [users, setUsers] = useState<User[]>(INITIAL_LOCAL_USERS);

    // Track whether the API request is still running
    const [loading, setLoading] = useState(true);

    // Store an error message if the API request fails
    const [error, setError] = useState("");

    // Form states for adding a new user
    const [newName, setNewName] = useState("");
    const [newUsername, setNewUsername] = useState("");
    const [newEmail, setNewEmail] = useState("");
    const [newPhone, setNewPhone] = useState("");
    const [newWebsite, setNewWebsite] = useState("");

    useEffect(() => {
        async function fetchAPIData() {
            try {
                // Send request to standard placeholder API
                const response = await fetch(
                    "https://jsonplaceholder.typicode.com/users"
                );

                if (!response.ok) {
                    throw new Error("HTTP error " + response.status);
                }

                // Convert response into JSON
                const apiUsers: User[] = await response.json();

                // Store users in React state, preserving our initial local users
                setUsers((prevUsers) => {
                    // Filter out any API user that might conflict with our local IDs just in case
                    const filteredAPIUsers = apiUsers.filter(
                        (apiUser) => !prevUsers.some((pu) => pu.id === apiUser.id)
                    );
                    return [...prevUsers, ...filteredAPIUsers];
                });
            } catch (err: any) {
                // Store error message
                setError("Failed to fetch API users: " + (err.message || err));
            } finally {
                // API request has finished
                setLoading(false);
            }
        }

        // Start the API request
        fetchAPIData();
    }, []);

    // Handle form submission to add a new local user
    const handleAddUser = (e: React.FormEvent) => {
        e.preventDefault();

        if (!newName.trim() || !newUsername.trim() || !newEmail.trim()) {
            alert("Name, Username, and Email are required fields.");
            return;
        }

        const newUser: User = {
            id: Date.now(), // unique timestamp ID
            name: newName,
            username: newUsername,
            email: newEmail,
            phone: newPhone || "N/A",
            website: newWebsite || "N/A",
            isLocal: true
        };

        setUsers((prevUsers) => [newUser, ...prevUsers]);

        // Reset form inputs
        setNewName("");
        setNewUsername("");
        setNewEmail("");
        setNewPhone("");
        setNewWebsite("");
    };

    // Helper to get initials for the user's avatar
    const getInitials = (name: string) => {
        return name
            .split(" ")
            .map((word) => word[0])
            .join("")
            .substring(0, 2)
            .toUpperCase() || "U";
    };

    // Handle deleting a user
    const handleDeleteUser = (id: number) => {
        setUsers((prevUsers) => prevUsers.filter((u) => u.id !== id));
    };

    return (
        <div className="app-container">
            <header className="app-header">
                <h1>User Directory</h1>
                <p className="subtitle">
                    Manage your team, fetch API profiles, and dynamically expand the list.
                </p>
            </header>

            <main className="dashboard-layout">
                {/* Section to add new users */}
                <section className="form-section">
                    <h2>Add New User</h2>
                    <form onSubmit={handleAddUser} className="user-form">
                        <div className="form-group">
                            <label htmlFor="name">Full Name *</label>
                            <input
                                id="name"
                                type="text"
                                placeholder="e.g. John Doe"
                                value={newName}
                                onChange={(e) => setNewName(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="username">Username *</label>
                            <input
                                id="username"
                                type="text"
                                placeholder="e.g. johndoe"
                                value={newUsername}
                                onChange={(e) => setNewUsername(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email *</label>
                            <input
                                id="email"
                                type="email"
                                placeholder="e.g. john@example.com"
                                value={newEmail}
                                onChange={(e) => setNewEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone">Phone Number</label>
                            <input
                                id="phone"
                                type="tel"
                                placeholder="e.g. +1 (555) 123-4567"
                                value={newPhone}
                                onChange={(e) => setNewPhone(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="website">Website</label>
                            <input
                                id="website"
                                type="text"
                                placeholder="e.g. johndoe.me"
                                value={newWebsite}
                                onChange={(e) => setNewWebsite(e.target.value)}
                            />
                        </div>

                        <button type="submit" className="btn-primary">
                            Add User Profile
                        </button>
                    </form>
                </section>

                {/* Section displaying the user directory */}
                <section className="directory-section">
                    <div className="directory-header">
                        <h2>Team Roster</h2>
                        <span className="count-badge">{users.length} Users</span>
                    </div>

                    {/* Show loading state for API data */}
                    {loading && (
                        <div className="status-container loading">
                            <div className="spinner"></div>
                            <p>Fetching API users...</p>
                        </div>
                    )}

                    {/* Show error state if API fails */}
                    {error && (
                        <div className="status-container error">
                            <span className="error-icon">⚠️</span>
                            <p>{error}</p>
                        </div>
                    )}

                    <div className="user-grid">
                        {users.map((user) => (
                            <div key={user.id} className={`user-card ${user.isLocal ? "local-user" : "api-user"}`}>
                                <button
                                    onClick={() => handleDeleteUser(user.id)}
                                    className="btn-delete"
                                    title="Delete User"
                                    aria-label="Delete User"
                                >
                                    &times;
                                </button>
                                <div className="user-card-header">
                                    <div className="avatar-circle">
                                        {getInitials(user.name)}
                                    </div>
                                    <div className="badge-container">
                                        <span className={`badge ${user.isLocal ? "badge-local" : "badge-api"}`}>
                                            {user.isLocal ? "Local" : "API"}
                                        </span>
                                    </div>
                                </div>
                                <div className="user-card-body">
                                    <h3>{user.name}</h3>
                                    <p className="username">@{user.username}</p>
                                    
                                    <hr className="divider" />
                                    
                                    <div className="user-details">
                                        <div className="detail-item">
                                            <span className="detail-icon">✉️</span>
                                            <span className="detail-text">{user.email}</span>
                                        </div>
                                        {user.phone && (
                                            <div className="detail-item">
                                                <span className="detail-icon">📞</span>
                                                <span className="detail-text">{user.phone}</span>
                                            </div>
                                        )}
                                        {user.website && (
                                            <div className="detail-item">
                                                <span className="detail-icon">🌐</span>
                                                <a 
                                                    href={`https://${user.website}`} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer" 
                                                    className="detail-link"
                                                >
                                                    {user.website}
                                                </a>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {users.length === 0 && !loading && (
                        <div className="empty-state">
                            <p>No users found in directory. Try adding some!</p>
                        </div>
                    )}
                </section>
            </main>
        </div>
    );
}

export default App;
