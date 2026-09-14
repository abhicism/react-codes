import React, { useState } from "react";

function App() {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div>
      <label>
        <input 
          type="checkbox" 
          checked={isChecked} 
          onChange={handleChange} 
        />
        Accept Terms & Conditions
      </label>
      <p>{isChecked ? "✅ Checked" : "❌ Not Checked"}</p>
    </div>
  );
}

export default App;
