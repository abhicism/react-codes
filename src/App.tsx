import { useState } from "react";

function App() {
  // Stores the text currently entered in the name field.
  const [name, setName] = useState("");

  // Prevents the form refresh and greets the user with their entered name.
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    alert(`Hello, ${name}!`);
  }  

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        {/* Controlled input: its value always comes from React state. */}
        <input
          type="text"
          value={name}
          // Update the state whenever the user types in the field.
          onChange={(event) => setName(event.target.value)}
        />
      </label>
      {/* Submits the form and runs handleSubmit above. */}
      <button type="submit">Greet</button>
    </form>
  );
}

export default App;
