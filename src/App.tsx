// Import React hooks and the ChangeEvent type from React
import { useState, useEffect } from "react";
import type { ChangeEvent, FormEvent } from "react";

// Define the structure of our login form data
type LoginData = {
    email: string;       // Email must be a string
    password: string;    // Password must be a string
};

function App() {

    // Create state to store email and password
    // formData = current form values
    // setFormData = function used to update formData
    const [formData, setFormData] = useState<LoginData>({
        email: "",        // Initial email is empty
        password: ""      // Initial password is empty
    });

    // This function runs whenever the user types in an input
    function handleChange(event: ChangeEvent<HTMLInputElement>) {

        // Get the input's name and current value
        // Example: name = "email", value = "abc@gmail.com"
        const { name: fieldName, value } = event.target;

        // Update the form data
        // currentFormData gives us the latest form data
        setFormData((currentFormData) => ({

            // Copy the existing email and password
            ...currentFormData,

            // Update the field that the user is currently typing in
            // If fieldName is "email", this becomes: email: value
            // If fieldName is "password", this becomes: password: value
            [fieldName]: value
        }));
    }

    // This function runs when the login form is submitted
    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        // Prevent the browser from reloading the page
        event.preventDefault();

        // Use the current form values (replace this with an API call as needed)
        console.log("Login submitted:", formData);
    }

    // useEffect runs when the value inside its dependency changes
    useEffect(() => {

        // Print the current email in the browser console
        console.log("Email changed:", formData.email);

    // [formData.email] means run this effect when email changes
    }, [formData.email]);

    // JSX returned by the component
    return (
        <div>

            {/* Display the heading */}
            <h1>Login Form</h1>
            <p>Commit line added</p>

            <form onSubmit={handleSubmit}>
                {/* Email input */}
                <input
                    type="email"                 // Input accepts an email
                    name="email"                 // Identifies this field as email
                    value={formData.email}       // Value comes from React state
                    onChange={handleChange}      // Run handleChange when user types
                    placeholder="Enter your email"
                />

                {/* Password input */}
                <input
                    type="password"              // Hides the password characters
                    name="password"              // Identifies this field as password
                    value={formData.password}    // Value comes from React state
                    onChange={handleChange}      // Run handleChange when user types
                    placeholder="Enter your password"
                />

                {/* Submit the login form */}
                <button type="submit">Submit</button>
            </form>

        </div>
    );
}

// Export App so it can be used by the React application
export default App;
