// Define the type of props that the User component will accept
type Userprops = {
    name: string;        // name must be a string
    age: number;         // age must be a number
    isAdmin: boolean;    // isAdmin must be true or false
};


// User component
// We receive name, age and isAdmin as props
function User({ name, age, isAdmin }: Userprops) {  //userprops is the type of props that we defined above

    // Return the JSX that will be displayed on the screen
    return (
        <div>

            {/* Display the user's name */}
            <p>Name: {name}</p>

            {/* Display the user's age */}
            <p>Age: {age}</p>

            {/* 
                isAdmin is a boolean.
                toString() converts true/false into "true"/"false"
                so it can be displayed as text.
            */}
            <p>Is Admin: {isAdmin.toString()}</p>

        </div>
    );
}


// App is the parent component
function App() {

    // Return the main JSX of our application
    return (
        <div>

            {/* Main heading */}
            <h1>My React App</h1>


            {/* 
                Sending props from App (parent)
                to User (child).

                name = string
                age = number
                isAdmin = boolean
            */}
            // We must provide all the props required by Userprops.
            <User
                name="Abhishek"
                age={25}
                isAdmin={true}
            />


            {/* 
                Another User component.
                We must provide all the props
                required by Userprops.
            */}
            // We must provide all the props required by Userprops.
            <User
                name="Rahul"
                age={30}
                isAdmin={false}
            />

        </div>
    );
}


// Export App so that React can use this component
export default App;