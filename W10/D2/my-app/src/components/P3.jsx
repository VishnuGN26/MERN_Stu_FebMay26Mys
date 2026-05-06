// useRef hook 
//useRef create a mutable reference object
//The object has one property: current 
//It persists across renders 
//why do we use it?
//Direct DOM access

import { useRef,useState,useEffect } from "react";

//Persisting values without triggering re-renders
export function UserRefIntro(){
    //1 Reference: DOM : This will point to the input element 
    const inputRef = useRef(null);
    //2 Value reference: This stores the previous count value.changing 
    //It does not re-render the UI by itself 
    const previousCounterRef = useRef(0);
    const [count,setCount] = useState(0);
    const [text,setText] = useState('');
    
    useEffect(() => {
        inputRef.current.focus();
    },[]);
        
    useEffect(() => {
        previousCounterRef.current = count;
    },[count]);

    const handleFocusInput = () =>{
        inputRef.current.focus();
    };

    const handleIncrement = () => {
        setCount((prev)=>prev+1);
    };
    return(
        <section>
            <div>
                <h3>
                    1.Focus input using useRef
                </h3>
                <input type="text" value={text} ref={inputRef}  onChange={(e)=>setText(e.target.value)} placeholder="Enter something"/>
                <button onClick={handleFocusInput}>
                    Focus Input

                </button>
            </div>
            <div>
                <h3>
                    2.Store previous value using UseRef
                </h3>
                <p>
                    Current count: {count}
                </p>
                <p>
                    Previous count: {previousCounterRef.current}
                </p>
                <button onClick={handleIncrement}>
                    Increment Count

                </button>
            </div>
        </section>
    )

}