//common form patterns
//controlled component
//A form input whose value is controlled by the react state
import { useState } from "react";
export function FormsPattern(){
    const [name,setName] = useState('');
    const[submittedName,setSubmittedName] = useState('');

    //input handler
 const handleChange = (event) => {
    setName(event.target.value);
 };
 //form submit handler
 const handleSubmit = (event) =>{
    event.preventDefault();
    setSubmittedName(name);
 };
return(
    <section>
        <h2>Form Pattern</h2>
        <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={handleChange} placeholder="Enter your name"/>
        <button type ="submit">Submit</button>
        </form>
        <p>You've Typed the name as:{name}</p>
        <p>Submitted:{submittedName}</p>
    </section>
);
}