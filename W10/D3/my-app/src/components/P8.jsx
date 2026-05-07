import { useState } from "react";

//keyboard events in react 
export function KeyboardEvent() {
    const [text, setText] = useState('');
    const [action, setAction] = useState('No action yet');

    //input handler
    const handleChange = (event) => {
        setText(event.target.value);
    };
    //keyboard event handler 
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            setAction(`Submitted: ${text}`);
        }
        if (event.key === 'Escape') {
            setText('');
            setAction('Input cleared');
        }
    };
    return (
        <section>
            <h2>Keyboard events</h2>
            <label htmlFor="nameInput">Type something:</label>
            <input type="text" value={text} id="nameInput" onChange={handleChange} onKeyDown={handleKeyDown} placeholder="Press enter or escape" />
            <p>Current input:{text}</p>
            <p>Action:{action}</p>
            <button onClick={()=>setAction('Button clicked')}> Native Submit Button</button>
        </section>
    )
}

