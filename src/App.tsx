import {
    useEffect,   // Used to run the API call when the component loads
    useState     // Used to store users, loading status, and error
} from "react";


// Define the structure of a User object
type User = {
    id: number;      // User ID must be a number
    name: string;    // User name must be a string
};


// Create a custom Hook called useUsers
function useUsers() {

    // Store the list of users
    // Initially, the users array is empty
    const [users, setUsers] =
        useState<User[]>([]);


    // Store whether the API request is still running
    // Initially true because the request has not finished yet
    const [loading, setLoading] =
        useState(true);


    // Store an error message if the API request fails
    // Initially there is no error
    const [error, setError] =
        useState("");


    // useEffect runs when the component using this Hook loads
    useEffect(() => {

        // Create an async function for making the API request
        async function getUsers() {

            try {

                // Send a GET request to the backend API
                const response = await fetch(
                    "http://localhost:8000/users"
                );


                // Check whether the HTTP request was successful
                // response.ok is true for successful responses
                if (!response.ok) {

                    // If the request failed, create an error
                    throw new Error(
                        "Failed to fetch users"
                    );
                }


                // Convert the API response from JSON
                // into JavaScript data
                const data =
                    await response.json();


                // Store the received users in React state
                setUsers(data);


            } catch (error) {

                // If something goes wrong,
                // store an error message in the error state
                setError(
                    "Failed to fetch users"
                );


            } finally {

                // This runs whether the request succeeds or fails
                // The API request is now finished
                setLoading(false);

            }
        }


        // Call the async function
        // This starts the API request
        getUsers();


    // Empty dependency array means this effect
    // runs only when the component initially loads
    }, []);


    // Return the data and states from the custom Hook
    // Components can use these values
    return {

        // The users received from the API
        users,

        // Whether the API request is still loading
        loading,

        // Error message if the request failed
        error
    };
}