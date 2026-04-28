import React, { Component } from "react";

export class ClassComponentsBasics extends Component{
    //1.class extends React.Component
    //state,lifecycle methods,props,setState()

    render(){
        //render(): Return JSX describing what to show
        //called whenever component need to update
        return(
            <>
            <h2>Class Components</h2>
            <p>Class components use render() and support lifecycle methods</p>
            </>
        )
        
    }
}