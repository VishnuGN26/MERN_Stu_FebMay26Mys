//props immutable 
//Notification count
function Child({ message }) {
    message = 'Changed message';
    return <p> Received message: {message}</p>;
}

export function PropsImmutability(){
    const parentsMessage = "Props are read-only";
    return(
        <>
         <h2>Props are immutable.</h2>
         <Child message={parentsMessage}/>
        </>
    )
}