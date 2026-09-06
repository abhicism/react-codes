import { useState, type ChangeEvent } from "react";

type LoginData = {
    email: string;
    password: string;
};

function App() {
    const [formData, setFormData] = useState<LoginData>({
        email: "",
        password: ""
    });

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        //  name: fieldName is the name attribute of the input
        const { name: fieldName, value } = event.target;

        setFormData((currentFormData) => ({
            //currentFormData is the previous state of the form data which is being updated with the new value of the input that triggered the change event
            ...currentFormData,
            // [fieldName]: value is a computed property name, it will update the field with the name of the input that triggered the change event
            [fieldName]: value
        }));
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        console.log("Email:", formData.email);
        console.log("Password:", formData.password);
    }

    return (
        <div>
            <h1>Login Form</h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <label className="field-label">Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                    />
                </div>

                <br />

                <div>
                    <label className="field-label">Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Enter your password"
                    />
                </div>

                <br />

                <button type="submit">
                    Login
                </button>
            </form>
        </div>
    );
}

export default App;
