import { useEffect, useState } from "react";

//managing API state with useEffect
export function ManagingApiState() {
    //user state: stores the list of users returned from API
    const [users, setUsers] = useState([]);

    //true while data is being fetched 
    const [loading, setLoading] = useState(false);

    //to store error message
    const [error, setError] = useState("");

    //the following function accepts "signal" so that request can be cancelled
    //by abortcontroller during cleanup
    async function loadUsers(signal) {
        setLoading(true);
        setError("");

        try {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/users",
                { signal }
            );

            if (!response.ok) {
                throw new Error(`Failed with status ${response.status}`);
            }

            const data = await response.json();

            setUsers(data);
        } 
        catch (error) {

            if (error.name === "AbortError") {
                return;
            }

            console.error(error);
            setError(error.message || "Failed to fetch users");
        } 
        finally {
            setLoading(false);
        }
    }

    //what happens in useEffect 
    //1.create an abort Controller
    //2.start the API request
    //3.return a cleanup function that aborts the request if 
    //the components unmounts 
    useEffect(() => {
        const controller = new AbortController();

        loadUsers(controller.signal);

        return () => {
            controller.abort();
        };
    }, []);

    //reload function 
    function handleReload() {
        const controller = new AbortController();

        loadUsers(controller.signal);
    }

    return (
        <section>
            <h2>Managing API State</h2>

            <button onClick={handleReload} disabled={loading}>
                {loading ? "Loading..." : "Reload Users"}
            </button>

            {/* loading UI */}
            {loading && <p>Loading Users...</p>}

            {/* error UI */}
            {!loading && error && <p>Error: {error}</p>}

            {/* empty state UI */}
            {!loading && !error && users.length === 0 && (
                <p>No users found.</p>
            )}

            {!loading &&
                !error &&
                users.length > 0 &&
                users.map((user) => (
                    <article key={user.id}>
                        <h4>{user.name}</h4>

                        <p>Email: {user.email}</p>

                        <p>Company: {user.company?.name}</p>

                        <p>City: {user.address?.city}</p>
                    </article>
                ))}
        </section>
    );
}