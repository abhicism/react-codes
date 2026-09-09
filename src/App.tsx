// Import React hooks used to manage state and side effects.
import React, { useState, useEffect } from "react";

// Render the counter application.
export default function App() {
  // Store the current counter value.
  const [count, setCount] = useState<number>(0);

  // Log the counter value whenever it changes.
  useEffect(() => {
    console.log("Count changed:", count);
  }, [count]);

  // Increase the counter by one.
  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  // Decrease the counter by one.
  const handleDecrement = () => {
    setCount((prev) => prev - 1);
  };

  // Render the counter interface.
  return (
    // Center the counter content and add spacing around it.
    <div style={{ padding: "2rem", fontFamily: "sans-serif", textAlign: "center" }}>
      {/* Display the counter title. */}
      <h1>Counter</h1>
      {/* Display the current counter value. */}
      <h2>{count}</h2>
      {/* Place the counter buttons next to each other. */}
      <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
        {/* Button that decreases the counter. */}
        <button onClick={handleDecrement} style={{ padding: "0.5rem 1rem", fontSize: "1.2rem" }}>
          -
        </button>
        {/* Button that increases the counter. */}
        <button onClick={handleIncrement} style={{ padding: "0.5rem 1rem", fontSize: "1.2rem" }}>
          +
        </button>
      </div>
    </div>
  );
}