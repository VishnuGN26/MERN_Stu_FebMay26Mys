//Synthetic event vs native DOM events
//Synthetic event:
//A wrapper created by React around the browser's native event
//Gives a consistent API across browsers
//works similarly to native DOM events
//Still allows access to the original browser event via
//event.nativeEvent

//why does react use it ? 
//To make event handling behave consistently

//To simplify cross-browser differences

//To integrate smoothly with React's event system

//how Synthetic event  works:
//components renders: A button appears on the screen 
//handleClick is defined but it is not executed
//User clicks the button:
//browser creates a native click event 
//React wraps that native event in a syntheticEvent 
//React passes the SyntheticEvent to handleClick
//event refers to the SyntheticEvent
//event.target gives us the HTML elements

