//useeffect lifecycle
//no array :every render
//[] -> once
//[state] -> on mount + when state changes
import { useEffect,useState} from "react";
export function UseEffectLifecycle(){
    const[count,setCount] = useState(0);

    //no dependency array
    useEffect(()=>{
        console.log("Effect 1: runs after every render");
    });
    //empty dependency array
    //this runs only once after the compoent mounts
        useEffect(()=>{
        console.log("Effect 2: runs only once after mount");
    },[]);

    //dependency
    useEffect(()=>{
        console.log("Effect 3: count changed to",count);
        return()=>{
            console.log("cleanup for effect 3:previous count: ",count);
        }
    },[count]);
    //event handler 
    function handleIncrement(){
        setCount((prevCount)=>prevCount+1);
    }
    function handleReset(){
        setCount(0);
    }
    return(
        <section>
            <h2>useEffect Lifecycle</h2>
            <p>Count: {count}</p>
            <button onClick={handleIncrement}>Increment</button>
           <button onClick={handleReset}>Reset</button>
        </section>
    )

    
}