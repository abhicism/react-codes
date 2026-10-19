// This file contains API service functions for user management.
// These functions handle all communication with the backend server.
// In a real app, you would also add functions for creating,
// updating, and deleting users here.

// Import the User type so TypeScript can validate the data structure
// returned from the API matches what we expect.
import type { User } from "../types/User";

// Base URL of the backend server (FastAPI in this case).
// All API requests will be made relative to this URL.
const API_URL = "http://localhost:8000";

// Fetches the list of all users from the backend API.
// Returns a Promise that resolves to an array of User objects.
export async function getUsers(): Promise<User[]> {

    // Make a GET request to the /users endpoint
    const response = await fetch(
        `${API_URL}/users`
    );

    // Check if the request was successful (status code 200-299)
    // If not, throw an error to be caught by the calling code
    if (!response.ok) {
        throw new Error("Failed to fetch users");
    }

    // Parse the JSON response body and tell TypeScript
    // that it matches the User[] type
    const data: User[] = await response.json();

    // Return the array of users to the calling component
    return data;
}

// This is a service file where we write functions that
// communicate with the backend API to get, create, update,
// or delete users. Keeping API calls in a separate service
// file keeps our components clean and makes testing easier.