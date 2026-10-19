import { useEffect, useState } from "react";
import { getUsers } from "../services/userService";
import type { User } from "../types/User";

export function useUsers() {

    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function loadUsers() {
            try {
                const data = await getUsers();
                setUsers(data);
            } catch {
                setError("Failed to fetch users");
            } finally {
                setLoading(false);
            }
        }

        loadUsers();
    }, []);

    return { users, loading, error };
}