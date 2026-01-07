import { Children, createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const useTheme = () => {
    return useContext(ThemeContext);
}

export const ThemeProvider = (props) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    }

    const theme = isDarkMode ? 'dark' : 'light';

     useEffect(() => {
        document.documentElement.setAttribute("data-theme",theme);
    }, [isDarkMode])

    return <ThemeContext.Provider value= {{ theme, toggleTheme }}>{props.children}</ThemeContext.Provider>
}