// import { React } from "react";
// List Rendering 

const users = [
    {id:1, role:"Student"},
    {id:2, role:"Trainer"},
    {id:3, role:"Admin"},
    {id:4, role:"Developer"}
];

export function FunctionalComp(){
    return(
        <div>
            <h2>Functional components</h2>
            {/* List Rendering */}
            {users.map((user)=>(
                <p key = {user.id} className="pclass">
                    {user.role}
                </p>
            ))}
        </div>
    );
}