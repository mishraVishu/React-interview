import { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();
const UserContext = createContext();

const UseContext = () => {
    const [theme, setTheme] = useState('light');
    const [isLoggedIn , setIsLoggedIn] = useState(true);

    const changeTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
        setIsLoggedIn(!isLoggedIn);
    }

    return (
        <ThemeContext.Provider value={{ theme, changeTheme }}>
            <UserContext.Provider value={{ isLoggedIn }}>
                <div>
                    <h3>UseContext</h3>
                    <h4>Question 1. What is useContext in React?</h4>
                    {
                        <>
                            <p>. Used to consume vlues(like data and functions) from context created by createContext()</p>
                            <p>. It allows functional components to access context values without prop drilling.</p>
                            <p>. In scenerios , where passing props to multiple level of components is impractical.</p>
                            <App />
                        </>
                    }
                    <h4>Question 2. Can you have multiple context in a single component?</h4>
                    {
                        <>
                            <p>Yes , we can create multiple context in a single component.</p>
                        </>
                    }
                </div>
            </UserContext.Provider>
        </ThemeContext.Provider>
    )
}

const App = () => {
    // using multiple contexts 
    const { theme, changeTheme } = useContext(ThemeContext);
    const { isLoggedIn } = useContext(UserContext);

    return (
        <div>
            <p>Theme: {theme}</p>
            <button onClick={changeTheme}>Change Theme</button>
            <p>{isLoggedIn ? 'User is loggedIn' : 'User is not loggedIn'}</p>
        </div>
    )

}

export default UseContext;