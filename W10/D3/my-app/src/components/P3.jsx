import { useState } from "react";

//passing arguments to event handlers
export function PassingArguments(){
    const [message,setMessage] =  useState('No message yet');
    //event handler function
    const handleClick = (msg) => {
        setMessage(msg);
    };
return(
    <section>
        <h2>Passing argument</h2>
        <button onClick={() => handleClick("Namaste")}>
            
            Click me 
        </button>
        <p>Message:{message}</p>
    </section>
)
}