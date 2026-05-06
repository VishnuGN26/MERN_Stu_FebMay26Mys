//useContext
// Context: lets us share data between components without passing props manully through every level

import { createContext, useContext, useState } from 'react';
//Why useContext?
//1. Helps us avoid prop drilling
//2. USeful for shared values:
// - Theme (dark/light)
// - logged-in user details
// - language preference
// - app settings

// Basic steps :
// 1. Create a context
// 2. Wrap components with Provider
// 3. Read value using useContext()

// 1. Create a context
const ThemeContext = createContext();

// Child component 1
function Header() {
    const theme = useContext(ThemeContext);
    return (
        <header style={{
            padding: '20px',
            margin: '20px',
            background: theme === 'dark' ? '#222' : '#eee',
            color: theme === 'dark' ? '#fff' : '#000'
        }}>
            <h3>Header component</h3>
            <p>Current theme from context: {theme}</p>
        </header>
    );
}

//Child component 2
function Context(){
    const theme = useContext(ThemeContext);
    return(
        <div style={{
            padding:'20px',
            marginTop: '20px',
            background: theme === 'dark' ? '#333' : '#f9f9f9',
            color: theme === 'dark' ? '#fff' : '#000'
        }}>
            <p>This component also uses the same context value</p>
        </div>
    );
}

function Layout(){
    return(
        <div>
            <Header/>
            <Context/>
        </div>
    );
}

export function UseContextIntro(){
    //Shared state
    const [theme,setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return(
        <section>
            <h2>useContext Example via theme</h2>
            <p>
                Example to show the usage of context sharing
            </p>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <ThemeContext.Provider value={theme}>
                <Layout/>
            </ThemeContext.Provider>
        </section>
    )
}