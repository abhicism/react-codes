import {useRef} from 'react';

// App is the main component of our application
function App() {
  // We are using the useRef hook to create a reference to our input element
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      {/* This is our input field */}
      <input ref={inputRef} 
        placeholder='Type something...'
        />
      {/* This is our button that will trigger the focus on the input field when clicked */}
      <button 
        onClick={() => inputRef.current?.focus()}>Focus Input</button>
    </div>
  );
}