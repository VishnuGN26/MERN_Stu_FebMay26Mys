//React in event object
//What it is ?
//React automatically passes  an event object to event handlers
//This object contains details about the event
//eg:input field: event.target.value
//event: info about the input change
//event.target.value: the HTML input element
//event.target.value: the current text typed by the input field
import { useState } from 'react';
export function EventObject(){
    const [text,setText] = useState('');
    const handleChange = (event) => {
        const currentValue = event.target.value;
        console.log(currentValue);
        setText(currentValue);
    };
    return(
        <section>
            <h2>Event object </h2>
            <input type = "text" value={text} onChange={handleChange}
            placeholder = "Type something" />
            <p>You typed:{text}</p>
        </section>
    );
}