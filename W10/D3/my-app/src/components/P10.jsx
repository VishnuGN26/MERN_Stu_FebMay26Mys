//Accessibility for custom Clicakable elements
//to make non-button element behave like a accessible button 
export function Accessibility(){
    const handleClick = () => {
        alert('Custom button clicked');
    };
    return(
        <section>
            <h2>Accessibility</h2>
            <div role="button" tabIndex = {0} onClick = {handleClick} style={{padding:'20px',backgroundColor:'red'}}> 
                Custom Accessible Button
            </div>
            <button onClick={handleClick}>Real button</button>
        </section>
    )
}