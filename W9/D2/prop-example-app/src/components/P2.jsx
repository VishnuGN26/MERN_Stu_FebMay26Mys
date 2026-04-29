// Props destructuring

// import { React } from "react"

function UserProfile({username,skill}){
    return(
        <div>
            <p>User : {username}</p>
            <p>Skill : {skill}</p>
        </div>
    )
}

// Parent Component 
export function PropDestructuring(){
    return(
        <>
        <h2>Prop Destructuring</h2>
        <UserProfile username="Vishnu" skill="mern" />
        </>
    );
}

