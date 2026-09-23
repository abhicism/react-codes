import {useRef} from 'react';

// App is the main component of our application
function App() {
  // We are using the useRef hook to create a reference to our input element
  const inputRef = useRef<HTMLInputElement>(null);

  //focus the input field when the button is clicked
  function handleFocus() {
    inputRef.current?.focus();
  }

  return (
    <div>
      {/* This is our input field */}
      <input ref={inputRef} 
       type='text'
        placeholder='enter your name'
        />
      {/* This is our button that will trigger the focus on the input field when clicked */}
      <button 
        onClick={handleFocus}>Focus Input</button>
    </div>
  );
}
export default App;