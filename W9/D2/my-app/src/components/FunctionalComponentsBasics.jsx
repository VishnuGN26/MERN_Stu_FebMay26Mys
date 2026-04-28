import React from 'react';
function Welcome(props){
    //Child component : resuable UI
    return(
        <p>Hello, {props.name}</p>
    );
}

export function FunctionalComponentsBasics(){
    return(
        <div>
            <h2>Functional Components Basics</h2>
            {/* We are passing 'Vishnu' as prop Welcome function receives is as {name: "Vishnu"} */}
            <Welcome name="Vishnu" />
            {/* We are passing 'Developer' as prop Welcome function receives is as {name: "Developer"} */}
            <Welcome name="Developer" />
            </div>
    )
}