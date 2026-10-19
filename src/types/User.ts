// Define the shape of a User object.
// This type can be imported and used across the application
// to ensure all user data follows the same structure.
export type User = {
    id: number;       // Unique identifier for the user
    name: string;     // The user's display name
};

// this defined the structure of user returned from your  API