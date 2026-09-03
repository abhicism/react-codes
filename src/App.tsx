function App() {
  // Sample user data to display in the app.
  const users = [
   { id: 1, name: 'Alice', age: 25 },
   { id: 2, name: 'Bob', age: 30 },
   { id: 3, name: 'Charlie', age: 35 },
  ];

  return (
    <div>
     {/* Header for the user list section. */}
     <h1>User List</h1>

     {/* Render each user as a separate section. */}
     {users.map(user => (
       <div key={user.id}>
         <h2>{user.name}</h2>
         <p>Age: {user.age}</p>
         <br />
       </div>
     ))}
   </div>
  );
}

export default App;