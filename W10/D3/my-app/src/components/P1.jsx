//Basics events in React
//what is an event ? 
//an action triggered by the user (mouse,keyboard,DOM)
//React uses camelCase attributes like onClick,onChange..
//React passes an event object(SyntheticEvent) to the handler 

export function EventBasics(){
    //Declaring a event handler function 
    const handleClick = () => alert("clicked");
    return(
        <section>
            <h2>Basics Events</h2>
            {/*event binding*/}
            <button onClick={handleClick}>
                Click me 
            </button>
        </section>
    )
}