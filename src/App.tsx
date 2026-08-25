//preparing a name form with submit button and input field for name
import React, { useState } from 'react';

function App() {
   
    //declare a state variable to hold the name input, initially ' ' empty string
   //setname is the function to update the name state variable
    const [name, setName] = useState('');

    //function runs whenever the input value changes
    //the event type is react.ChangeEvent<HTMLInputElement> which is the type for input change events in React

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        //update the name state variable with the new value from the input field
        setName(event.target.value);
    }

    //function runs when the form is submitted
    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        //prevent the default form submission behavior which would refresh the page
        event.preventDefault();
        //log the name to the console
        console.log('Submitted name:', name);
    }

    return (
        <div>
            <h1>Name Form</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} 
                onChange={handleInputChange} />
                <button type="submit">Submit</button>
            
            </form>
            <h2> name: {name}</h2>
        </div>
    );
}
export default App;
//onChange={handleChange} :is telling React: “Whenever the input’s value changes, call the function handleChange
