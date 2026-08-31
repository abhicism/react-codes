import React, { useState } from 'react';

function App() {
  // Define a state variable called isAdmin and a function to update it
  const [isAdmin, setIsAdmin] = useState(false);

  // Toggle function
  function toggleAdmin() {
    setIsAdmin(!isAdmin);
  }

  return (
    <div>
      {/* Render a heading that adapts to admin state */}
      <h1>
        {isAdmin ? "Welcome Admin Abhishek!" : "Welcome Abhishek!"}
      </h1>

      {/* Conditionally render a paragraph if isAdmin is true */}
      {isAdmin && (
        <p>You have Admin Access</p>
      )}

      {/* Render a button that toggles the value of isAdmin when clicked */}
      <button onClick={toggleAdmin}>
        {isAdmin ? "Revoke Admin Access" : "Grant Admin Access"}
      </button>
    </div>
  );
}

export default App;
