// Place type definitions outside the component (PascalCase convention)
type User = {
    id: number;
    name: string;
    age: number;
};

function App() {
    // Defining the array of users inside the component
    const users: User[] = [
        { id: 1, name: 'John Doe', age: 30 },
        { id: 2, name: 'Jane Smith', age: 25 },
        { id: 3, name: 'Bob Johnson', age: 40 },
    ];

    return (
        <div>
            <h1>User List</h1>
            {users.map((user) => (
                <div key={user.id}>
                    <p>Name: {user.name}</p>
                    <p>Age: {user.age}</p> <br></br>
                </div>
            ))}
        </div>
    );
}

export default App;