// Import React's state hook for managing form data.
import { useState } from "react";

// Define the shape of the form values.
type FormData = {
    name: string;
    email: string;
    password: string;
};

// Main component for the registration form.
function App() {
    // Store the form values in state.
    //formdata is the interface that defines the shape of the form values. It has three properties: name, email, and password, all of which are strings. The useState hook is used to create a state variable called formData, which is initialized with an object that has empty strings for each property. The setFormData function is used to update the formData state whenever the user types into an input field.
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        password: ""
    });

    // Update the matching field whenever the user types into an input.
    function handleChange(
        event: React.ChangeEvent<HTMLInputElement>
    ) {
        const { name, value } = event.target;

        setFormData({
            ...formData,
            [name]: value
        });
    }

    // Prevent default form submission and log the form data.
    function handleSubmit(
        event: React.FormEvent<HTMLFormElement>
    ) {
        event.preventDefault();

        console.log(formData);
    }

    // Render the registration form UI.
    return (
        <div>
            {/* Page heading */}
            <h1>Registration Form</h1>

            {/* Form container with submit handler */}
            <form onSubmit={handleSubmit}>

                {/* Name input field */}
                <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                />

                {/* Email input field */}
                <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                />

                {/* Password input field */}
                <input
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                />

                {/* Submit button */}
                <button type="submit">
                    Register
                </button>

            </form>
        </div>
    );
}

// Export the App component for use in the app entry point.
export default App;