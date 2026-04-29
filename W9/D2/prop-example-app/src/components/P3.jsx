//container/ wrapper component 
import { React } from "react";

//children is a special React prop
//It holds nested JSX passed between components tags
//It helps create resusable wrapper/layout components
function Container({children}){
    return(
        <div className="card">
            {children}
        </div>
    );

}
//parent component
export function PropsChildren(){
    return(
        <>
        <Container> {/*Container is a inbuilt keyword */}
            <h3>First child element in Nested approach</h3>
        </Container>
        </>

    )
}