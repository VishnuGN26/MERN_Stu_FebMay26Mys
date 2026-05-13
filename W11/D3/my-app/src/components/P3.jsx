//Axios usage with useEffect 
import { useState,useEffect } from "react";
import api from "../services/api";
export function AxiosLifecycle(){
    const [posts,setPosts] = useState([]);
    
        //true while data is being fetched 
        const [loading, setLoading] = useState(false);
    
        //to store error message
        const [error, setError] = useState("");
            useEffect(() => {
                const controller = new AbortController();
        
                loadPosts(controller.signal);
        
                return () => {
                    controller.abort();
                };
            },[]);
            async function loadPosts(signal) {
        setLoading(true);
        setError("");

        try {
            const response = await api.get  (
                "/posts",
                { signal }
            );
            setPosts(response.data.slice(0,5));

        }
        catch (error) {

            if (error.name === "CanceledError" || error.code === "ERR_CANCELED") {
                return;
            }

            console.error(error);
            setError(error.message || "Failed to fetch users");
        } 
        finally {
            setLoading(false);
        }
    }
    return (
        <section>
            <h2>Axios Lifecycle</h2>

            

            {/* loading UI */}
            {loading && <p>Loading Users...</p>}

            {/* error UI */}
            {!loading && error && <p>Error: {error}</p>}

            {/* empty state UI */}
            {!loading && !error && posts.length === 0 && (
                <p>No users found.</p>
            )}

            {!loading &&
                !error &&
                posts.length > 0 &&
                posts.map((post) => (
                    <article key={post.id}>
                        <h4>{post.title}</h4>

                        
                        <p>{post.body}</p>
                    </article>
                ))}
        </section>
    );
            
}